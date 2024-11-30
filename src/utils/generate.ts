import { TValues } from "@/types";
import { OS } from "@/const/const";

import { getSecondsToAction } from "@/utils/getSecondsToAction";
import { getCMDWindows } from "@/utils/getCMDWindows";
import { getCMDMacOS } from "@/utils/getCMDMacOS";

export const generate = (data: TValues) => {
  const isMacOS = data.os === OS.MACOS;

  const secondsToAction = getSecondsToAction(data);

  if (isMacOS) {
    return getCMDMacOS({ secondsToAction, action: data.action });
  }
  return getCMDWindows({ secondsToAction, action: data.action });
};
