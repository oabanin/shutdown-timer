import * as React from "react";

import { getTranslations } from "next-intl/server";
import { FaqPageLocale } from "@/app/[locale]/faq/FaqPageLocale";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: lang } = await Promise.resolve(params);
  const locale = lang || "en";
  const t = await getTranslations({ locale });
  return {
    title: t("faqTitle"),
    description: t("faqDescription"),
  };
}

export default function FAQ() {
  return <FaqPageLocale />;
}
