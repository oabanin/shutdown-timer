"use client";

import { LocalePageLayout } from "@/app/LocalePageLayout";
import messages from "../../../../messages/en.json";
import { HomePageContent } from "@/components/home/Homepage/HomePageContent";
import * as React from "react";

export const Homepage = () => {
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/sw_push.js")
  //       .then((registration) =>
  //         console.log("Service Worker registered: ", registration),
  //       )
  //       .catch((err) =>
  //         console.log("Service Worker registration failed: ", err),
  //       );
  //   }
  // }, []);

  return (
    <LocalePageLayout locale="en" messages={messages}>
      <HomePageContent />
    </LocalePageLayout>
  );
};
