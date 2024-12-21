"use client";
import { LocalePageLayout } from "@/app/LocalePageLayout";
import messages from "../../../messages/en.json";
import * as React from "react";
import { TutorialsContentLayout } from "@/components/tutorials/TutorialsContentLayout";

export const TutorialsPageComponent = () => {
  return (
    <LocalePageLayout locale="en" messages={messages}>
      <TutorialsContentLayout>TutorialsPageComponent</TutorialsContentLayout>
    </LocalePageLayout>
  );
};
