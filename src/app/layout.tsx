import React from 'react';
import type { Metadata } from "next";
import AppProvider from '@/contexts/AppProvider';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata:Metadata = {
  title: "AI Writing Assistant",
  description: "A simple writing assistant that leverages an AI text-generation API to help users improve or rewrite sentences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppProvider>
          <Navbar />
            {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
