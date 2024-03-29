import "@/styles/globals.css";
import { Noto_Sans_KR } from "next/font/google";
import type { AppProps } from "next/app";

const notoSansKR = Noto_Sans_KR({
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSansKR.className}>
      <Component {...pageProps} />
    </main>
  );
}
