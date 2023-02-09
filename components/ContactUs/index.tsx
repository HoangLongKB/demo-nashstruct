import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface FormData {
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [sendSuccess, setSendSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available', executeRecaptcha);
      return;
    }

    const gReCaptchaToken = await executeRecaptcha('enquiryFormSubmit');
    console.log('form data', data);
    setLoading(true);
    await sendEmail(data, gReCaptchaToken);
    setLoading(false);
  };

  const sendEmail = async (data: FormData, captchaToken: string) => {
    const { email, message } = data;

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, message, captchaToken}),
    });

    if (response.ok) {
      console.log('Email sent successfully');
      setSendSuccess(true);
    } else {
      console.log('Error sending email');
      setSendSuccess(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-orange-300 p-4 text-orange-800 text-center">
        Sending...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 py-12">
      {sendSuccess ? (
        <div className="bg-green-200 p-4 text-green-800 text-center">
          Message sent successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-lg font-medium mb-6 text-gray-900">
              Contact Us
            </h2>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className={`w-full border border-gray-400 p-2 ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">Email is required</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                {...register('message', { required: true })}
                className={`w-full border border-gray-400 p-2 h-32 ${
                  errors.message ? 'border-red-500' : ''
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs italic">
                  Message is required
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
