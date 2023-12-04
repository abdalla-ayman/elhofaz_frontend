import React from "react";

import DatePicker from "@/app/components/BasicDatePicker";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function Absence() {
  return (
    <Box
      sx={{
        my: 1,
      }}
    >
      <DatePicker label="من يوم" />
      <DatePicker label="الى يوم" />
      <TextField
        sx={{
          width: "100%",
        }}
        id="outlined-multiline-flexible"
        label="السبب"
        multiline
        rows={4}
      />
    </Box>
  );
}
