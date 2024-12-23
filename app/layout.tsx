import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "./Header";

export const metadata: Metadata = {
  title: "Portofolio Website",
  description: "Hi this is Ovie Revaldi Portofolio!",
};

const robotoFont = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"]
})

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${robotoFont.className} bg-white dark:bg-primary-gray dark:text-white`}>
        <Toaster position="bottom-center" reverseOrder={false}></Toaster>
        <Header />
        {children}
      </body>
    </html>
  );
}
