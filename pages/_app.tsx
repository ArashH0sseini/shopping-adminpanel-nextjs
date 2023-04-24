import "@/assets/css/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import {RecoilRoot} from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <RecoilRoot>
      <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  );
}
