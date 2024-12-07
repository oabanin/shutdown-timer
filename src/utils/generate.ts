import { GenerateValues } from "@/types";
import { OS } from "@/const/const";

import { getSecondsToAction } from "@/utils/getSecondsToAction";
import { getCMDWindows } from "@/utils/getCMDWindows";
import { getCMDMacOS } from "@/utils/getCMDMacOS";

export const generate = (data: GenerateValues) => {
  const isMacOS = data.os === OS.MACOS;

  const secondsToAction = getSecondsToAction(data);

  if (isMacOS) {
    return getCMDMacOS({
      secondsToAction,
      action: data.action,
      isOneLine: data.isOneLine,
    });
  }
  return getCMDWindows({
    secondsToAction,
    action: data.action,
    isForced: data.isForced,
    isOneLine: data.isOneLine,
  });
};
