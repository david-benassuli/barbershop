import type { Metadata } from "next";
import "./globals.css";

import { Bodoni_Moda, DM_Sans } from "next/font/google"

export const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
})

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
})

export const metadata: Metadata = {
  title: "Barbershop",
  description: "Criado por Felipe David",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${dmSans.variable}`}
    >
      <link rel="shortcut icon" href="/barbershop.ico" type="image/x-icon" />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
