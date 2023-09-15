import { useState } from "react";

// api call country list
import country_list from "/public/countries.json";
//components
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Information({ state, setState }) {
  let [countries, setCountries] = useState(country_list);

  let handleStateChange = (input_name, value) => {
    setState((prevState) => {
      return { ...prevState, [input_name]: value };
    });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        mt:3
      }}
      maxWidth={"xs"}
    >
      <Typography variant="subtitle1" component="h3">
        المعلومات الاساسية
      </Typography>
      <TextField
        id="outlined-basic"
        onChange={(e) => handleStateChange("username", e.target.value)}
        label="اسم المستخدم"
        variant="outlined"
        type="text"
        className="my-5"
        sx={{ my: 1 }}
      />

      <TextField
        id="outlined-basic"
        onChange={(e) => handleStateChange("passowrd", e.target.value)}
        label="كلمة المرور"
        variant="outlined"
        type="password"
        sx={{ my: 1 }}
      />
      <TextField
        id="outlined-basic"
        onChange={(e) => handleStateChange("name", e.target.value)}
        label="الاسم الكامل"
        variant="outlined"
        type="text"
        className="my-5"
        sx={{ my: 1 }}
      />
      <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
        <Autocomplete
          id="country-select-demo"
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.dialCode}
          onChange={(e, value) =>
            handleStateChange("country_code", value.dialCode)
          }
          sx={{ marginRight: 1, width: 100 }}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
              key={option.code}
            >
              {/* <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                /> */}
              {option.name} ({option.code}) {option.dialCode}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="مفتاح البلد"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
        <TextField
          id="outlined-basic"
          onChange={(e) => handleStateChange("phone_number", e.target.value)}
          label="رقم الهاتف"
          variant="outlined"
          type="tel"
          sx={{ my: 1, width: "100%" }}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
        <FormControl sx={{ marginRight: 1, width: "100%" }}>
          <InputLabel id="demo-simple-select-label">النوع</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.gender}
            label="النوع "
            onChange={(e) => handleStateChange("gender", e.target.value)}
          >
            <MenuItem value={"male"}>ذكر</MenuItem>
            <MenuItem value={"female"}>انثى</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          onChange={(e) => handleStateChange("age", e.target.value)}
          label="العمر"
          variant="outlined"
          type="number"
          sx={{ my: 1, width: "100%" }}
        />
      </Box>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        onChange={(e, value) => handleStateChange("nationality", value.label)}
        options={countries.map((country) => ({
          label: country.name,
        }))}
        sx={{ my: 1 }}
        renderInput={(params) => <TextField {...params} label="الجنسية" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        onChange={(e, value) => handleStateChange("residential", value.label)}
        options={countries.map((country) => ({
          label: country.name,
        }))}
        sx={{ my: 1 }}
        renderInput={(params) => <TextField {...params} label="مكان الاقامة" />}
      />

      <FormControl sx={{ my: 1 }}>
        <FormLabel id="demo-radio-buttons-group-label">التسجيل ك </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="user"
          name="radio-buttons-group"
          onChange={(e) => handleStateChange("role", e.target.value)}
          row
        >
          <FormControlLabel value="user" control={<Radio />} label="طالب" />
          <FormControlLabel value="teacher" control={<Radio />} label="شيخ" />
        </RadioGroup>
      </FormControl>
    </Container>
  );
}
