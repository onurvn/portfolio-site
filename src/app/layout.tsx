import type { Metadata } from "next";
import {Sora} from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sora.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
