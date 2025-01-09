import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import * as React from "react";
import { useCopyAndNotify } from "@/hooks/useCopyAndNotify";
import { download } from "@/utils/download";
import { useTranslations } from "next-intl";
import CardImage from "@/components/CardImage";
import Image from "next/image";

export const WindowsShutdownPageContent = () => {
  const { copyToClipboard } = useCopyAndNotify();
  const handleCopyCommand = () => {
    copyToClipboard("shutdown /s /t 7200");
  };
  const t = useTranslations();

  const handleDownloadFile = (type: "bat" | "ps1") => {
    download(
      "shutdown /s /t 7200",
      `shutdown.${type}`,
      "text/plain;charset=utf-8",
    );
  };
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        {t("howToScheduleShutdown")}
      </Typography>

      <Typography variant="body1" gutterBottom>
        {t.rich("learnHowToSchedule", {
          code: (chunks) => <code>{chunks}</code>,
        })}
      </Typography>

      <Card sx={{ my: 2 }}>
        <CardContent>
          <Typography variant="h6">{t("runDialogTitle")}</Typography>
          <List>
            <ListItem>
              <ListItemText primary={t("runDialogStep1")} />
            </ListItem>

            <ListItem>
              <ListItemText primary={t("runDialogStepAlternative")} />
            </ListItem>

            <CardImage
              maxWidth={375 / 1.5}
              src="/tutorials/windows/start-menu-run.png"
              height={879 / 1.5}
            />

            <ListItem>
              <ListItemText primary={t("runDialogStep2")} />
            </ListItem>
            <CardImage
              maxWidth={466}
              src="/tutorials/windows/shutdown/shutdown-run-command.png"
              height={286}
            />

            <ListItem>
              <ListItemText primary={t("shutdownWindowsReminder")} />
            </ListItem>
            <CardImage
              maxWidth={484}
              src="/tutorials/windows/shutdown/shutdown-120minutes.png"
              height={249}
            />
          </List>
        </CardContent>
      </Card>

      <Card sx={{ my: 2 }}>
        <CardContent>
          <Typography variant="h6">{t("shortcutTitle")}</Typography>
          <List>
            <ListItem>
              <ListItemText primary={t("shortcutStep1")} />
            </ListItem>
            <CardImage
              maxWidth={763}
              height={413}
              src="/tutorials/windows/shutdown/shutdown-new-shortcut.png"
            />
            <ListItem>
              <ListItemText primary={t("shortcutStep2")} />
            </ListItem>
            <CardImage
              maxWidth={900}
              height={668}
              src="/tutorials/windows/shutdown/shutdown-shortcut.png"
            />
            <ListItem>
              <ListItemText primary={t("shortcutStep3")} />
            </ListItem>
            <CardImage
              maxWidth={197}
              height={252}
              src="/tutorials/windows/shutdown/shutdown-change-icon.png"
            />
            <ListItem>
              <ListItemText primary={t("shortcutStep4")} />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card sx={{ my: 2 }}>
        <CardContent>
          <Typography variant="h6">{t("cmdTitle")}</Typography>
          <List>
            <ListItem>
              <ListItemText primary={t("cmdStep1")} />
            </ListItem>
            <CardImage
              maxWidth={505}
              height={316}
              src="/tutorials/windows/runbox-cmd.png"
            />
            <ListItem>
              <ListItemText primary={t("cmdStep2")} />
            </ListItem>
          </List>
          <CardImage
            maxWidth={1124 / 2}
            height={679 / 2}
            src="/tutorials/windows/shutdown/shutdown-cmd.png"
          />
        </CardContent>
      </Card>

      <Card sx={{ my: 2 }}>
        <CardContent>
          <Typography variant="h6">{t("powershellTitle")}</Typography>
          <List>
            <ListItem>
              <ListItemText primary={t("powershellStep1")} />
            </ListItem>
            <CardImage
              maxWidth={468}
              height={283}
              src="/tutorials/windows/runbox-powershell.png"
            />
            <ListItem>
              <ListItemText primary={t("powershellStep1Alternative")} />
            </ListItem>

            <CardImage
              maxWidth={371 / 1.5}
              src="/tutorials/windows/start-menu-powershell.png"
              height={812 / 1.5}
            />
            <ListItem>
              <ListItemText primary={t("powershellStep2")} />
            </ListItem>
            <CardImage
              maxWidth={1323 / 2}
              height={698 / 2}
              src="/tutorials/windows/shutdown/shutdown-powershell-window.png"
            />
          </List>
        </CardContent>
      </Card>

      <Card sx={{ my: 2 }}>
        <CardContent>
          <Typography variant="h6">{t("abortTitle")}</Typography>
          <List>
            <ListItem>
              <ListItemText primary={t("abortStep1")} />
            </ListItem>
            <ListItem>
              <ListItemText primary={t("abortStep2")} />
            </ListItem>
            <CardImage
              maxWidth={468}
              src="/tutorials/windows/shutdown-abort.png"
              height={283}
            />
            <ListItem>
              <ListItemText primary={t("shutdownWindowsCancel")} />
            </ListItem>
            <CardImage
              maxWidth={468}
              src="/tutorials/windows/shutdown/shutdown-cancelled.png"
              height={183}
            />
          </List>
        </CardContent>
      </Card>

      <Box display="flex" gap={2} my={3}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<FileDownloadIcon />}
          onClick={() => handleDownloadFile("bat")}
        >
          {t("downloadBatFile")}
        </Button>

        <Button
          variant="contained"
          color="secondary"
          startIcon={<FileDownloadIcon />}
          onClick={() => handleDownloadFile("ps1")}
        >
          {t("downloadPs1File")}
        </Button>

        <Button
          variant="outlined"
          startIcon={<ContentCopyIcon />}
          onClick={handleCopyCommand}
        >
          {t("copyCommand")}
        </Button>
      </Box>
    </Box>
  );
};
