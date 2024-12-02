import { Action, OS } from "@/const/const";
import dayjs from "dayjs";

export type TValues = {
  action: Action;
  time: string;
  date: dayjs.Dayjs;
  seconds: string;
  minutes: string;
  os: OS;

  cmd: string;
  filename: string;
};

export type GenerateValues = Omit<TValues, "cmd" | "filename">;