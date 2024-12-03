import { CustomTime, OS, Time } from "@/const/const";
import { getEnumName } from "@/utils/getEnumName";
import { isEnumValue } from "@/utils/isEnumValue";
import { TGenerateFilename, TValues } from "@/types";
import dayjs, { Dayjs } from "dayjs";

export const generateFilename = ({
  action,
  os,
  time,
  date,
  seconds,
  minutes,
}: TGenerateFilename) => {
  const isMacOS = os === OS.MACOS;
  let timeName;
  if (isEnumValue(time, Time)) {
    timeName = getEnumName(time, Time);
  }
  if (isEnumValue(time, CustomTime)) {
    if (time === CustomTime.minutes) {
      timeName = minutes + "min";
    }
    if (time === CustomTime.seconds) {
      timeName = seconds + "sec";
    }
    if (time === CustomTime.date) {
      const isToday = date.isSame(dayjs(), "day");
      if (isToday) {
        timeName = formatToLocaleTime(date);
      } else {
        timeName = formatToFilename(date);
      }
    }
  }

  return `${action}_${timeName || ""}${isMacOS ? ".sh" : ".bat"}`;
};

const formatToLocaleTime = (date: Dayjs): string => {
  return date.format("HHmm");
};

const formatToFilename = (date: Dayjs): string => {
  // Format date as 'YYYY-MM-DD' (ISO 8601 format)
  const formattedDate = date.format("YYYY-MM-DD");

  // Format time as 'HH-mm' for 24-hour format
  const formattedTime = date.format("HH-mm");

  // Return the final filename in 'YYYY-MM-DD_HH-mm.txt' format
  return `${formattedDate}_${formattedTime}`;
};
