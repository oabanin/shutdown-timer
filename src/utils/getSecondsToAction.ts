import { GenerateValues } from "@/types";
import { CustomTime } from "@/const/const";
import dayjs from "dayjs";

export function getSecondsToAction(data: GenerateValues) {
  if (!data || !data.time) {
    return "0";
  }

  switch (data.time) {
    case CustomTime.minutes:
      return data.minutes ? (Number(data.minutes) * 60).toString() : "0";
    case CustomTime.seconds:
      return data.seconds || "0";
    case CustomTime.date:
      return data.date
        ? Math.abs(dayjs().diff(data.date, "second")).toString()
        : "0";
    default:
      return data.time;
  }
}
