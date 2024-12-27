import Button from "@mui/material/Button";
import * as React from "react";
import { useTranslations } from "next-intl";
import { useSnackbar } from "@/context/SnackbarContext";
import "./Install.scss";
import Box from "@mui/material/Box";

declare global {
  interface Window {
    deferredPrompt: BeforeInstallPromptEvent | null;
  }
}

export const Install = () => {
  const t = useTranslations();
  const { showSnackbar } = useSnackbar();

  const handleClickOpen = async () => {
    if (!window.deferredPrompt) {
      showSnackbar(t("alreadyInstalled"), "warning");
      return;
    }

    window.deferredPrompt.prompt();
    const { outcome } = await window.deferredPrompt.userChoice;
    if (outcome === "accepted") {
      window.deferredPrompt = null;
    }

    // ga("send", {
    //   hitType: "event",
    //   eventCategory: "pwa-install",
    //   eventAction: "custom-installation-button-clicked",
    //   eventLabel: installSource,
    //   eventValue: outcome === "accepted" ? 1 : 0,
    // });
  };

  return (
    <>
      <Box
        className="installed"
        sx={{
          textTransform: "uppercase",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#39ff39",
        }}
      >
        {t("installed")}
      </Box>
      <Button
        id="buttonInstall"
        variant="contained"
        color="secondary"
        className="install-disabled install-button"
        onClick={handleClickOpen}
      >
        {t("install")}
      </Button>
    </>
  );
};
