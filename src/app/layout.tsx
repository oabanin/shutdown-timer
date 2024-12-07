import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import AppBar from "@/components/AppBar";
import { Favicons } from "@/app/Favicons";
import Container from "@mui/material/Container";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Shutdown timer</title>
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
