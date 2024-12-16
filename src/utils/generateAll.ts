import { generate } from "@/utils/generate";
import { Action, OS } from "@/const/const";
import dayjs from "dayjs";
import { GenerateValues, TGenerateFilename } from "@/types";
import { generateFilename } from "@/utils/generateFilename";

export const generateAll = (time: number, os: OS) => {
  const timeString = time.toString();
  const isForced = true;

  const values = {
    date: dayjs(),
    seconds: "0",
    minutes: "0",
    os: os,
    isForced,
    isOneLine: false,
    time: timeString,
  };

  const valuesFilename = {
    date: dayjs(),
    seconds: "0",
    minutes: "0",
    os: os,
    time: timeString,
  };

  const shutdown = generate({
    action: Action.shutdown,
    ...values,
  } as GenerateValues);

  const shutdownFilename = generateFilename({
    action: Action.shutdown,
    ...valuesFilename,
  } as TGenerateFilename);

  const lock = generate({
    action: Action.lock,
    ...values,
  } as GenerateValues);

  const logout = generate({
    action: Action.logout,
    ...values,
  } as GenerateValues);

  const sleep = generate({
    action: Action.sleep,
    ...values,
  } as GenerateValues);

  const sleepFilename = generateFilename({
    action: Action.sleep,
    ...valuesFilename,
  } as TGenerateFilename);

  const hibernate = generate({
    action: Action.hibernate,
    ...values,
  } as GenerateValues);

  const restart = generate({
    action: Action.restart,
    ...values,
  } as GenerateValues);

  const restartFilename = generateFilename({
    action: Action.restart,
    ...valuesFilename,
  } as TGenerateFilename);

  return {
    shutdown,
    lock,
    logout,
    sleep,
    hibernate,
    restart,
    shutdownFilename,
    sleepFilename,
    restartFilename,
  };
};
