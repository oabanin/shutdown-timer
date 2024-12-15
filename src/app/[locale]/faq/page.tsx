import * as React from "react";

import { getTranslations } from "next-intl/server";
import { FaqPageLocale } from "@/app/[locale]/faq/FaqPageLocale";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale || "en";
  const t = await getTranslations({ locale });
  return {
    title: t("faqTitle"),
    description: t("faqDescription"),
  };
}

export default function FAQ() {
  return <FaqPageLocale />;
}
