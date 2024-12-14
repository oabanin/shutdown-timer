import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../theme";
import "../../styles/global.css";
import AppBar from "@/components/AppBar";
import { Favicons } from "@/app/[locale]/Favicons";
import Container from "@mui/material/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Power Command Builder for Windows 10/11 & MacOS: Shutdown, Restart, Sleep, and More",
  description:
    "Create custom commands for shutdown, restart, sleep, hibernate, and more with Power Command Builder for Windows 10/11 & MacOS. Copy commands or download .bat and .command files for easy use.",
};

import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { locales, routing } from "@/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale)) {
    notFound();
  }
  setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

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
}
