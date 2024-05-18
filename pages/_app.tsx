import '@/styles/globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import AuthProvider from '@/context/authProvider';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSansKR.className}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </main>
  );
}
