"use client";
import * as React from "react";
import messages from "../../../messages/en.json";
import { LocalePageLayout } from "@/app/LocalePageLayout";
import { TutorialsContent } from "@/components/tutorials/TutorialsContent";

export const TutorialsPage = () => {
  return (
    <LocalePageLayout locale="en" messages={messages}>
      <TutorialsContent />
    </LocalePageLayout>
  );
};
