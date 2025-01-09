import * as React from "react";
import { WindowsShutdownPageComponent } from "@/components/tutorials/windows/WindowsShutdownPageComponent";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: lang } = await Promise.resolve(params);
  const locale = lang || "en";
  const t = await getTranslations({ locale });
  return {
    title: t("shutdownWindowsTitle"),
    description: t("shutdownWindowsDescription"),
  };
}
export default function ShutdownWinPage() {
  return <WindowsShutdownPageComponent />;
}
