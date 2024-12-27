import { Action, COMMAND_TOOL, OS } from "@/const/const";
import dayjs from "dayjs";

export type TValues = {
  action: Action;
  time: string;
  date?: dayjs.Dayjs;
  seconds: string;
  minutes: string;
  os: OS;
  commandTool: COMMAND_TOOL;
  isForced: boolean;
  isOneLine: boolean;

  cmd: string;
  filename: string;
};

export type GenerateValues = Omit<TValues, "cmd" | "filename">;

export type TGenerateFilename = Omit<
  TValues,
  "cmd" | "filename" | "isForced" | "isOneLine"
>;
