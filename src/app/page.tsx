import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ChooseAction from "@/components/home/ChooseAction";
import ChooseTime from "@/components/home/ChooseTime";
import ChooseOS from "@/components/home/ChooseOS";

export default function Home() {
  return (
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
        <ChooseAction />
        <ChooseTime />
        <ChooseOS />
        {/*<Link href="/about" color="secondary" component={NextLink}>*/}
        {/*  Go to the about page*/}
        {/*</Link>*/}
        {/*<ProTip />*/}
        {/*<Copyright />*/}
      </Box>
    </Container>
  );
}
