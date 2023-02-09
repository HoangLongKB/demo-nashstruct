import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
      useEnterprise={false}
      container={{
        parameters: {
          badge: 'bottomright',
        },
      }}
      scriptProps={{
        async: false, // optional, default to false,
        defer: true, // optional, default to false
        appendTo: 'body', // optional, default to "head", can be "head" or "body",
        nonce: undefined,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GoogleReCaptchaProvider>
  );
}
