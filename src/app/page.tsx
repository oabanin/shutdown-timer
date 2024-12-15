import * as React from "react";
import "../styles/global.css";
import { getTranslations } from "next-intl/server";
import { Homepage } from "@/app/Homepage/Homepage";

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
  return <Homepage />;
}
