import Button from "@mui/material/Button";
import * as React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { TValues } from "@/types";
import { OS } from "@/const/const";
import Box from "@mui/material/Box";
import s from "@/components/home/BoxCopy/BoxCopy.module.scss";

export const DownloadButton = () => {
  const { control } = useFormContext<TValues>();

  const os = useWatch({
    control,
    name: "os",
  });

  const extension = os === OS.MACOS ? "sh" : "bat";
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
        className={s.button}
        type="button"
        variant="outlined"
        size="large"
      >
        Copy command
      </Button>
      <Button type="submit" variant="contained" size="large">
        Download {extension} file
      </Button>
    </Box>
  );
};
