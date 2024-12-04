"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Action } from "@/const/const";
import { useFormContext, useWatch } from "react-hook-form";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";

export default function ChooseAction() {
  const { control, setValue } = useFormContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue("action", value as Action);
  };

  const firstName = useWatch({
    control,
    name: "action",
  });

  return (
    <fieldset>
      <legend>Choose action</legend>
      <FormControl>
        <RadioGroup value={firstName} onChange={handleChange}>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <FormControlLabel
              value={Action.shutdown}
              control={<Radio />}
              label="Shutdown"
            />
            <FormControlLabel
              value={Action.hibernate}
              control={<Radio />}
              label="Hibernate"
            />
            <FormControlLabel
              value={Action.restart}
              control={<Radio />}
              label="Restart"
            />
            <FormControlLabel
              value={Action.logout}
              control={<Radio />}
              label="Logout"
            />
            <FormControlLabel
              value={Action.sleep}
              control={<Radio />}
              label="Sleep"
            />
            <FormControlLabel
              value={Action.lock}
              control={<Radio />}
              label="Lock"
            />
            <FormControlLabel
              value={Action.abort}
              control={<Radio />}
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  Abort
                  <Tooltip
                    title="Forces running applications to close without warning"
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
