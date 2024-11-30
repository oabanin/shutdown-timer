"use client";
import * as React from "react";
import { useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ChooseAction from "@/components/home/ChooseAction";
import ChooseTime from "@/components/home/ChooseTime";
import ChooseOS from "@/components/home/ChooseOS";
import { BoxCopy } from "@/components/home/BoxCopy";
import { Action, getCategoryForOS, OS, Time } from "@/const/const";
import ForcedShutdown from "@/components/home/ForcedShutdown";
import { FormProvider, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { TValues } from "@/types";
import { UAParser } from "ua-parser-js";
import { generate } from "@/utils/generate";
import OneLineCommand from "@/components/home/OneLine";

//WINDOWS XP

//shutdown /l LOGOUT

// SLEEP DOESN"T WORK

//shutdown /s /t 60

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

//MAC OS
//sudo shutdown -h now

//

const defaultValues: TValues = {
  action: Action.shutdown,
  time: Time.twoHours.toString(),
  date: dayjs().add(2, "hour"),
  seconds: Time.twoHours.toString(),
  minutes: "120",
  os: OS.WINDOWS,
};

export default function Home() {
  const { handleSubmit, reset, ...rest } = useForm({ defaultValues });

  useEffect(() => {
    const parser = new UAParser();
    const detectedOs = parser.getOS();
    console.log(detectedOs);
    reset((formValues) => {
      return {
        ...formValues,
        os: getCategoryForOS(detectedOs.name) || OS.WINDOWS,
        version: detectedOs.version,
      };
    });
  }, []);

  const onSubmit = (data: TValues) => {
    console.log(data);
    console.log(generate(data));
  };
  return (
    <FormProvider reset={reset} handleSubmit={handleSubmit} {...rest}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Shutdown timer
          </Typography>
          <Box
            sx={{
              my: 4,
              // gridTemplateColumns: "repeat(auto-fill , minmax(300px, 1fr))",
              // justifyItems: "center",
              // justifyContent: "space-evenly",
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
            }}
          >
            <ChooseOS />
            <ChooseAction />
            <ChooseTime />
            {/*<Link href="/about" color="secondary" component={NextLink}>*/}
            {/*  Go to the about page*/}
            {/*</Link>*/}
            {/*<ProTip />*/}
            {/*<Copyright />*/}
          </Box>
          <ForcedShutdown />
          <OneLineCommand />
          <BoxCopy />
          <Button type="submit" variant="contained" size="large">
            Download bat file
          </Button>
        </Container>
      </form>
    </FormProvider>
  );
}
