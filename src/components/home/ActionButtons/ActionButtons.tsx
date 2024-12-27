import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import s from "@/components/home/TextFieldCopy/TextFieldCopy.module.scss";
import { useFormContext, useWatch } from "react-hook-form";
import { TValues } from "@/types";
import { useCopyAndNotify } from "@/hooks/useCopyAndNotify";
import { useTranslations } from "next-intl";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export const ActionButtons = () => {
  const { control } = useFormContext<TValues>();
  const cmd = useWatch({
    control,
    name: "cmd",
  });
  const { copyToClipboard } = useCopyAndNotify();
  const t = useTranslations();
  const handleCopy = () => {
    copyToClipboard(cmd);
  };

  return (
    <>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Button
          startIcon={<ContentCopyIcon />}
          onClick={handleCopy}
          className={s.button}
          type="button"
          variant="outlined"
          size="large"
        >
          {t("copyCommand")}
        </Button>
        <Button
          startIcon={<FileDownloadIcon />}
          type="submit"
          variant="contained"
          size="large"
        >
          {t("downloadFile")}
        </Button>
      </Box>
    </>
  );
};
