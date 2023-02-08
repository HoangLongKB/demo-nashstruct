// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs/promises';
import { log } from 'console';
const nodemailer = require('nodemailer');

type Data = {
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
  if (req.method === 'POST') {
    // Process a POST request
    const data = req.body;
    console.log('==> data', data);
    
    let transporter = nodemailer.createTransport(mailConfig);
    const customerEmail = data.email;
    const customerMessage = data.message;
    const customerInfo: CustomerInfo = {
      email: customerEmail,
      message: customerMessage,
    };
    console.log(adminEmail, customerEmail);
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
    res.status(200).json({ message: 'Send Email Success!' });
  } else {
    // Handle any other HTTP method
    res.status(502).json({ message: 'Send Email Fail!' });
  }
}

const getEmailTemplate = async (
  customerInfo: CustomerInfo,
): Promise<EmailTemplate> => {
  try {
    const rawAdminTemplate =
      (await fs.readFile(process.env.BASE_URL + '/email-template/admin.txt', 'utf8')) || '';
    const rawCustomerTemplate =
      (await fs.readFile(process.env.BASE_URL + '/email-template/customer.txt', 'utf8')) || '';
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
