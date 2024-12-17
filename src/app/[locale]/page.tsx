import * as React from "react";

import { getTranslations } from "next-intl/server";
import { HomePageLocale } from "@/components/home/Homepage/HomePageLocale";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: lang } = await Promise.resolve(params);
  const locale = lang || "en";
  const t = await getTranslations({ locale });
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
  };
}

export default function Home() {
  return <HomePageLocale />;
}