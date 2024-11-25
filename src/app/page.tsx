"use client";
import * as React from "react";
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

// add Native Messaging API extension
// check node_modules/ua-parser-js/src/enums/ua-parser-enums.mjs

const parser = new UAParser();
const { name: detectedOs } = parser.getOS();

const defaultValues: TValues = {
  action: Action.shutdown,
  time: Time.twoHours.toString(),
  date: dayjs().add(2, "hour"),
  input: Time.twoHours.toString(),
  os: getCategoryForOS(detectedOs) || OS.WINDOWS,
};

export default function Home() {
  const { handleSubmit, ...rest } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TValues) => {
    console.log(data);
    if (data) {
      // Calculate the absolute number of seconds between now and the selected date
      const secondsDifference = Math.abs(dayjs().diff(data.date, "second"));
      console.log(`Difference in seconds: ${secondsDifference}`);
    }
  };
  return (
    <FormProvider handleSubmit={handleSubmit} {...rest}>
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
            <ChooseAction />
            <ChooseTime />
            <ChooseOS />

            {/*<Link href="/about" color="secondary" component={NextLink}>*/}
            {/*  Go to the about page*/}
            {/*</Link>*/}
            {/*<ProTip />*/}
            {/*<Copyright />*/}
          </Box>
          <ForcedShutdown />
          <BoxCopy />
          <Button type="submit" variant="contained" size="large">
            Download bat file
          </Button>
        </Container>
      </form>
    </FormProvider>
  );
}
