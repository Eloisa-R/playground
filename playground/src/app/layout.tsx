import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-rows-[minmax(0,100px),auto] grid-cols-[minmax(0,300px),auto]">
        <header className="col-span-2"></header>
        <aside></aside>
        <main>{children}</main></div></body>
    </html>
  );
}
