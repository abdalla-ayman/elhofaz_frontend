import React, { useState } from "react";

import DatePicker from "@/app/components/BasicDatePicker";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export default function Absence() {
  let [reason, setReason] = useState("");
  return (
    <Box
      sx={{
        my: 1,
      }}
    >
      <DatePicker label="من يوم" />
      <DatePicker label="الى يوم" />
      <FormControl sx={{ width: "100%", my: 2 }}>
        <InputLabel id="demo-simple-select-label">السبب</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="السبب"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        >
          <MenuItem value=".5">مرض</MenuItem>
          <MenuItem value="1">سفر</MenuItem>
          <MenuItem value="2">إختبارات</MenuItem>
          <MenuItem value="3">وفاة</MenuItem>
          <MenuItem value="other">أخرى</MenuItem>
        </Select>
      </FormControl>
      {reason == "other" && (
        <TextField
          sx={{
            width: "100%",
          }}
          id="outlined-multiline-flexible"
          label="التفصيل"
          multiline
          rows={4}
        />
      )}
    </Box>
  );
}
