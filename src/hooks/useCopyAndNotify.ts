import { useSnackbar } from "@/context/SnackbarContext";

export const useCopyAndNotify = () => {
  const { showSnackbar } = useSnackbar();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showSnackbar("Successfully copied!", "success");
    } catch (error) {
      console.error("Error copying text to clipboard:", error);
      showSnackbar("Failed to copy text.", "error");
    }
  };

  return { copyToClipboard };
};
