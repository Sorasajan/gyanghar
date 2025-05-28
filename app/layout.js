import { Roboto } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "./_globalComponent/themecomponent/context/themeContext";

const roboto = Roboto({
  variable: "--font-roboto",
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
      <body className={`${roboto.variable} antialiased `}>
        <ThemeProvider>
          <div className="min-h-screen w-full text-sm">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
