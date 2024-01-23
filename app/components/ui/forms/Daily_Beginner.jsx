"use client";
import React from "react";

import DatePicker from "@/app/components/BasicDatePicker";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function BeginnerDailyForm() {
  return (
    <Box
      sx={{
        mb: 4,
      }}>
      <Typography align="center" variant="h4">
        التقرير اليومي التأهيلي
      </Typography>
      <Box
        sx={{
          my: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}></Box>
      <DatePicker label="التاريخ" />

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={ajza}
        sx={{ my: 2 }}
        renderInput={(params) => <TextField {...params} label="الدرس" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={ajza}
        sx={{ my: 2 }}
        multiple
        renderInput={(params) => <TextField {...params} label="السورة" />}
      />

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={ajza}
        multiple
        sx={{ my: 2 }}
        renderInput={(params) => <TextField {...params} label="الوجه" />}
      />

      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
        }}>
        <FormControlLabel control={<Checkbox />} label="الإستماع" />
        <FormControlLabel control={<Checkbox />} label="التكرار" />
      </FormGroup>

      <Box
        sx={{
          my: 2,
        }}>
        <Typography
          sx={
            {
              // mx: 1,
            }
          }
          variant="body2">
          الجزء الحالي:
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: 1,
            mx: 0,
          }}>
          <Autocomplete
            sx={{
              mr: 1,
              width: "100%",
            }}
            disablePortal
            id="combo-box-demo"
            options={ajza}
            renderInput={(params) => (
              <TextField {...params} label="الحالي من : " />
            )}
          />
          <Autocomplete
            sx={{
              ml: 1,
              width: "100%",
            }}
            disablePortal
            id="combo-box-demo"
            options={ajza}
            renderInput={(params) => (
              <TextField {...params} label="الحالي الى :" />
            )}
          />
        </Box>
      </Box>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={ajza}
        sx={{ my: 2 }}
        renderInput={(params) => <TextField {...params} label="القديم" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={ajza}
        sx={{ my: 2 }}
        renderInput={(params) => <TextField {...params} label="الشيخ" />}
      />

      <div className="text-center">
        <Button
          style={{ width: "240px", height: "40px" }}
          variant="contained"
          color="primary">
          ارسال
        </Button>
      </div>
    </Box>
  );
}

let ajza = [
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
  {
    label: 3,
    value: 3,
  },
  {
    label: 4,
    value: 4,
  },
  {
    label: 5,
    value: 5,
  },
  {
    label: 6,
    value: 6,
  },
  {
    label: 7,
    value: 7,
  },
  {
    label: 8,
    value: 8,
  },
  {
    label: 9,
    value: 9,
  },
  {
    label: 10,
    value: 10,
  },
  {
    label: 11,
    value: 11,
  },
  {
    label: 12,
    value: 12,
  },
  {
    label: 13,
    value: 13,
  },
  {
    label: 14,
    value: 14,
  },
  {
    label: 15,
    value: 15,
  },
  {
    label: 16,
    value: 16,
  },
  {
    label: 17,
    value: 17,
  },
  {
    label: 18,
    value: 18,
  },
  {
    label: 19,
    value: 19,
  },
  {
    label: 20,
    value: 20,
  },
  {
    label: 21,
    value: 21,
  },
  {
    label: 22,
    value: 22,
  },
  {
    label: 23,
    value: 23,
  },
  {
    label: 24,
    value: 24,
  },
  {
    label: 25,
    value: 25,
  },
  {
    label: 26,
    value: 26,
  },
  {
    label: 27,
    value: 27,
  },
  {
    label: 28,
    value: 28,
  },
  {
    label: 29,
    value: 29,
  },
  {
    label: 30,
    value: 30,
  },
];
