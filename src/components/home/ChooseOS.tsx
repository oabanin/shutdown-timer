"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { OS } from "@/const/const";
import { useFormContext, useWatch } from "react-hook-form";

export default function ChooseOS() {
  const { control, setValue } = useFormContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue("os", value as OS);
  };

  const os = useWatch({
    control,
    name: "os",
  });

  return (
    <fieldset>
      <legend>Choose OS</legend>
      <FormControl>
        <RadioGroup value={os} onChange={handleChange}>
          <FormControlLabel
            value={OS.WINDOWS}
            control={<Radio />}
            label="Windows Vista/7/10/11"
          />
          <FormControlLabel
            value={OS.MACOS}
            control={<Radio />}
            label="MacOS"
          />
          <FormControlLabel
            value={OS.LINUX}
            control={<Radio />}
            label="Linux"
          />
        </RadioGroup>
      </FormControl>
    </fieldset>
  );
}
