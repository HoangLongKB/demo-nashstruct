// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs/promises';
import path from 'path';

const nodemailer = require('nodemailer');

type Data = {
  success: boolean;
  message: string;
};

type CustomerInfo = {
  email: string;
  message: string;
};

type EmailTemplate = {
  adminTemplate: string;
  customerTemplate: string;
};

const mailConfig = {
  host: 'smtp.gmail.com',
  port: 465, // or 587
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.ADMIN_EMAIL, // your gmail account
    pass: process.env.ADMIN_EMAIL_PASSWORD, // your gmail app password
  },
};

const adminEmail = `The Webmaster <${process.env.ADMIN_EMAIL}>`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'POST') {
    res.status(405);
  }
  // Process a POST request
  const data = req.body;

  let transporter = nodemailer.createTransport(mailConfig);
  const customerEmail = data.email;
  const customerMessage = data.message;
  const customerInfo: CustomerInfo = {
    email: customerEmail,
    message: customerMessage,
  };

  const captchaToken = data.captchaToken;
  const verifyCaptchaResp = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    },
  );
  const verifyCaptchaData: any = await verifyCaptchaResp.json();
  if (verifyCaptchaData?.score < 0.5 || !verifyCaptchaData?.success) {
    console.log('recaptcha data', verifyCaptchaData);
    res.status(502).json({ success: false, message: 'Send Email Fail!' });
  }
  console.log('recaptcha data', verifyCaptchaData);

  const { adminTemplate, customerTemplate }: EmailTemplate =
    await getEmailTemplate(customerInfo);
  await transporter.sendMail({
    from: adminEmail,
    to: customerEmail,
    subject: 'Message Received ✔',
    text: customerTemplate, //
  });
  await transporter.sendMail({
    from: customerEmail,
    to: adminEmail,
    subject: 'New Message From Website ✔',
    text: adminTemplate,
  });
  res.status(200).json({ success: true, message: 'Send Email Success!' });
}

const getEmailTemplate = async (
  customerInfo: CustomerInfo,
): Promise<EmailTemplate> => {
  try {
    const adminFile = path.join(process.cwd(), 'email-template', 'admin.txt');
    const customerFile = path.join(
      process.cwd(),
      'email-template',
      'customer.txt',
    );
    const rawAdminTemplate = (await fs.readFile(adminFile, 'utf8')) || '';
    const rawCustomerTemplate = (await fs.readFile(customerFile, 'utf8')) || '';
    const adminTemplate = rawAdminTemplate
      .replace('%EMAIL%', customerInfo.email)
      .replace('%MESSAGE%', customerInfo.message);
    const customerTemplate = rawCustomerTemplate.replace(
      '%EMAIL%',
      customerInfo.email,
    );
    return { adminTemplate, customerTemplate };
  } catch (e) {
    console.log('Get Template file Error', e);
    throw e;
  }
};
