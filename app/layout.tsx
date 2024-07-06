import type { Metadata } from "next";
import { Syne } from 'next/font/google';
import "./globals.css";
import Header from '@/components/Header';
import { Web3ModalProvider } from '@/providers/Web3ModalProvider';
import LeftCircles from '@/components/LeftCircles';
import RightCircles from '@/components/RightCircles';

const syne = Syne({ subsets: ["latin"] });

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
      <body suppressHydrationWarning={true} className={syne.className}>
        <div className="max-w-[1280px] h-screen m-auto px-5">
          <LeftCircles />
          <RightCircles />
          <Web3ModalProvider>
            <Header/>
            {children}
          </Web3ModalProvider>
        </div>
      </body>
    </html>
  );
}
