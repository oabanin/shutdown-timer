import { useLocale } from "next-intl";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useEffect } from "react";

export const RedirectDefaultTutorialPage = ({
  os = "windows",
}: {
  os?: "windows" | "macos";
}) => {
  const locale = useLocale();
  const { router } = useAppRouter(locale);

  useEffect(() => {
    router.push(`/tutorials/${os}/shutdown`);
  }, [router]);
  return null;
};
