import { Action } from "@/const/const";

const sudoShutdown = "sudo shutdown";

export const getCMDMacOS = ({
  action,
  secondsToAction,
}: {
  action: Action;
  secondsToAction: string;
}) => {
  switch (action) {
    case Action.shutdown:
      return `${sudoShutdown} -h +${secondsToAction}sec`;
    case Action.restart:
      return `${sudoShutdown} -r +${secondsToAction}sec`;
    case Action.logout:
      return `${sudoShutdown} -k +${secondsToAction}sec`;
    case Action.sleep:
      return `${sudoShutdown} -s +${secondsToAction}sec`;
    case Action.lock:
      return `sleep ${secondsToAction} && /System/Library/CoreServices/Menu\\ Extras/User.menu/Contents/Resources/CGSession -suspend`;
    case Action.hibernate:
      return `sudo pmset -a hibernatemode 25 standbydelayhigh ${secondsToAction} standbydelaylow ${secondsToAction}`;
    // return "sudo pmset hibernatemode 25; sudo pmset sleepnow";
  }
};
