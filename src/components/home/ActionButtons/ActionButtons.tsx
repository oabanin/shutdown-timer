import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import s from "@/components/home/TextFieldCopy/TextFieldCopy.module.scss";
import { useFormContext, useWatch } from "react-hook-form";
import { TValues } from "@/types";
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";

export const ActionButtons = () => {
  const { control } = useFormContext<TValues>();
  const cmd = useWatch({
    control,
    name: "cmd",
  });
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(cmd)
      .then(() => {
        setOpen(true);
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
      });
  };

  return (
    <>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Button
          onClick={handleCopy}
          className={s.button}
          type="button"
          variant="outlined"
          size="large"
        >
          Copy command
        </Button>
        <Button type="submit" variant="contained" size="large">
          Download file
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Successfully copied
        </Alert>
      </Snackbar>
    </>
  );
};
