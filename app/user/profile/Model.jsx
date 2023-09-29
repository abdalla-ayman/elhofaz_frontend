import React, { useState, useEffect } from "react";
import { updatePhoto, updateProfile } from "@/lib/profile";

// componetns
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Autocomplete,
  FormHelperText,
  Alert,
  Container,
  Divider,
} from "@mui/material";

import Loading from "@/app/components/Loading";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Edit } from "@mui/icons-material";

// api call country list
import country_list from "/public/countries.json";
const countriesOptions = country_list.map((country) => ({
  label: country.name,
  key: country.code,
}));

const UserEditModal = ({ user }) => {
  let [countries, setCountries] = useState(country_list);
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");
  let [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(user);
  const [open, setOpen] = useState(false);

  let getCountry = (selector) => {
    let country = countries.find(
      (country) => country.name == userData[selector]
    );

    return country ? { label: country.name, key: country.code } : undefined;
  };

  //handle change for user basic info
  const handleChange = (e) => {
    const new_value = e.target.value;
    setUserData({ ...userData, [e.target.name]: new_value });
  };
  let handleAutoCompleteChange = (name, value) => {
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //handle form submission
  const handleSubmit = async (e) => {
    try {
      e.preventDefault;
      setLoading(true);
      let res = await updateProfile(userData, userData.accessToken);

      console.log(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        color="primary"
        startIcon={<Edit />}
        variant="contained"
        sx={{
          textDecoration: "underline",
        }}
        aria-label="Delete"
        onClick={handleOpen}
        size="small"
      >
        تعديل
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> تعديل البيانات الاساسية </DialogTitle>
        <DialogContent dividers>
          <form action={"#"}>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              maxWidth={"xs"}
            >
              <TextField
                id="outlined-basic"
                onChange={handleChange}
                name="username"
                label="اسم المستخدم "
                value={userData.username}
                variant="outlined"
                type="text"
                sx={{
                  my: 1,
                }}
              />

              <FormControl variant="outlined">
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Autocomplete
                    id="country-select-demo"
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.dialCode}
                    onChange={(e, value) => {
                      if (value)
                        handleAutoCompleteChange("phone_code", value.label);
                      else handleAutoCompleteChange("phone_code", "");
                    }}
                    value={countries.find(
                      (country) => country.dialCode == userData.phone_code
                    )}
                    sx={{ marginRight: 1, width: "60%" }}
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                        key={option.code}
                      >
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
                    onChange={handleChange}
                    label="رقم الهاتف"
                    value={userData.phone}
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
                <br />
              </FormControl>

              <TextField
                id="outlined-basic"
                onChange={handleChange}
                name="email"
                label="الايميل"
                value={userData.email}
                variant="outlined"
                type="text"
                sx={{
                  my: 1,
                  // width: "calc(100% + 36px)",
                  // transform: "translateX(-18px)",
                }}
              />

              <TextField
                id="outlined-basic"
                onChange={handleChange}
                name="age"
                label="العمر"
                value={userData.age}
                variant="outlined"
                type="text"
                sx={{
                  my: 1,
                }}
              />

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={getCountry("nationality")}
                onChange={(e, value) => {
                  if (value)
                    handleAutoCompleteChange("nationality", value.label);
                  else handleAutoCompleteChange("nationality", "");
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
                    <Chip
                      {...getTagProps({ index })}
                      key={option.key}
                      label={option}
                    />
                  ));
                }}
                // to fix some bugs https://stackoverflow.com/questions/75818761/material-ui-autocomplete-warning-a-props-object-containing-a-key-prop-is-be
                options={countriesOptions}
                isOptionEqualToValue={(option, value) =>
                  option.key == value.key
                }
                sx={{ my: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="الجنسية" />
                )}
              />

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={getCountry("residation")}
                onChange={(e, value) => {
                  if (value)
                    handleAutoCompleteChange("residation", value.label);
                  else handleAutoCompleteChange("residation", "");
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
                    <Chip
                      {...getTagProps({ index })}
                      key={option.key}
                      label={option}
                    />
                  ));
                }}
                // to fix some bugs https://stackoverflow.com/questions/75818761/material-ui-autocomplete-warning-a-props-object-containing-a-key-prop-is-be
                options={countriesOptions}
                isOptionEqualToValue={(option, value) =>
                  option.key == value.key
                }
                sx={{ my: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="مكان الالقامة" />
                )}
              />

              <TextField
                id="outlined-basic"
                onChange={handleChange}
                name="identification"
                label="الهوية"
                value={userData.identification || ""}
                variant="outlined"
                type="text"
                sx={{
                  my: 1,
                }}
              />
            </Container>
          </form>
          <Loading loading={loading} text={"الرجاء الانتظار قليلا"} />

          {error && (
            <Alert severity="error" icon={false}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" icon={false}>
              {success}
            </Alert>
          )}
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            color="primary"
          >
            حفظ
          </Button>
          <Button onClick={handleClose} variant="contained" color="error">
            إلغاء
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserEditModal;
