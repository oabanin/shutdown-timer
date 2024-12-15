import { Alert } from "@mui/material";
import * as React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { TValues } from "@/types";
import { OS } from "@/const/const";
import { CopyCode } from "@/components/home/CopyCode/CopyCode";
import { useTranslations } from "next-intl";

export const AlertMacOs = () => {
  const { control } = useFormContext<TValues>();

  const [os, filename] = useWatch({
    control,
    name: ["os", "filename"],
  });
  const t = useTranslations();
  if (os === OS.WINDOWS) return null;

  return (
    <Alert
      sx={{
        mt: 2.5,
        display: "flex",
        alignItems: "center",
        "& .MuiAlert-message": {
          padding: 0, // Remove padding for the message
        },
      }}
      variant="filled"
      severity="info"
    >
      {t("whenDownloading")}{" "}
      <CopyCode code={`chmod +x ~/Downloads/${filename}`} />
    </Alert>
  );
};
