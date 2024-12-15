import * as React from "react";
import "../../styles/global.css";

import { notFound } from "next/navigation";
import { locales, routing } from "@/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";
import { LocalePageLayout } from "@/app/LocalePageLayout";

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
    <LocalePageLayout locale={locale} messages={messages}>
      {children}
    </LocalePageLayout>
  );
}
