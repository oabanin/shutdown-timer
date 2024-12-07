import { Action, NewLine } from "@/const/const";

const shutdown = "shutdown";
const timeout = "timeout /t";
const rundll32 = "rundll32.exe";
const nobreak = "/nobreak";

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
  const f = isForced ? "/f" : "";
  const nobreakRundll32 = `${nobreak}${isOneLine ? " & " : NewLine.win}${rundll32}`;

  switch (action) {
    case Action.shutdown:
      return `${shutdown} /s ${f} /t ${secondsToAction}`;
    case Action.restart:
      return `${shutdown} /r ${f} /t ${secondsToAction}`;
    case Action.logout:
      return `${shutdown} /l ${f} /t ${secondsToAction}`;
    case Action.lock:
      return `${timeout} ${secondsToAction} ${nobreakRundll32} user32.dll,LockWorkStation`;
    case Action.sleep:
      return `${timeout} ${secondsToAction} ${nobreakRundll32} powrprof.dll,SetSuspendState Sleep`;
    case Action.hibernate:
      return `${shutdown} /h ${f} /t ${secondsToAction}`;
    case Action.abort:
      return `${shutdown} /a`;
    // case Action.hibernate:
    //   return `${timeout} ${secondsToAction} ${nobreakRundll32} powrprof.dll,SetSuspendState Hibernate`;
  }
};
