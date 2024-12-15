import { useSnackbar } from "@/context/SnackbarContext";
import { useTranslations } from "next-intl";

export const useCopyAndNotify = () => {
  const { showSnackbar } = useSnackbar();
  const t = useTranslations();
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showSnackbar(t("successfullyCopied"), "success");
    } catch (error) {
      console.error("Error copying text to clipboard:", error);
      showSnackbar(t("failedToCopy"), "error");
    }
  };

  return { copyToClipboard };
};
