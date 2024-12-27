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
              <ListItemText primary={t("runDialogStep2")} />
            </ListItem>
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
            <ListItem>
              <ListItemText primary={t("shortcutStep2")} />
            </ListItem>
            <ListItem>
              <ListItemText primary={t("shortcutStep3")} />
            </ListItem>
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
            <ListItem>
              <ListItemText primary={t("cmdStep2")} />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card sx={{ my: 2 }}>
        <CardContent>
          <Typography variant="h6">{t("powershellTitle")}</Typography>
          <List>
            <ListItem>
              <ListItemText primary={t("powershellStep1")} />
            </ListItem>
            <ListItem>
              <ListItemText primary={t("powershellStep2")} />
            </ListItem>
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
