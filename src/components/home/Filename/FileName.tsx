import { useFormContext, useWatch } from "react-hook-form";
import { TValues } from "@/types";

import { TextField } from "@mui/material";

import * as React from "react";

import { useEffect } from "react";
import { generateFilename } from "@/utils/generateFilename";

export const FileName = () => {
  const { control, setValue, getFieldState } = useFormContext<TValues>();

  const [action, time, date, seconds, minutes, os, filename] = useWatch({
    control,
    name: ["action", "time", "date", "seconds", "minutes", "os", "filename"],
  });

  const name = generateFilename({
    action,
    time,
    date,
    seconds,
    minutes,
    os,
  });

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
      label="Filename"
      value={filename}
    ></TextField>
  );
};
