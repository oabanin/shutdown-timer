import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import { generate } from "@/utils/generate";
import { useFormContext, useWatch } from "react-hook-form";

import { TValues } from "@/types";
import { TextareaAutosize } from "@mui/material";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
};

export const BoxCopy = () => {
  const { control } = useFormContext<TValues>();

  const all = useWatch({
    control,
  });

  console.log(all, "all!!!");

  const cmd = generate(all as TValues);
  console.log(cmd);
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TextareaAutosize value={cmd}></TextareaAutosize>;
      <Box sx={{ ...commonStyles, borderRadius: "16px" }}>{cmd}</Box>
      <Button type="submit" variant="outlined" size="large">
        Copy command
      </Button>
    </Box>
  );
};
