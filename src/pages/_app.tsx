import "primereact/resources/themes/tailwind-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./globals.css";
import type { AppProps } from "next/app";
import { PrimeReactProvider } from "primereact/api";
//components
import Header from "@/components/header/Header";
import MainLayout from "@/components/layout/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider>
      <Header />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </PrimeReactProvider>
  );
}
