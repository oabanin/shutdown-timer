import { useTranslations } from "next-intl";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "@/components/Copyright";
import * as React from "react";

export const FaqContent = () => {
  const t = useTranslations();
  const faqData = [
    {
      name: t("generalQuestions"),
      questions: [
        {
          name: t("whatDo"),
          text: t("whatDoAnswer"),
        },
        {
          name: t("isSafe"),
          text: t("isSafeAnswer"),
        },
        {
          name: t("timeZone"),
          text: t("timeZoneAnswer"),
        },
        {
          name: t("windowsCommands"),
          text: t("windowsCommandsAnswer"),
        },
      ],
    },
    {
      name: t("fileFormats"),
      questions: [
        {
          name: t("commandFile"),
          text: t("commandFileAnswer"),
        },
        {
          name: t("batFile"),
          text: t("batFileAnswer"),
        },
        {
          name: t("runFiles"),
          text: t("runFilesAnswer"),
        },
        {
          name: t("commandField"),
          text: t("commandFieldAnswer"),
        },
        {
          name: t("fileNameEdit"),
          text: t("fileNameEditAnswer"),
        },
      ],
    },
    {
      name: t("troubleshooting"),
      questions: [
        {
          name: t("fileNotExecute"),
          text: t("fileNotExecuteAnswer"),
        },
        {
          name: t("antivirusWarning"),
          text: t("antivirusWarningAnswer"),
        },
        {
          name: t("scheduleNotWork"),
          text: t("scheduleNotWorkAnswer"),
        },
      ],
    },
    {
      name: t("privacySecurity"),
      questions: [
        {
          name: t("inputsStored"),
          text: t("inputsStoredAnswer"),
        },
        {
          name: t("reviewFile"),
          text: t("reviewFileAnswer"),
        },
      ],
    },
    {
      name: t("customFunctionality"),
      questions: [
        {
          name: t("specifyTiming"),
          text: t("specifyTimingAnswer"),
        },
        {
          name: t("forcedOption"),
          text: t("forcedOptionAnswer"),
        },
      ],
    },
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {faqData.map((item) => {
            return (
              <>
                <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                  {item.name}
                </Typography>
                <Box sx={{ mb: 4 }}>
                  {item.questions.map((question) => (
                    <>
                      <Typography variant="h6" component="div">
                        {question.name}
                      </Typography>
                      <Typography component="p" sx={{ mb: 2 }}>
                        {question.text}
                      </Typography>
                    </>
                  ))}
                </Box>
              </>
            );
          })}
          {/*<Typography variant="h4" component="h1" sx={{ mb: 2 }}>*/}
          {/*  Material UI - Next.js example in TypeScript*/}
          {/*</Typography>*/}
          {/*<Box sx={{ maxWidth: "sm" }}>*/}
          {/*  <Button variant="contained" component={Link} href="/">*/}
          {/*    Go to the home page*/}
          {/*  </Button>*/}
          {/*</Box>*/}
          {/*<ProTip />*/}
          <Copyright />
        </Box>
      </Container>
    </>
  );
};
