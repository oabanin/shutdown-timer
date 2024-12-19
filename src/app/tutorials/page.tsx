import * as React from "react";

import { TutorialsPage } from "@/components/tutorials/TutorialsPage";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ locale: string }>;
// }) {
//   const { locale: lang } = await Promise.resolve(params);
//   const locale = lang || "en";
//   const t = await getTranslations({ locale });
//   return {
//     title: t("tutorialsTitle"),
//     description: t("tutorialsDescription"),
//   };
// }

export default function FAQ() {
  return <TutorialsPage />;
}
