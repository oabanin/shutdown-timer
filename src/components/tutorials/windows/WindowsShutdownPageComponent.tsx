"use client";
import { LocalePageLayout } from "@/app/LocalePageLayout";
import messages from "../../../../messages/en.json";
import * as React from "react";
import { TutorialsContentLayout } from "@/components/tutorials/TutorialsContentLayout";
import { WindowsShutdownPageContent } from "@/components/tutorials/windows/WindowsShutdownPageContent";

export const WindowsShutdownPageComponent = () => {
  return (
    <LocalePageLayout locale="en" messages={messages}>
      <TutorialsContentLayout>
        <WindowsShutdownPageContent />
      </TutorialsContentLayout>
    </LocalePageLayout>
  );
};
