"use client";
import React, { useState } from "react";

import DatePicker from "@/app/components/BasicDatePicker";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { SourQuran, ajza } from "./SourQuran";
import pages from "./SourQuran";

export default function DailyForm() {
  const [date, setDate] = useState("");
  const [jozzo, setJozzo] = useState([]);
  const [sorra, setSorra] = useState([]);
  const [hefth, setHefth] = useState("");
  const [newhefth, setNewhefth] = useState([]);
  const [currFrom, setCurrFrom] = useState("");
  const [currTo, setCurrTo] = useState("");
  const [prevhefth, setPrevhefth] = useState("");
  const [oldhefth, setOldhefth] = useState("");
  const [sheikh, setSheikh] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let dataItem = {
      type: "daily",
      reportedAt: date,
      chapters: jozzo,
      surra: sorra,
      amount_of_pages: hefth,
      pages: newhefth,
      current_from: currFrom,
      current_to: currTo,
      previous: prevhefth,
      old: oldhefth,
      teacher_id: sheikh,
    };
    console.log(dataItem);
  };

  return (
    <Box
      sx={{
        mb: 4,
      }}>
      <Typography align="center" variant="h4">
        التقرير اليومي
      </Typography>
      <Box
        sx={{
          my: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}></Box>
      <form onSubmit={handleSubmit}>
        <DatePicker
          label="التاريخ"
          name="date"
          onChange={(event) => setDate(e.target.value)}
        />

        <Autocomplete
          name="jozzo"
          onChange={(e, value) => setJozzo(value)}
          disablePortal
          id="combo-box-demo"
          options={ajza}
          renderInput={(params) => <TextField {...params} label="الجزء" />}
          multiple
        />
        <Autocomplete
          name="sorra"
          onChange={(e, value) => setSorra(value)}
          disablePortal
          id="combo-box-demo"
          options={SourQuran}
          sx={{ my: 2 }}
          multiple
          renderInput={(params) => <TextField {...params} label="السورة" />}
        />
        <FormControl sx={{ width: "100%", my: 2 }}>
          <InputLabel id="demo-simple-select-label">مقدار الحفظ</InputLabel>
          <Select
            name="hefth"
            onChange={(e) => setHefth(e.target.value)}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="مقدار الحفظ">
            <MenuItem value=".5">نصف وجه</MenuItem>
            <MenuItem value="1">وجه</MenuItem>
            <MenuItem value="2">وجهان</MenuItem>
            <MenuItem value="3">٣ أوجه</MenuItem>
            <MenuItem value="4">٤ أوجه</MenuItem>
          </Select>
        </FormControl>
        <Autocomplete
          name="newhefth"
          onChange={(e, value) => setNewhefth(value)}
          disablePortal
          id="combo-box-demo"
          options={pages}
          multiple
          sx={{ my: 2 }}
          renderInput={(params) => (
            <TextField {...params} label="الجديد مثلا صفحة 120" />
          )}
        />

        <Box
          sx={{
            my: 2,
          }}>
          <Typography
            sx={{
              mx: 1,
            }}
            variant="body2">
            الجزء الحالي
          </Typography>

          <Box
            sx={{
              display: "flex",
              my: 1,
            }}>
            <Autocomplete
              name="currFrom"
              onChange={(e, value) => setCurrFrom(value.label)}
              sx={{
                mx: 1,
                width: "100%",
              }}
              disablePortal
              id="combo-box-demo"
              options={pages}
              renderInput={(params) => (
                <TextField {...params} label="الحالي من : " />
              )}
            />
            <Autocomplete
              name="currTo"
              onChange={(e, value) => setCurrTo(value.label)}
              sx={{
                mx: 1,
                width: "100%",
              }}
              disablePortal
              id="combo-box-demo"
              options={pages}
              renderInput={(params) => (
                <TextField {...params} label="الحالي الى :" />
              )}
            />
          </Box>
        </Box>
        <Autocomplete
          name="prevhefth"
          onChange={(e, value) => setPrevhefth(value.label)}
          disablePortal
          id="combo-box-demo"
          options={ajza}
          sx={{ my: 2 }}
          renderInput={(params) => <TextField {...params} label="السابق" />}
        />
        <Autocomplete
          name="oldhefth"
          onChange={(e, value) => setOldhefth(value.label)}
          disablePortal
          id="combo-box-demo"
          options={ajza}
          sx={{ my: 2 }}
          renderInput={(params) => <TextField {...params} label="القديم" />}
        />
        <Autocomplete
          name="sheikh"
          onChange={(e, value) => setSheikh(value.label)}
          disablePortal
          id="combo-box-demo"
          options={ajza}
          sx={{ my: 2 }}
          renderInput={(params) => <TextField {...params} label="الشيخ" />}
        />

        <div className="text-center">
          <Button
            type="submit"
            style={{ width: "240px", height: "40px" }}
            variant="contained"
            color="primary">
            ارسال
          </Button>
        </div>
      </form>
    </Box>
  );
}
