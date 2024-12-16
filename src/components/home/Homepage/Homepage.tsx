"use client";

import { LocalePageLayout } from "@/app/LocalePageLayout";
import messages from "../../../../messages/en.json";
import { HomePageContent } from "@/components/home/Homepage/HomePageContent";
import * as React from "react";

export const Homepage = () => {
  return (
    <LocalePageLayout locale="en" messages={messages}>
      <HomePageContent />
    </LocalePageLayout>
  );
};
