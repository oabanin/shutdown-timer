import { Action, NewLine } from "@/const/const";
import { formatDuration } from "@/utils/formatDuration";

const sudoShutdown = "sudo shutdown";

export const getCMDMacOS = ({
  action,
  secondsToAction,
  isOneLine,
}: {
  action: Action;
  secondsToAction: string;
  isOneLine: boolean;
}) => {
  const connector = isOneLine ? " && " : NewLine.masOs;
  const formattedInterval =
    secondsToAction === "0"
      ? "now"
      : "in " + formatDuration(Number(secondsToAction));

  switch (action) {
    case Action.shutdown:
      return (
        `${sudoShutdown} -h +${secondsToAction}sec${connector}` +
        `osascript -e 'display notification "The computer will shutdown ${formattedInterval}" with title "Shutdown Notice"'`
      );
    case Action.restart:
      return (
        `${sudoShutdown} -r +${secondsToAction}sec${connector}` +
        `osascript -e 'display notification "The computer will restart ${formattedInterval}" with title "Restart Notice"'`
      );
    case Action.hibernate:
    case Action.sleep:
      return (
        `${sudoShutdown} -s +${secondsToAction}sec${connector}` +
        `osascript -e 'display notification "The computer will sleep ${formattedInterval}" with title "Sleep Notice"'`
      );
    case Action.abort:
      return `sudo killall shutdown`;
    case Action.lock:
      return (
        `osascript -e 'display notification "The computer will lock ${formattedInterval}" with title "Lock Notice"'${connector}` +
        `sleep ${secondsToAction}${connector}` +
        `pmset displaysleepnow`
      );
    case Action.logout:
      return (
        `osascript -e 'display notification "The computer will logout ${formattedInterval}" with title "Logout Notice"'${connector}` +
        `sleep ${secondsToAction}${connector}launchctl bootout user/$(id -u)`
      );
  }
};

// case Action.hibernate:
// return (
//   `sudo -v; while true; do sleep 60; sudo -v; done &${connector}` +
//   `osascript -e 'display notification "The computer will hibernate ${formattedInterval}" with title "Hibernate Notice"'${connector}` +
//   `sleep ${secondsToAction}${connector}` +
//   `sudo pmset hibernatemode 25${connector}` +
//   `sudo pmset standbydelaylow 0 standbydelayhigh 0${connector}` +
//   `osascript -e 'tell application "System Events" to sleep'`
// );
