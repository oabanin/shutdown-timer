import * as React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Power Command Builder for Windows 10/11 & MacOS: Shutdown, Restart, Sleep, and More",
  description:
    "Create custom commands for shutdown, restart, sleep, hibernate, and more with Power Command Builder for Windows 10/11 & MacOS. Copy commands or download .bat and .command files for easy use.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
