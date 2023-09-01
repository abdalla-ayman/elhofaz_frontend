import "./globals.css";
import type { Metadata } from "next";
import { Mada } from "next/font/google";

//import AuthContext
import './context/AuthContext';
import AuthContextProvider from "./context/AuthContext";

const inter = Mada({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,

}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContextProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </AuthContextProvider>
  );
}
