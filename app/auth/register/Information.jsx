import { useState } from "react";

import Conditions from "./Conditions";

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
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import BasicDatePicker from "@/app/components/BasicDatePicker";

const countriesOptions = country_list.map((country) => ({
  label: country.name,
  key: country.code,
}));

export default function Information({
  state,
  setState,
  acceptedConditions,
  setAcceptedConditions,
}) {
  let [showPassword, setShowPassword] = useState(false);
  let [showConditions, setShowConditions] = useState(false);
  let [countries, setCountries] = useState(country_list);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  let handleStateChange = (input_name, value, e) => {
    if (input_name == "phone" && value.length > 10) return;
    if (input_name == "phone" && !/^[0-9]*$/.test(value)) {
      e.preventDefault();
      return;
    }

    setState((prevState) => {
      return { ...prevState, [input_name]: value };
    });
  };

  let getCountry = (selector) => {
    let country = countries.find((country) => country.name == state[selector]);

    return country ? { label: country.name, key: country.code } : undefined;
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
        المعلومات الأساسية
      </Typography>
      <TextField
        id="outlined-basic"
        onChange={(e) => handleStateChange("username", e.target.value)}
        value={state.username}
        label="إسم المستخدم"
        helperText="يتكون إسم المستخدم من ٥ أحرف أو أكثر"
        variant="outlined"
        type="text"
        className="my-5"
        sx={{ my: 1 }}
      />

      {/* <TextField
        id="outlined-basic"
        onChange={(e) => handleStateChange("password", e.target.value)}
        value={state.password}
        label="كلمة المرور"
        helperText="تتكون كلمة المرور من ٨ احرف او اكثر"
        variant="outlined"
        type="password"
        sx={{ my: 1 }}
      /> */}
      <FormControl variant="outlined" sx={{ mt: 2 }}>
        <InputLabel htmlFor="outlined-adornment-password">
          كلمة المرور
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => handleStateChange("password", e.target.value)}
          // onChange={}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="كلمة المرور"
          required
        />
        <FormHelperText id="component-helper-text">
          تتكون كلمة المرور من ٨ أحرف أو أكثر{" "}
        </FormHelperText>
      </FormControl>
      <TextField
        id="outlined-basic"
        onChange={(e) => handleStateChange("name", e.target.value)}
        label="الإسم الرباعي"
        value={state.name}
        variant="outlined"
        type="text"
        className="my-5"
        sx={{ my: 1 }}
      />
      <TextField
        id="outlined-basic"
        onChange={(e) => handleStateChange("email", e.target.value)}
        label="البريد الإلكتروني"
        value={state.email}
        variant="outlined"
        type="email"
        className="my-5"
        sx={{ my: 1 }}
      />
      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
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
          sx={{ marginRight: 1, width: "60%" }}
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
          onChange={(e) => handleStateChange("phone", e.target.value, e)}
          label="رقم الهاتف"
          value={state.phone}
          variant="outlined"
          type="tel"
          sx={{ width: "100%" }}
        />
      </Box>
      <FormHelperText
        sx={{
          textAlign: "center",
        }}
        id="component-helper-text"
      >
        الرقم في صورة 9xxxxxxxxx من دون صفر البداية
      </FormHelperText>

      <FormControl sx={{ width: "100%", my: 1 }}>
        <InputLabel id="demo-simple-select-label">النوع</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.gender}
          label="النوع "
          onChange={(e) => handleStateChange("gender", e.target.value)}
        >
          <MenuItem value={"male"}>ذكر</MenuItem>
          <MenuItem value={"female"}>أنثى</MenuItem>
        </Select>
      </FormControl>
      {/* <TextField
          id="outlined-basic"
          onChange={(e) => handleStateChange("age", e.target.value)}
          label="تاريخ الميلاد"
          value={state.age}
          variant="outlined"
          type="date"
        
        /> */}
      <BasicDatePicker
        label={"تاريخ الميلاد"}
        date={state.birth_date}
        setState={(val) => setState((prev) => ({ ...prev, birth_date: val }))}
      />

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        onChange={(e, value) => {
          if (value) handleStateChange("nationality", value.label);
          else handleStateChange("nationality", "");
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
        value={getCountry("nationality")}
        isOptionEqualToValue={(option, value) => option.key == value.key}
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
        // keeping tbe state of country and nationality when changing step and retreving the value by getting counry name and puting in in format {label: country_name}
        value={getCountry("residation")}
        isOptionEqualToValue={(option, value) => option.key == value.key}
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
        renderInput={(params) => <TextField {...params} label="مكان الإقامة" />}
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
      <FormControlLabel
        sx={{ textAlign: "center", mb: 2 }}
        label={
          <Typography>
            الموافقة على
            <Button
              sx={{
                textDecoration: "underline",
                color: "#cba346",
              }}
              onClick={() => setShowConditions(true)}
            >
              شروط اليرنامج
            </Button>
          </Typography>
        }
        control={
          <Checkbox
            checked={acceptedConditions}
            onChange={(e) => setAcceptedConditions(e.target.checked)}
          />
        }
      />

      <Conditions
        setAcceptedConditions={setAcceptedConditions}
        showConditions={showConditions}
        setShowConditions={setShowConditions}
      />
    </Container>
  );
}
