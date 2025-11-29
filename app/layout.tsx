import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "material-icons/iconfont/material-icons.css"; // Ensure you install 'material-icons' or add CDN in layout head

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrendForge AI",
  description: "Market intelligence dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
