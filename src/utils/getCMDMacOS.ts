import { Action, NewLine } from "@/const/const";

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

  switch (action) {
    case Action.shutdown:
      return `${sudoShutdown} -h +${secondsToAction}sec`;
    case Action.restart:
      return `${sudoShutdown} -r +${secondsToAction}sec`;
    case Action.logout:
      return `${sudoShutdown} -k +${secondsToAction}sec`;
    case Action.sleep:
      return `${sudoShutdown} -s +${secondsToAction}sec`;
    case Action.abort:
      return `sudo killall shutdown`;
    case Action.lock:
      return `sleep ${secondsToAction}${connector}pmset displaysleepnow`;
    case Action.hibernate:
      return (
        `sudo sleep ${secondsToAction}${connector}` +
        `sudo pmset hibernatemode 25${connector}` +
        `sudo pmset standbydelaylow 0 standbydelayhigh 0${connector}` +
        `osascript -e 'tell application "System Events" to sleep'`
      );
  }
};

// return "sudo pmset hibernatemode 25; sudo pmset sleepnow";

// #!/bin/bash
//
// # Wait for 30 seconds
// sudo sleep 30
//
// # Temporarily set hibernation mode to 25 and standby delay to 0 for this session
// sudo pmset hibernatemode 25
// sudo pmset standbydelaylow 0 standbydelayhigh 0
//
// # Trigger system sleep, which transitions to hibernation
// osascript -e 'tell application "System Events" to sleep'
//
// # Note: These settings are not saved and will reset after the system wakes or restarts.
