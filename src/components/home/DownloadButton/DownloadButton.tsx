import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import s from "@/components/home/TextFieldCopy/TextFieldCopy.module.scss";

export const DownloadButton = () => {
  return (
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
  );
};
