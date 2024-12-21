import * as React from "react";
import { WindowsSleepPageComponent } from "@/components/tutorials/windows/WindowsSleepPageComponent";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ locale: string }>;
// }) {
//   const { locale: lang } = await Promise.resolve(params);
//   const locale = lang || "en";
//   const t = await getTranslations({ locale });
//   return {
//     title: t("homeTitle"),
//     description: t("homeDescription"),
//   };
// }

export default function SleepWinPage() {
  return <WindowsSleepPageComponent />;
}
