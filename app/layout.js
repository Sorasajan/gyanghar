import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "./_globalComponent/themecomponent/context/themeContext";
import { AdminDataProvider } from "./admin/_component/context/adminDataContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GyanGhar",
  description:
    "Gyanghar webapp. your one stop go for all your educational needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen w-full text-sm">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
