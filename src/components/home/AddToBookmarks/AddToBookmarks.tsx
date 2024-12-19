import Button from "@mui/material/Button";
import * as React from "react";
import { useTranslations } from "next-intl";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
export const AddToBookmarks = () => {
  const t = useTranslations();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        {t("addToBookmarks")}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t("addToBookmarks")}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t.rich("pressKeyBoard", {
              strong: (chunks) => <b>{chunks}</b>,
              cmd:
                navigator?.userAgent?.toLowerCase().indexOf("mac") != -1
                  ? "Command/Cmd"
                  : "CTRL",
            })}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};
