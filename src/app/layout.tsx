import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import "../styles/global.css";
import AppBar from "@/components/AppBar";
import { Favicons } from "@/app/Favicons";
import Container from "@mui/material/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Power Command Builder for Windows 10/11 & MacOS: Shutdown, Restart, Sleep, and More",
  description:
    "Create custom commands for shutdown, restart, sleep, hibernate, and more with Power Command Builder for Windows 10/11 & MacOS. Copy commands or download .bat and .command files for easy use.",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Favicons />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar />
            <Container maxWidth="lg">{props.children}</Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
