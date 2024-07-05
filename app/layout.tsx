import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import { Web3ModalProvider } from '@/providers/Web3ModalProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facterless",
  description: "Facterless App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body suppressHydrationWarning={true} className={inter.className}>
    <div className="max-w-[1280px] m-auto px-5">
      <Web3ModalProvider>
        <Header/>
        {children}
      </Web3ModalProvider>
    </div>
    </body>
    </html>
  );
}
