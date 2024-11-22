"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { OS } from "@/const/const";

export default function ChooseOS() {
  const [os, setOs] = React.useState<OS>(OS.windows);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setOs(value as OS);
  };

  return (
    <fieldset>
      <legend>Choose OS</legend>
      <FormControl>
        <RadioGroup value={os} onChange={handleChange}>
          <FormControlLabel
            value={OS.windows}
            control={<Radio />}
            label="Windows"
          />
          <FormControlLabel
            value={OS.macos}
            control={<Radio />}
            label="MacOS"
          />
          <FormControlLabel
            value={OS.linux}
            control={<Radio />}
            label="Linux"
          />
        </RadioGroup>
      </FormControl>
    </fieldset>
  );
}
