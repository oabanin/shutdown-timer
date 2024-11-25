"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ChooseAction from "@/components/home/ChooseAction";
import ChooseTime from "@/components/home/ChooseTime";
import ChooseOS from "@/components/home/ChooseOS";
import { BoxCopy } from "@/components/home/BoxCopy";
import { Action } from "@/const/const";
import ForcedShutdown from "@/components/home/ForcedShutdown";
import { FormProvider, useForm } from "react-hook-form";
import Button from "@mui/material/Button";

//add Native Messaging API extension
//

export default function Home() {
  const [action, setAction] = React.useState<Action>(Action.shutdown);
  const { handleSubmit, ...rest } = useForm();
  const onSubmit = (data: any) => console.log(data);
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
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
              // justifyItems: "center",
              // justifyContent: "space-evenly",
            }}
          >
            <ChooseAction action={action} setAction={setAction} />
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
