import { Action, NewLine } from "@/const/const";
import { formatDuration } from "@/utils/formatDuration";

const shutdown = "shutdown";
const timeout = "timeout /t";
const rundll32 = "rundll32.exe";
const nobreak = "/nobreak";
const closeWindow = "Close this window if you want to cancel";

export const getCMDWindows = ({
  action,
  secondsToAction,
  isForced,
  isOneLine,
}: {
  action: Action;
  secondsToAction: string;
  isForced: boolean;
  isOneLine: boolean;
}) => {
  const f = isForced ? "/f " : "";
  const connector = isOneLine ? " & " : NewLine.win;
  const nobreakRundll32 = `${nobreak}${connector}${rundll32}`;
  const formattedInterval =
    secondsToAction === "0"
      ? "now"
      : "in " + formatDuration(Number(secondsToAction));

  //если 0 то ненужен таймер
  //таймер можно прервать нажав любую клавишу
  switch (action) {
    case Action.shutdown:
      return `${shutdown} /s ${f}/t ${secondsToAction}`;
    case Action.restart:
      return `${shutdown} /r ${f}/t ${secondsToAction}`;
    case Action.logout:
      return `echo "The computer will log off ${formattedInterval}. ${closeWindow}"${connector}${timeout} ${secondsToAction}${connector}${shutdown} /l ${f}`;
    case Action.lock:
      return `echo "The computer will lock ${formattedInterval}. ${closeWindow}"${connector}${timeout} ${secondsToAction} ${nobreakRundll32} user32.dll,LockWorkStation`;
    case Action.sleep:
      return `echo "The computer will sleep ${formattedInterval}. ${closeWindow}"${connector}${timeout} ${secondsToAction} ${nobreakRundll32} powrprof.dll,SetSuspendState Sleep`;
    case Action.hibernate:
      return `echo "The computer will hibernate ${formattedInterval}. ${closeWindow}"${connector}${timeout} ${secondsToAction}${connector}${shutdown} /h ${f}`;
    case Action.abort:
      return `${shutdown} /a`;
    // case Action.hibernate:
    //   return `${timeout} ${secondsToAction} ${nobreakRundll32} powrprof.dll,SetSuspendState Hibernate`;
  }
};
