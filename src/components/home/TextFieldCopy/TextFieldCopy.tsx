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

  const [
    action,
    time,
    date,
    seconds,
    minutes,
    os,
    cmd,
    isForced,
    isOneLine,
    commandTool,
  ] = useWatch({
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
      "commandTool",
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
    commandTool,
  } as GenerateValues);

  useEffect(() => {
    setValue("cmd", command, {
      shouldTouch: true,
    });
  }, [command]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <TextareaAutosize
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setValue("cmd", event.target.value, {
            shouldTouch: true,
          });
        }}
        className={s.textarea}
        minRows={3}
        value={cmd}
      />
    </Box>
  );
};
