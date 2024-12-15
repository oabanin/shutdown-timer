import * as React from "react";

import { getTranslations } from "next-intl/server";
import { HomePageLocale } from "@/app/[locale]/HomePageLocale";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale || "en";
  const t = await getTranslations({ locale });
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
  };
}

export default function Home() {
  return <HomePageLocale />;
}
