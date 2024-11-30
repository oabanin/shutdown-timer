import { Action } from "@/const/const";

const shutdown = "shutdown";
const timeout = "timeout /t";
const nobreakRundll32 = "/nobreak\r\nrundll32.exe";

export const getCMDWindows = ({
  action,
  secondsToAction,
}: {
  action: Action;
  secondsToAction: string;
}) => {
  switch (action) {
    case Action.shutdown:
      return `${shutdown} /s /t ${secondsToAction}`;
    case Action.restart:
      return `${shutdown} /r /t ${secondsToAction}`;
    case Action.logout:
      return `${shutdown} /l /t ${secondsToAction}`;
    case Action.lock:
      return `${timeout} ${secondsToAction} ${nobreakRundll32} user32.dll,LockWorkStation`;
    case Action.sleep:
      return `${timeout} ${secondsToAction} ${nobreakRundll32} powrprof.dll,SetSuspendState Sleep`;
    case Action.hibernate:
      return `${timeout} ${secondsToAction} ${nobreakRundll32} powrprof.dll,SetSuspendState Hibernate`;
  }
};
