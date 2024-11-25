import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
};

export const BoxCopy = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ ...commonStyles, borderRadius: "16px" }} />
      <Button type="submit" variant="outlined" size="large">
        Copy command
      </Button>
    </Box>
  );
};
