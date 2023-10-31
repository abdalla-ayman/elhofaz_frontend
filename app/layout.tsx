import "./globals.css";
import type { Metadata } from "next";
import { Kufam } from "next/font/google";
import Footer from './components/Footer'

//provider
import { Providers } from "./provider";

const inter = Kufam({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "مقارئ السفرة",
  description: "الموقع السمي لمقارئ السفرة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <AuthContextProvider>
    <html lang="en" dir="rtl">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        {/* <Footer /> */}
      </body>
    </html>
    // </AuthContextProvider>
  );
}
