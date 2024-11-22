"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { CustomTime, Time } from "@/const/const";
import { TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useRef } from "react";

export default function ChooseTime() {
  const [selected, setSelected] = React.useState<string>(
    Time.twoHours.toString(),
  );
  const [input, setInput] = React.useState(Time.twoHours.toString());
  const inputTouched = useRef(false);
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());

  const handleSelectedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = (event.target as HTMLInputElement).value;
    setSelected(eventValue);

    if (
      eventValue !== CustomTime.manual &&
      eventValue !== CustomTime.date &&
      !inputTouched.current
    ) {
      setInput(eventValue);
    }
  };

  return (
    <fieldset>
      <legend>Choose time</legend>
      <FormControl>
        <RadioGroup value={selected} onChange={handleSelectedChange}>
          <FormControlLabel
            value={Time.tenMinutes.toString()}
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
                  // sx={{ minWidth:  }}
                  views={["year", "day", "hours", "minutes", "seconds"]}
                  value={date}
                  onChange={setDate}
                />
              </LocalizationProvider>
            }
          />
          <FormControlLabel
            value={CustomTime.manual}
            control={<Radio />}
            label={
              <TextField
                sx={{ maxWidth: "100px" }}
                label="Seconds"
                variant="outlined"
                value={input}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (!inputTouched.current) {
                    inputTouched.current = true;
                  }
                  setInput(event.target.value);
                }}
              />
            }
          />
        </RadioGroup>
      </FormControl>
    </fieldset>
  );
}
