export enum Action {
  shutdown = "shutdown",
  restart = "restart",
  sleep = "sleep",
  hibernate = "hibernate",
  logout = "logout",
  lock = "lock",
}

export enum Time {
  immediate = 0, // 10 minutes
  tenMinutes = 10 * 60, // 10 minutes
  twentyMinutes = 20 * 60, // 20 minutes
  halfAnHour = 30 * 60, // 30 minutes
  oneHour = 3600, // 1 hour
  twoHours = 2 * 3600, // 2 hours
  threeHours = 3 * 3600, // 3 hours
  fourHours = 4 * 3600, // 4 hours
  fiveHours = 5 * 3600, // 5 hours
  sixHours = 6 * 3600, // 6 hours
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
