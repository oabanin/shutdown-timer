import * as React from "react";
import Box from "@mui/material/Box";
import s from "./CopyCode.module.scss";
import { useCopyAndNotify } from "@/hooks/useCopyAndNotify";
import { useTranslations } from "next-intl";

export const CopyCode = ({ code }: { code: string }) => {
  const { copyToClipboard } = useCopyAndNotify();
  const t = useTranslations();
  return (
    <Box
      sx={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
      component="code"
    >
      {code}
      <button
        onClick={() => {
          copyToClipboard(code);
        }}
        className={s.button}
        type="button"
      >
        {t("copy")}
      </button>
    </Box>
  );
};
