import { useFormContext, useWatch } from "react-hook-form";
import { TValues } from "@/types";

import { TextField } from "@mui/material";

import * as React from "react";

import { useEffect } from "react";
import { generateFilename } from "@/utils/generateFilename";
import { useTranslations } from "next-intl";

export const FileName = () => {
  const { control, setValue, getFieldState } = useFormContext<TValues>();

  const [action, time, date, seconds, minutes, os, filename, commandTool] =
    useWatch({
      control,
      name: [
        "action",
        "time",
        "date",
        "seconds",
        "minutes",
        "os",
        "filename",
        "commandTool",
      ],
    });

  const name = generateFilename({
    action,
    time,
    date,
    seconds,
    minutes,
    os,
    commandTool,
  });
  const t = useTranslations();
  useEffect(() => {
    if (!getFieldState("filename").isTouched) {
      setValue("filename", name);
    }
  }, [name]);

  return (
    <TextField
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setValue("filename", event.target.value, {
          shouldTouch: true,
        });
      }}
      sx={{ width: "100%" }}
      label={t("filename")}
      value={filename}
    ></TextField>
  );
};
