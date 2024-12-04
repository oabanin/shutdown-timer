export enum Action {
  shutdown = "shutdown",
  restart = "restart",
  sleep = "sleep",
  hibernate = "hibernate",
  logout = "logout",
  lock = "lock",
  abort = "abort",
}

export enum Time {
  immediate = 0, // 10 minutes
  tenMinutes = 600, // 10 minutes
  twentyMinutes = 1200, // 20 minutes
  halfAnHour = 1800, // 30 minutes
  oneHour = 3600, // 1 hour
  twoHours = 7200, // 2 hours
  threeHours = 10800, // 3 hours
  fourHours = 14400, // 4 hours
  fiveHours = 18000, // 5 hours
  sixHours = 21600, // 6 hours
}

export enum CustomTime {
  seconds = "seconds",
  minutes = "minutes",
  date = "date",
}

export enum OS {
  WINDOWS = "Windows",
  MACOS = "macOS",
  LINUX = "Linux",
}

// Define the OS categories using a Map
const OS_GROUPS = new Map([
  [OS.WINDOWS, [OS.WINDOWS]],
  [OS.MACOS, [OS.MACOS]],
  [
    OS.LINUX,
    [
      OS.LINUX,
      "PCLinuxOS",
      "VectorLinux",
      "Unix",
      "Ubuntu",
      "Debian",
      "Fedora",
    ],
  ],
]);

// Function to check if an OS exists in any category
export function getCategoryForOS(os?: string): OS | undefined {
  if (!os) return;
  for (const [category, osList] of OS_GROUPS.entries()) {
    if (osList.includes(os)) {
      return category as OS; // Return the category name where the OS is found
    }
  }
  return;
}
