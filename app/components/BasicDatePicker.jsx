import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function BasicDatePicker({ label, date, setState }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer sx={{ mb: 1 }} components={["DatePicker"]}>
        <DatePicker
          label={label}
          defaultValue={dayjs(date)}
          onChange={(value) => {
            // console.log(dayjs(value).format('YYYY-MM-DD'))
            setState(value.format('YYYY-MM-DD'));
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
