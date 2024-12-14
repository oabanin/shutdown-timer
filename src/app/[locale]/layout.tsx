import * as React from "react";
import "../../styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Power Command Builder for Windows 10/11 & MacOS: Shutdown, Restart, Sleep, and More",
  description:
    "Create custom commands for shutdown, restart, sleep, hibernate, and more with Power Command Builder for Windows 10/11 & MacOS. Copy commands or download .bat and .command files for easy use.",
};

import { notFound } from "next/navigation";
import { locales, routing } from "@/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";
import { HomePageLayout } from "@/app/HomePageLayout";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await Promise.resolve(params);

  if (!locales.includes(locale)) {
    notFound();
  }
  setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <HomePageLayout locale={locale} messages={messages}>
      {children}
    </HomePageLayout>
  );
}
