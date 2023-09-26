"use client";
import { SessionProvider } from "next-auth/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

// compinent= navbar
import Navbar from "./components/Navbar";

//adding rtl direction to mui
// link https://mui.com/material-ui/guides/right-to-left/

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
  palette: {
    primary: {
      main: "#53421f",
      light: "#cba346",
    },
  },
  typography: {
    fontFamily: "inherit",
  },
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
