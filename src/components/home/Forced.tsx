import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import HelpIcon from "@mui/icons-material/Help";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { useFormContext, useWatch } from "react-hook-form";
import { TValues } from "@/types";
import { OS } from "@/const/const";
import { useTranslations } from "next-intl";
export default function Forced() {
  const { control, setValue } = useFormContext<TValues>();
  const [isForced, os] = useWatch({
    control,
    name: ["isForced", "os"],
  });
  const t = useTranslations();
  const isWindows = os === OS.WINDOWS;
  const isMacOs = os === OS.MACOS;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("isForced", event.target.checked);
  };

  return (
    <FormControlLabel
      disabled={!isWindows}
      control={<Checkbox checked={isForced} onChange={handleChange} />}
      label={
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {t("forced")}
          <Tooltip
            sx={{ opacity: isMacOs ? 0.4 : 1 }}
            disableFocusListener={isMacOs}
            disableHoverListener={isMacOs}
            disableInteractive={isMacOs}
            disableTouchListener={isMacOs}
            title={t("forces")}
            arrow
          >
            <HelpIcon fontSize="small" color="action" />
          </Tooltip>
        </Box>
      }
    />
  );
}
