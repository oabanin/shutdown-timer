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
import { AlertMacOs } from "@/components/home/AlertMacOs";
import { SnackbarProvider } from "@/context/SnackbarContext";

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
            Easily generate custom commands for scheduling shutdowns, restarts,
            sleep, hibernation, log-offs, and more for both{" "}
            <b>Windows Vista7/8/10/11</b> and <b>MacOS</b> in just seconds.
          </Typography>
          <Typography component="p" sx={{ mb: 2 }}>
            No coding required—simply choose your desired action, set the timer,
            and our tool will generate the command for you. You can either{" "}
            <b>copy the command</b> to your clipboard or download it as a{" "}
            <b>.bat (Windows)</b> or <b>.command (MacOS)</b> file for easy
            execution. Perfect for automating power management with simplicity
            and precision on both platforms.
          </Typography>
        </Box>
      </SnackbarProvider>
    </>
  );
}
