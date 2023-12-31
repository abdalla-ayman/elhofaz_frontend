import "./globals.css";
import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";

//provider
import { Providers } from "./provider";

const inter = Noto_Kufi_Arabic({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "مقارئ السفرة",
  description: "الموقع الالكتروني الرسمي لمنصة مقارئ السفرة لتحفيظ القران الكريم",
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
