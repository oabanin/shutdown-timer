import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFormContext, useWatch } from "react-hook-form";
import { TValues } from "@/types";
import { OS } from "@/const/const";

export default function OneLineCommand() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("isOneLine", event.target.checked);
  };

  const { control, setValue } = useFormContext<TValues>();
  const [isOneLine, os] = useWatch({
    control,
    name: ["isOneLine", "os"],
  });

  const isWindows = OS.WINDOWS === os;

  return (
    <FormControlLabel
      disabled={isWindows}
      control={<Checkbox checked={isOneLine} onChange={handleChange} />}
      label="One line command"
    />
  );
}
