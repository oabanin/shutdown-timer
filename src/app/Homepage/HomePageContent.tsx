import { SnackbarProvider } from "@/context/SnackbarContext";
import { FormProvider, useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ChooseOS from "@/components/home/ChooseOS";
import ChooseAction from "@/components/home/ChooseAction";
import Forced from "@/components/home/Forced";
import OneLineCommand from "@/components/home/OneLine";
import { FileName } from "@/components/home/Filename/FileName";
import ChooseTime from "@/components/home/ChooseTIme/ChooseTime";
import { TextFieldCopy } from "@/components/home/TextFieldCopy/TextFieldCopy";
import { AlertMacOs } from "@/components/home/AlertMacOs";
import { ActionButtons } from "@/components/home/ActionButtons/ActionButtons";
import * as React from "react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { UAParser } from "ua-parser-js";
import { Action, getCategoryForOS, NewLine, OS, Time } from "@/const/const";
import { TValues } from "@/types";
import { download } from "@/utils/download";
import dayjs from "dayjs";

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

export const HomePageContent = () => {
  const { handleSubmit, reset, ...rest } = useForm({ defaultValues });
  const t = useTranslations();

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
    <SnackbarProvider>
      <FormProvider reset={reset} handleSubmit={handleSubmit} {...rest}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h4" component="h1" sx={{ mb: 1 }}>
            {t("shutdownTimer")}
          </Typography>
          <Box
            sx={{
              my: 4,
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
          {t.rich("generate", {
            strong: (chunks) => <b>{chunks}</b>,
            windows: "Windows Vista/7/8/10/11",
            macos: "MacOS",
          })}
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          {t.rich("noCoding", {
            strong: (chunks) => <b>{chunks}</b>,
          })}
        </Typography>
      </Box>
    </SnackbarProvider>
  );
};
