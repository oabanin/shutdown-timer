import * as React from "react";

import { getTranslations } from "next-intl/server";
import { FaqPage } from "@/app/faq/FaqPage";

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
  return <FaqPage />;
}
