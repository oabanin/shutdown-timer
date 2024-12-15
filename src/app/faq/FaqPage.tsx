"use client";
import { FaqContent } from "@/app/faq/FaqContent";
import * as React from "react";
import messages from "../../../messages/en.json";
import { LocalePageLayout } from "@/app/LocalePageLayout";

export const FaqPage = () => {
  return (
    <LocalePageLayout locale="en" messages={messages}>
      <FaqContent />
    </LocalePageLayout>
  );
};
