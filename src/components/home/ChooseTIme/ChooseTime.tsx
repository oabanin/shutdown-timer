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
import { useFormContext, useWatch } from "react-hook-form";
import Box from "@mui/material/Box";
import s from "./ChooseTime.module.scss";

// import dayjs from "dayjs";
// import duration from "dayjs/plugin/duration";
import { formatDuration } from "@/utils/formatDuration";
import { useTranslations } from "next-intl";
// dayjs.extend(duration);

export default function ChooseTime() {
  const { control, setValue, getFieldState } = useFormContext();

  const [selected, date, seconds, minutes] = useWatch({
    control,
    name: ["time", "date", "seconds", "minutes"],
  });

  const handleSelectedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = (event.target as HTMLInputElement).value;
    setValue("time", eventValue);

    const isCustomTime = [
      CustomTime.seconds,
      CustomTime.minutes,
      CustomTime.date,
    ].includes(eventValue as CustomTime);

    if (isCustomTime) return;

    if (!getFieldState("seconds").isTouched) {
      setValue("seconds", eventValue);
    }

    if (!getFieldState("minutes").isTouched) {
      setValue("minutes", (Number(eventValue) / 60).toString());
    }
  };

  const t = useTranslations();

  return (
    <fieldset>
      <legend>{t("chooseTime")}</legend>
      <FormControl>
        <RadioGroup value={selected} onChange={handleSelectedChange}>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <FormControlLabel
              value={Time.immediate}
              control={<Radio />}
              label={t("immediate")}
            />
            <FormControlLabel
              value={Time.twoHours}
              control={<Radio />}
              label={t("twoHours")}
            />
            <FormControlLabel
              value={Time.tenMinutes}
              control={<Radio />}
              label={t("tenMinutes")}
            />
            <FormControlLabel
              value={Time.threeHours}
              control={<Radio />}
              label={t("threeHours")}
            />
            <FormControlLabel
              value={Time.twentyMinutes}
              control={<Radio />}
              label={t("twentyMinutes")}
            />

            <FormControlLabel
              value={Time.fourHours}
              control={<Radio />}
              label={t("fourHours")}
            />
            <FormControlLabel
              value={Time.halfAnHour}
              control={<Radio />}
              label={t("halfAnHour")}
            />
            <FormControlLabel
              value={Time.fiveHours}
              control={<Radio />}
              label={t("fiveHours")}
            />
            <FormControlLabel
              value={Time.oneHour}
              control={<Radio />}
              label={t("oneHour")}
            />
            <FormControlLabel
              value={Time.sixHours}
              control={<Radio />}
              label={t("sixHours")}
            />
          </Box>

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
              <div className={s.inputContainer}>
                <TextField
                  label={t("minutes")}
                  variant="outlined"
                  value={minutes}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setValue("minutes", event.target.value, {
                      shouldTouch: true,
                    });
                  }}
                  InputProps={{
                    inputProps: {
                      min: 0,
                      max: 5256000,
                      type: "number",
                      inputMode: "numeric", // Mobile-friendly numeric keyboard
                    },
                  }}
                />
                {minutes && minutes !== "0" && (
                  <div className={s.inputTextMin}>
                    ({formatDuration(minutes * 60)})
                  </div>
                )}
              </div>
            }
          />
          <FormControlLabel
            value={CustomTime.seconds}
            sx={{ paddingTop: "12px" }}
            control={<Radio />}
            label={
              <div className={s.inputContainer}>
                <TextField
                  label={t("seconds")}
                  variant="outlined"
                  value={seconds}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setValue("seconds", event.target.value, {
                      shouldTouch: true,
                    });
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
                {seconds && seconds !== "0" && (
                  <div className={s.inputTextSec}>
                    ({formatDuration(seconds)})
                  </div>
                )}
              </div>
            }
          />
        </RadioGroup>
      </FormControl>
    </fieldset>
  );
}
