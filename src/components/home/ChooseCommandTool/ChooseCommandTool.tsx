"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { COMMAND_TOOL, OS } from "@/const/const";
import { useFormContext, useWatch } from "react-hook-form";
import { useTranslations } from "next-intl";

export default function ChooseCommandTool() {
  const { control, setValue } = useFormContext();
  const t = useTranslations();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue("commandTool", value as COMMAND_TOOL);
  };

  const [os, commandTool] = useWatch({
    control,
    name: ["os", "commandTool"],
  });

  const isWindows = OS.WINDOWS === os;

  if (!isWindows) return null;

  return (
    <fieldset>
      <legend>{t("chooseCommandTool")}</legend>
      <FormControl>
        <RadioGroup value={commandTool} onChange={handleChange}>
          <FormControlLabel
            value={COMMAND_TOOL.cmd}
            control={<Radio />}
            label="Command Prompt (CMD)"
          />
          <FormControlLabel
            value={COMMAND_TOOL.powershell}
            control={<Radio />}
            label="PowerShell"
          />
        </RadioGroup>
      </FormControl>
    </fieldset>
  );
}
