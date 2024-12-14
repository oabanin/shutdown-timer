"use client";
import * as React from "react";
import "../styles/global.css";
import { HomePageLayout } from "@/app/HomePageLayout";
import { HomePageContent } from "@/app/HomePageContent";
import messages from "../../messages/en.json";

export default function Home() {
  return (
    <HomePageLayout locale="en" messages={messages}>
      <HomePageContent />
    </HomePageLayout>
  );
}
