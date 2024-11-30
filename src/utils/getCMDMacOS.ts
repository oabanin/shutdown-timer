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
      return "";
    case Action.hibernate:
      return "";
  }
};

// if (secondsToAction === "0") {
//   macOSTime = "now";
// } else {
//   if (secondsToActionNumber % 60 === 0) {
//     macOSTime = (secondsToActionNumber / 60).toString();
//   } else {
//     isFloat = true;
//   }
//   macOSTime = "";
// }
