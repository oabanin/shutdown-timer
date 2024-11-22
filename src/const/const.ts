export enum Action {
  shutdown = "shutdown",
  restart = "restart",
  sleep = "sleep",
  hibernate = "hibernate",
  logout = "logout",
  lock = "lock",
}

export enum Time {
  tenMinutes = 10 * 60, // 10 minutes
  twentyMinutes = 20 * 60, // 20 minutes
  halfAnHour = 30 * 60, // 30 minutes
  oneHour = 3600, // 1 hour
  twoHours = 2 * 3600, // 2 hours
  threeHours = 3 * 3600, // 3 hours
  fourHours = 4 * 3600, // 4 hours
  fiveHours = 5 * 3600, // 5 hours
}

export enum CustomTime {
  manual = "manual",
  date = "date",
}

export enum OS {
  windows = "windows",
  macos = "macos",
  linux = "linux",
}
