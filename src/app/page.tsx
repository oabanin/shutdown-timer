"use client";
import * as React from "react";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ChooseAction from "@/components/home/ChooseAction";
import ChooseTime from "@/components/home/ChooseTIme/ChooseTime";
import ChooseOS from "@/components/home/ChooseOS";
import { TextFieldCopy } from "@/components/home/TextFieldCopy/TextFieldCopy";
import { Action, getCategoryForOS, NewLine, OS, Time } from "@/const/const";
import Forced from "@/components/home/Forced";
import { FormProvider, useForm } from "react-hook-form";
import dayjs from "dayjs";
import { TValues } from "@/types";
import { UAParser } from "ua-parser-js";
import OneLineCommand from "@/components/home/OneLine";
import { download } from "@/utils/download";
import { ActionButtons } from "@/components/home/ActionButtons/ActionButtons";
import { FileName } from "@/components/home/Filename/FileName";
import Head from "next/head";
import { AlertMacOs } from "@/components/home/AlertMacOs";
import { SnackbarProvider } from "@/context/SnackbarContext";

//add not found

//сделать хуки isMAc os, is windows

///PowerShell commands
//.ps1

// opengraph-image.jpg and twitter-image.jpg: Employed for social media images
// robots.txt: Provides instructions for search engine crawling

//  Увеличить размер текста tooltip
// Добавить таймер обратного отсчета

// Optional: Automate with No Password Prompt
// sudo visudo
//yourusername ALL=(ALL) NOPASSWD: /usr/bin/pmset

//Grant Permissions for GUI Automation
//abort command

//there are more commands
//add translations

//WINDOWS XP

//shutdown /l LOGOUT

// SLEEP DOESN"T WORK

//shutdown /s /t 60

//

// What mode the notebook enters when you close the lid
// Windows laptops enter sleep mode when the lid is closed, unless you change these settings
// Differences between sleep and hybernate

// /f – Force Close Applications:
// * Not available in Windows XP. The system would display a prompt to save open files.
// /a – Abort:
// * Not available in Windows XP. There was no option to cancel a scheduled shutdown once it had been initiated.
// /c – Comment:
// * Not available in Windows XP. The ability to add a custom comment during shutdown was introduced in later versions of Windows (starting with Windows Vista).

// /f - Force Close shutdown /s /f /t 0
// shutdown /a (cancel a shutdown) ABORT. shutdown /s /f /t 0
// add comment shutdown /s /t 30 /c "Shutting down for updates."
// SAVE to Local storage last value
// add Native Messaging API extension
// check node_modules/ua-parser-js/src/enums/ua-parser-enums.mjs

// IF Hibernate doesn't work check our article
// Hibernate

const defaultValues: TValues = {
  action: Action.shutdown,
  time: Time.twoHours.toString(),
  date: dayjs().add(2, "hour"),
  seconds: Time.twoHours.toString(),
  minutes: "120",
  os: OS.WINDOWS,
  isForced: false,
  isOneLine: false,
  filename: "",
  cmd: "",
};

export default function Home() {
  const { handleSubmit, reset, ...rest } = useForm({ defaultValues });

  useEffect(() => {
    const parser = new UAParser();
    const detectedOs = parser.getOS();

    reset((formValues) => {
      return {
        ...formValues,
        os: getCategoryForOS(detectedOs.name) || OS.WINDOWS,
        version: detectedOs.version,
      };
    });
  }, []);

  const onSubmit = (data: TValues) => {
    const isMacOS = data.os === OS.MACOS;
    const prefix = isMacOS ? `#!/bin/bash${NewLine.masOs}` : "";
    download(prefix + data.cmd, data.filename, "text/plain;charset=utf-8");
  };
  return (
    <>
      <Head>
        <title>
          Power Command Builder for Windows 10/11 & MacOS: Shutdown, Restart,
          Sleep, and More
        </title>
        <meta
          name="description"
          content="Create custom commands for shutdown, restart, sleep, hibernate, and more with Power Command Builder for Windows 10/11 & MacOS. Simple, fast, and versatile—manage your system actions effortlessly."
        />
      </Head>
      <SnackbarProvider>
        <FormProvider reset={reset} handleSubmit={handleSubmit} {...rest}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h4" component="h1" sx={{ mb: 1 }}>
              Shutdown timer
            </Typography>
            <Box
              sx={{
                my: 4,
                // gridTemplateColumns: "repeat(auto-fill , minmax(300px, 1fr))",
                // justifyItems: "center",
                justifyContent: "center",
                display: "flex",
                gap: "5px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <ChooseOS />
              </div>
              <div>
                <ChooseAction />
                <div>
                  <Forced />
                  <OneLineCommand />
                </div>
                <div>
                  <FileName />
                </div>
              </div>
              <div>
                <ChooseTime />
              </div>
            </Box>
            <TextFieldCopy />
            <AlertMacOs />
            <ActionButtons />
          </form>
        </FormProvider>
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography component="p" sx={{ mb: 2 }}>
            Easily generate a custom batch file for scheduling shutdowns,
            restarts, or log-offs on your Windows device in just seconds. No
            coding required—simply choose your desired action and set the timer,
            and our tool will create the file for you. Perfect for automating
            power management with simplicity and precision.
          </Typography>
        </Box>
      </SnackbarProvider>
    </>
  );
}
