"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Action } from "@/const/const";

export default function ChooseAction({
  action,
  setAction,
}: {
  action: Action;
  setAction: React.Dispatch<React.SetStateAction<Action>>;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setAction(value as Action);
  };

  return (
    <fieldset>
      <legend>Choose action</legend>
      <FormControl>
        <RadioGroup value={action} onChange={handleChange}>
          <FormControlLabel
            value={Action.shutdown}
            control={<Radio />}
            label="Shutdown"
          />
          <FormControlLabel
            value={Action.restart}
            control={<Radio />}
            label="Restart"
          />
          <FormControlLabel
            value={Action.sleep}
            control={<Radio />}
            label="Sleep"
          />
          <FormControlLabel
            value={Action.hibernate}
            control={<Radio />}
            label="Hibernate"
          />
          <FormControlLabel
            value={Action.logout}
            control={<Radio />}
            label="Logout"
          />
          <FormControlLabel
            value={Action.lock}
            control={<Radio />}
            label="Lock"
          />
        </RadioGroup>
      </FormControl>
    </fieldset>
  );
}
