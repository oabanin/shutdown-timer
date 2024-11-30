"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { CustomTime, Time } from "@/const/const";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useRef } from "react";
import { useFormContext, useWatch } from "react-hook-form";

export default function ChooseTime() {
  const { control, setValue } = useFormContext();

  const [selected, date, input] = useWatch({
    control,
    name: ["time", "date", "input"],
  });

  const inputTouched = useRef(false);
  const handleSelectedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = (event.target as HTMLInputElement).value;
    setValue("time", eventValue);

    if (
      eventValue !== CustomTime.manual &&
      eventValue !== CustomTime.date &&
      !inputTouched.current
    ) {
      setValue("input", eventValue);
    }
  };

  return (
    <fieldset>
      <legend>Choose time</legend>
      <FormControl>
        <RadioGroup value={selected} onChange={handleSelectedChange}>
          <FormControlLabel
            value={Time.immediate}
            control={<Radio />}
            label="Immediate"
          />
          <FormControlLabel
            value={Time.tenMinutes}
            control={<Radio />}
            label="10 minutes"
          />
          <FormControlLabel
            value={Time.twentyMinutes}
            control={<Radio />}
            label="20 minutes"
          />
          <FormControlLabel
            value={Time.halfAnHour}
            control={<Radio />}
            label="Half an hour"
          />
          <FormControlLabel
            value={Time.oneHour}
            control={<Radio />}
            label="1 hour"
          />
          <FormControlLabel
            value={Time.twoHours}
            control={<Radio />}
            label="2 hours"
          />
          <FormControlLabel
            value={Time.threeHours}
            control={<Radio />}
            label="3 hours"
          />
          <FormControlLabel
            value={Time.fourHours}
            control={<Radio />}
            label="4 hours"
          />
          <FormControlLabel
            value={Time.fiveHours}
            control={<Radio />}
            label="5 hours"
          />
          <FormControlLabel
            value={CustomTime.date}
            control={<Radio />}
            label={
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  disablePast={true}
                  views={["year", "day", "hours", "minutes", "seconds"]}
                  value={date}
                  onChange={(newDate) => {
                    setValue("date", newDate);
                  }}
                  slotProps={{
                    textField: {
                      sx: {
                        ".MuiInputBase-input": {
                          minWidth: "179px",
                        },
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            }
          />
          <FormControlLabel
            value={CustomTime.minutes}
            sx={{ paddingTop: "12px" }}
            control={<Radio />}
            label={
              <>
                <TextField
                  label="Minutes"
                  variant="outlined"
                  value={input}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (!inputTouched.current) {
                      inputTouched.current = true;
                    }
                    setValue("minutes", event.target.value);
                  }}
                  InputProps={{
                    inputProps: {
                      min: 0,
                      // max: 315360000,
                      type: "number",
                      inputMode: "numeric", // Mobile-friendly numeric keyboard
                    },
                  }}
                />
                (2 hours 30 minutes)
              </>
            }
          />
          <FormControlLabel
            value={CustomTime.seconds}
            sx={{ paddingTop: "12px" }}
            control={<Radio />}
            label={
              <>
                <TextField
                  label="Seconds"
                  variant="outlined"
                  value={input}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (!inputTouched.current) {
                      inputTouched.current = true;
                    }
                    setValue("seconds", event.target.value);
                  }}
                  InputProps={{
                    inputProps: {
                      min: 0,
                      max: 315360000,
                      type: "number",
                      inputMode: "numeric", // Mobile-friendly numeric keyboard
                    },
                  }}
                />
                (2 hours 30 minutes)
              </>
            }
          />
        </RadioGroup>
      </FormControl>
    </fieldset>
  );
}
