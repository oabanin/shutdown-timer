import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import s from "@/components/home/TextFieldCopy/TextFieldCopy.module.scss";
import { useFormContext, useWatch } from "react-hook-form";
import { TValues } from "@/types";
import { useCopyAndNotify } from "@/hooks/useCopyAndNotify";

export const ActionButtons = () => {
  const { control } = useFormContext<TValues>();
  const cmd = useWatch({
    control,
    name: "cmd",
  });
  const { copyToClipboard } = useCopyAndNotify();

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
          onClick={handleCopy}
          className={s.button}
          type="button"
          variant="outlined"
          size="large"
        >
          Copy command
        </Button>
        <Button type="submit" variant="contained" size="large">
          Download file
        </Button>
      </Box>
    </>
  );
};
