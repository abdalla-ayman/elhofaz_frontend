import React from "react";

import DatePicker from "@/app/components/BasicDatePicker";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export default function ChangeNew() {
  return (
    <Box
      sx={{
        my: 1,
      }}
    >
        <FormControl sx={{ width: "100%", my: 2 }}>
        <InputLabel id="demo-simple-select-label">مقدار الحفظ</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={4}
          label="مقدار الحفظ"
          onChange={(e) => handleStateChange("gender", e.target.value)}
        >
          <MenuItem value=".5">نصف وجه</MenuItem>
          <MenuItem value="1">وجه</MenuItem>
          <MenuItem value="2">وجهان</MenuItem>
          <MenuItem value="3">٣ أوجه</MenuItem>
          <MenuItem value="4">٤ أوجه</MenuItem>
        </Select>
      </FormControl>
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


