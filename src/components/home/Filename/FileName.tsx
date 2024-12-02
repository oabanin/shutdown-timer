import { useFormContext, useWatch } from "react-hook-form";
import { TValues } from "@/types";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import s from "@/components/home/TextFieldCopy/TextFieldCopy.module.scss";
import * as React from "react";

export const FileName = () => {
  const { control } = useFormContext<TValues>();

  const filename = useWatch({
    control,
    name: "filename",
  });

  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <TextField
        className={s.textarea}
        multiline
        rows={3}
        value={filename}
      ></TextField>
    </Box>
  );
};
