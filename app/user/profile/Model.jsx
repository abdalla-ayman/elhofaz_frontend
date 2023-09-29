import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Box,
  Autocomplete,
  FormHelperText,
} from "@mui/material";

import { updatePhoto, updateProfile } from "@/lib/profile";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Edit } from "@mui/icons-material";

// api call country list
import country_list from "/public/countries.json";

const UserEditModal = ({ user }) => {
  let [countries, setCountries] = useState(country_list);
  const [userData, setUserData] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUserData(user);
  }, []);

  //handle change for user basic info
  const handleChange = (e) => {
    const new_value = e.target.value;
    setUserData({ ...userData, [e.target.name]: new_value });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault;

    let res = await updateProfile(userData, userData.accessToken);

    console.log(res);
  };

  return (
    <div>
      <IconButton color="primary" aria-label="Delete" onClick={handleOpen}>
        <Edit />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> تعديل البيانات الاساسية </DialogTitle>
        <DialogContent>
          <form className="w-80 m-auto flex items-center flex-col" action={"#"}>
            <FormControl variant="outlined">
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
                  width: "calc(100% + 36px)",
                  transform: "translateX(-18px)",
                }}
              />
            </FormControl>

            <FormControl variant="outlined">
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Autocomplete
                  id="country-select-demo"
                  options={countries}
                  autoHighlight
                  getOptionLabel={(option) => option.dialCode}
                  name="phone_code"
                  onChange={handleChange}
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

            <FormControl variant="outlined">
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
                  width: "calc(100% + 36px)",
                  transform: "translateX(-18px)",
                }}
              />
            </FormControl>

            <FormControl variant="outlined">
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
                  width: "calc(100% + 36px)",
                  transform: "translateX(-18px)",
                }}
              />
            </FormControl>

            <FormControl variant="outlined">
              <TextField
                id="outlined-basic"
                onChange={handleChange}
                name="nationality"
                label="الجنسية"
                value={userData.nationality}
                variant="outlined"
                type="text"
                sx={{
                  my: 1,
                  width: "calc(100% + 36px)",
                  transform: "translateX(-18px)",
                }}
              />
            </FormControl>

            <FormControl variant="outlined">
              <TextField
                id="outlined-basic"
                onChange={handleChange}
                name="residation"
                label="مكان الاقامة"
                value={userData.residation}
                variant="outlined"
                type="text"
                sx={{
                  my: 1,
                  width: "calc(100% + 36px)",
                  transform: "translateX(-18px)",
                }}
              />
            </FormControl>

            <FormControl variant="outlined">
              <TextField
                id="outlined-basic"
                onChange={handleChange}
                name="identification"
                label="الهوية"
                value={userData.identification}
                variant="outlined"
                type="text"
                sx={{
                  my: 1,
                  width: "calc(100% + 36px)",
                  transform: "translateX(-18px)",
                }}
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            الغاء
          </Button>
          <Button type="submit" onClick={handleSubmit} color="secondary">
            حفظ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserEditModal;
