import "@/styles/globals.css";
import '@/app/services/i18n'
import "react-tooltip/dist/react-tooltip.css";
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
