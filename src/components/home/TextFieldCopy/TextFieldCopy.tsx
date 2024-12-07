import Box from "@mui/material/Box";
import * as React from "react";
import { generate } from "@/utils/generate";
import { useFormContext, useWatch } from "react-hook-form";
import s from "./TextFieldCopy.module.scss";

import { GenerateValues, TValues } from "@/types";
import { TextareaAutosize } from "@mui/material";
import { useEffect } from "react";

export const TextFieldCopy = () => {
  const { control, setValue } = useFormContext<TValues>();

  const [action, time, date, seconds, minutes, os, cmd, isForced, isOneLine] =
    useWatch({
      control,
      name: [
        "action",
        "time",
        "date",
        "seconds",
        "minutes",
        "os",
        "cmd",
        "isForced",
        "isOneLine",
      ],
    });

  const command = generate({
    action,
    time,
    date,
    seconds,
    minutes,
    os,
    isForced,
    isOneLine,
  } as GenerateValues);

  useEffect(() => {
    setValue("cmd", command, {
      shouldTouch: true,
    });
  }, [command]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <TextareaAutosize
        //label="Command"
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setValue("cmd", event.target.value, {
            shouldTouch: true,
          });
        }}
        className={s.textarea}
        //multiline
        minRows={3}
        value={cmd}
      ></TextareaAutosize>
    </Box>
  );
};
