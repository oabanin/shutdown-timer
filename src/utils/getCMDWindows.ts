import { Action, COMMAND_TOOL, NewLine } from "@/const/const";

const shutdown = "shutdown";
const rundll32 = "rundll32.exe";
const nobreak = "/nobreak";

export const getCMDWindows = ({
  action,
  secondsToAction,
  isForced,
  isOneLine,
  commandTool,
}: {
  action: Action;
  secondsToAction: string;
  isForced: boolean;
  isOneLine: boolean;
  commandTool: COMMAND_TOOL;
}) => {
  const isPowerShell = commandTool === COMMAND_TOOL.powershell;
  const f = isForced ? "/f " : "";
  const connector = isOneLine ? " & " : NewLine.win;
  const nobreakConnector = `${nobreak}${connector}`;
  const isNow = secondsToAction === "0";

  switch (action) {
    case Action.shutdown:
      return `${shutdown} /s ${f}/t ${secondsToAction}`;
    case Action.restart:
      return `${shutdown} /r ${f}/t ${secondsToAction}`;
    case Action.logout:
      const logout = `${shutdown} /l ${f}`;
      if (isNow) return logout;
      return generateLongCmd({
        isPowerShell,
        secondsToAction,
        cmd: logout,
        action: "log off",
      });
    case Action.lock:
      let lock = `${rundll32} user32.dll,LockWorkStation`;
      if (isNow) return lock;
      lock = isPowerShell ? lock : nobreakConnector + lock;
      return generateLongCmd({
        isPowerShell,
        secondsToAction,
        cmd: lock,
        action: "lock",
      });
    case Action.sleep:
      let sleep = `${rundll32} powrprof.dll,SetSuspendState Sleep`;
      if (isNow) return sleep;
      sleep = isPowerShell ? sleep : nobreakConnector + sleep;
      return generateLongCmd({
        isPowerShell,
        secondsToAction,
        action: "sleep",
        cmd: sleep,
      });
    case Action.hibernate:
      const hibernate = `${shutdown} /h ${f}`;
      if (isNow) return hibernate;
      return generateLongCmd({
        isPowerShell,
        secondsToAction,
        action: "hibernate",
        cmd: hibernate,
      });
    case Action.abort:
      return `${shutdown} /a`;
  }
};

const generateLongCmd = ({
  isPowerShell,
  secondsToAction,
  action,
  cmd,
}: {
  isPowerShell: boolean;
  secondsToAction: string;
  action: "log off" | "lock" | "sleep" | "hibernate";
  cmd: string;
}) => {
  const closeTxt = "Close this window if you want to cancel";

  if (isPowerShell) {
    return `$seconds = ${secondsToAction}

while ($seconds -gt 0) {
    Clear-Host
    Write-Host "The computer will ${action} in $seconds seconds"
    Write-Host "${closeTxt}"
    Start-Sleep -Seconds 1
    $seconds -= 1
}

${cmd}`;
  }

  return `@echo off
set /a seconds=${secondsToAction}

:loop
cls
echo The computer will ${action} in %seconds% seconds
echo ${closeTxt}
set /a seconds-=1
if %seconds% leq 0 goto lock
ping -n 2 127.0.0.1 >nul
goto loop

:lock
${cmd}`;
};
