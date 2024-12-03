import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import s from "@/components/home/TextFieldCopy/TextFieldCopy.module.scss";
import { useFormContext, useWatch } from "react-hook-form";
import { generate } from "@/utils/generate";
import { GenerateValues, TValues } from "@/types";
import { useEffect } from "react";

export const DownloadButton = () => {
  const { control } = useFormContext<TValues>();
  const cmd = useWatch({
    control,
    name: "cmd",
  });

  const handleCopy = () => {
    navigator.clipboard
      .writeText(cmd)
      .then(() => {
        console.log("ok");
        // setIsCopied(true);
        // setTimeout(() => setIsCopied(false), 2000); // Reset the "Copied!" message after 2 seconds
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
      });
  };

  return (
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
  );
};
