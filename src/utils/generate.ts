import { TValues } from "@/types";
import { Action, CustomTime, OS } from "@/const/const";
import dayjs from "dayjs";

export const generate = (data: TValues) => {
  const isWindows = data.os === OS.WINDOWS;
  let time = "";
  let cmd = "";

  if (data.time === CustomTime.manual) {
    if (data.input) {
      time = data.input;
    } else {
      time = "0";
    }
  } else if (data.time === CustomTime.date) {
    if (data.date) {
      time = Math.abs(dayjs().diff(data.date, "second")).toString();
    }
  } else if (data.time) {
    time = data.time;
  }
  // const time =

  switch (data.action) {
    case Action.shutdown:
      if (isWindows) {
        cmd = `shutdown /s /t ${time}`;
      }
      break;
    case Action.restart:
      if (isWindows) {
        cmd = `shutdown /r /t ${time}`;
      }
      break;
    case Action.logout:
      if (isWindows) {
        cmd = `shutdown /l /t ${time}`;
      }
      break;
    case Action.lock:
      if (isWindows) {
        cmd = `timeout /t ${time} /nobreak\r\n`;
        cmd += "rundll32.exe user32.dll,LockWorkStation\r\n";
      }
      break;
    case Action.sleep:
      if (isWindows) {
        cmd = `timeout /t ${time} /nobreak\r\n`;
        cmd += "rundll32.exe powrprof.dll,SetSuspendState Sleep\r\n";
      }
      break;
    case Action.hibernate:
      if (isWindows) {
        cmd = `timeout /t ${time} /nobreak\r\n`;
        cmd += "rundll32.exe powrprof.dll,SetSuspendState Hibernate\r\n";
      }
      break;
  }

  return cmd;
};
