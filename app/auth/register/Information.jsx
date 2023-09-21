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
import Chip from "@mui/material/Chip";


const countriesOptions = country_list.map((country) => ({
  label: country.name,
  key: country.code,
}));

export default function Information({ state, setState }) {
  let [countries, setCountries] = useState(country_list);

  let handleStateChange = (input_name, value) => {
    if (input_name == "phone" && value.length > 10) return;

    setState((prevState) => {
      return { ...prevState, [input_name]: value };
    });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 3,
      }}
      maxWidth={"xs"}
    >
      <Typography variant="subtitle1" component="h3">
        المعلومات الاساسية
      </Typography>
      <TextField
        id="outlined-basic"
        onChange={(e) => handleStateChange("username", e.target.value)}
        value={state.username}
        label="اسم المستخدم"
        variant="outlined"
        type="text"
        className="my-5"
        sx={{ my: 1 }}
      />

      <TextField
        id="outlined-basic"
        onChange={(e) => handleStateChange("password", e.target.value)}
        value={state.password}
        label="كلمة المرور"
        variant="outlined"
        type="password"
        sx={{ my: 1 }}
      />
      <TextField
        id="outlined-basic"
        onChange={(e) => handleStateChange("name", e.target.value)}
        label="الاسم الرباعي"
        value={state.name}
        variant="outlined"
        type="text"
        className="my-5"
        sx={{ my: 1 }}
      />
      <TextField
        id="outlined-basic"
        onChange={(e) => handleStateChange("email", e.target.value)}
        label="البريد الالكتروني"
        value={state.email}
        variant="outlined"
        type="email"
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
            handleStateChange("phone_code", value.dialCode)
          }
          value={countries.find(
            (country) => country.dialCode == state.phone_code
          )}
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
          onChange={(e) => handleStateChange("phone", e.target.value)}
          label="رقم الهاتف"
          value={state.phone}
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
          value={state.age}
          variant="outlined"
          type="number"
          sx={{ my: 1, width: "100%" }}
        />
      </Box>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        onChange={(e, value) => {
          if (value) handleStateChange("residation", value.label);
          else handleStateChange("residation", "");
        }}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.key}>
              {option.label}
            </li>
          );
        }}
        renderTags={(tagValue, getTagProps) => {
          return tagValue.map((option, index) => (
            <Chip {...getTagProps({ index })} key={option.key} label={option} />
          ));
        }}
        // to fix some bugs https://stackoverflow.com/questions/75818761/material-ui-autocomplete-warning-a-props-object-containing-a-key-prop-is-be
        options={countriesOptions}
        sx={{ my: 1 }}
        renderInput={(params) => <TextField {...params} label="الجنسية" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        onChange={(e, value) => {
          if (value) handleStateChange("residation", value.label);
          else handleStateChange("residation", "");
        }}
        //keeping tbe state of country and nationality when changing step and retreving the value by getting counry name and puting in in format {label: country_name}
        // value={{
        //   label: countries.find((country) => country.name == state.nationality)
        //     .name,
        // }}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.key}>
              {option.label}
            </li>
          );
        }}
        renderTags={(tagValue, getTagProps) => {
          return tagValue.map((option, index) => (
            <Chip {...getTagProps({ index })} key={option.key} label={option} />
          ));
        }}
        options={countriesOptions}
        sx={{ my: 1 }}
        renderInput={(params) => <TextField {...params} label="مكان الاقامة" />}
      />

      <FormControl sx={{ my: 1 }}>
        <FormLabel id="demo-radio-buttons-group-label">التسجيل ك </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="user"
          value={state.role}
          name="radio-buttons-group"
          onChange={(e) => handleStateChange("role", e.target.value)}
          row
        >
          <FormControlLabel value="user" control={<Radio />} label="طالب" />
          <FormControlLabel value="teacher" control={<Radio />} label="معلم" />
        </RadioGroup>
      </FormControl>
    </Container>
  );
}
