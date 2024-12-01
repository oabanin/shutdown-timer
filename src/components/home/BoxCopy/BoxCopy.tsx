import Box from "@mui/material/Box";
import * as React from "react";
import { generate } from "@/utils/generate";
import { useFormContext, useWatch } from "react-hook-form";
import s from "./BoxCopy.module.scss";

import { TValues } from "@/types";
import { TextField } from "@mui/material";

export const BoxCopy = () => {
  const { control } = useFormContext<TValues>();

  const all = useWatch({
    control,
  });

  const cmd = generate(all as TValues);

  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <TextField
        className={s.textarea}
        multiline
        rows={3}
        value={cmd}
      ></TextField>
    </Box>
  );
};
