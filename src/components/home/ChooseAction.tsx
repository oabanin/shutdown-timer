"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Action, OS } from "@/const/const";
import { useFormContext, useWatch } from "react-hook-form";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";
import { useTranslations } from "next-intl";

export default function ChooseAction() {
  const { control, setValue } = useFormContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue("action", value as Action);
  };

  const [action, os] = useWatch({
    control,
    name: ["action", "os"],
  });

  const t = useTranslations();

  const isMac = os === OS.MACOS;

  return (
    <fieldset>
      <legend>{t("chooseAction")}</legend>
      <FormControl>
        <RadioGroup value={action} onChange={handleChange}>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <FormControlLabel
              value={Action.shutdown}
              control={<Radio />}
              label={t("shutdown")}
            />
            <FormControlLabel
              disabled={isMac}
              value={Action.hibernate}
              control={<Radio />}
              label={t("hibernate")}
            />
            <FormControlLabel
              value={Action.restart}
              control={<Radio />}
              label={t("restart")}
            />
            <FormControlLabel
              value={Action.logout}
              control={<Radio />}
              label={t("logout")}
            />
            <FormControlLabel
              value={Action.sleep}
              control={<Radio />}
              label={t("sleep")}
            />
            <FormControlLabel
              value={Action.lock}
              control={<Radio />}
              label={t("lock")}
            />
            <FormControlLabel
              disabled={isMac}
              value={Action.abort}
              control={<Radio />}
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  Abort
                  <Tooltip
                    sx={{ opacity: isMac ? 0.4 : 1 }}
                    disableFocusListener={isMac}
                    disableHoverListener={isMac}
                    disableInteractive={isMac}
                    disableTouchListener={isMac}
                    title="Can only abort restart and shutdown. Other actions can be canceled by closing the command window"
                    arrow
                  >
                    <HelpIcon fontSize="small" color="action" />
                  </Tooltip>
                </Box>
              }
            />
          </Box>
        </RadioGroup>
      </FormControl>
    </fieldset>
  );
}
