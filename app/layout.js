"use-client";
import { Inter } from "next/font/google";
import "./globals.css";
import Land from "../components/Land";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pass-Gen",
  description: "Password Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Land />
      </body>
    </html>
  );
}
