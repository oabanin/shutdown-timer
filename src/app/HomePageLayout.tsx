"use client";
import * as React from "react";
import { Favicons } from "@/app/[locale]/Favicons";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@/components/AppBar";
import Container from "@mui/material/Container";

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl"; // Adjust this path to your messages file
export const HomePageLayout = ({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages | undefined;
}) => {
  return (
    <html lang={locale}>
      <head>
        <Favicons />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <AppBar />
              <Container maxWidth="lg">{children}</Container>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
