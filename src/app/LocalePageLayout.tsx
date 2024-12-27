"use client";
import * as React from "react";
import { Favicons } from "@/app/[locale]/Favicons";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@/components/AppBar";

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { SnackbarProvider } from "@/context/SnackbarContext";

export const LocalePageLayout = ({
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  const buttonInstall = document.getElementById('buttonInstall');
  setTimeout(()=>{buttonInstall.classList.toggle('install-disabled', false);},300)
});

window.addEventListener('appinstalled', () => {
  window.deferredPrompt = null;
});

`,
          }}
        ></script>
        <SnackbarProvider>
          <NextIntlClientProvider
            timeZone="America/New_York"
            locale={locale}
            messages={messages}
          >
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar locale={locale} />
                {children}
              </ThemeProvider>
            </AppRouterCacheProvider>
          </NextIntlClientProvider>
        </SnackbarProvider>
      </body>
    </html>
  );
};
