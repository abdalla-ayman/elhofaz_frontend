"use client";
import { SessionProvider } from "next-auth/react";

// compinent= navbar 
import Navbar from './components/Navbar'


export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>
    <Navbar />
    {children}</SessionProvider>;
}
