import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";

import { updatePhoto, updateProfile } from "@/lib/profile";

// dialog: {
//   [theme.breakpoints.down('sm')]: {
//       "& .MuiDialog-container .MuiDialog-paper": {
//           margin: "24px 0px",
//           borderRadius: 0
//       },
//   }
// }

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
  Chip,
} from "@mui/material";

import Loading from "@/app/components/Loading";

import { FormControl, TextField } from "@mui/material";
import { Edit } from "@mui/icons-material";

// api call country list
import country_list from "/public/countries.json";
const countriesOptions = country_list.map((country) => ({
  label: country.name,
  key: country.code,
}));

const styles = (theme) => ({
  dialog: {
    [theme.breakpoints.down("xs")]: {
      "& .MuiDialog-container .MuiDialog-paper": {
        margin: "0px 0px",
        maxHeight: "100%",
        borderRadius: 0,
      },
    },
  },
});

const UserEditModal = ({ user }) => {
  let [countries, setCountries] = useState(country_list);
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");
  let [loading, setLoading] = useState(false);

  //setting default data fromthe page
  useEffect(() => {
    setUsername(user.username);
    setPhone(user.phone);
    setPhone_code(user.phone_code);
    setEmail(user.email);
    setName(user.name);
    setResidation(user.residation);
    setIdentification(user.identification);
    setTrack(user.track);
    setRole(user.role);
    setGender(user.gender);
    setAge(user.age);
    setNationality(user.nationality);
  }, []);
  //user data state
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [phone_code, setPhone_code] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [residation, setResidation] = useState("");
  const [identification, setIdentification] = useState("");
  const [gender, setGender] = useState("");
  const [track, setTrack] = useState("");
  const [role, setRole] = useState("");

  const [open, setOpen] = useState(false);

  let getCountry = (selector) => {
    let country = countries.find((country) => country.name == user[selector]);

    return country ? { label: country.name, key: country.code } : undefined;
  };

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
    try {
      e.preventDefault;
      setLoading(true);
      let data = {
        username,
        phone,
        phone_code,
        email,
        name,
        age,
        nationality,
        residation,
        identification,
        gender,
        track,
        role,
      };

      let res = await updateProfile(data, user.accessToken);
      console.log(data, res);
      if (res.code == 200) {
        setSuccess("تم تعديل بيانات الملف الشخصي بنجاح");
        handleChange();
      } else {
        setError(res.message);
      }
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
        size="small">
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
              maxWidth={"xs"}>
              <TextField
                id="outlined-basic"
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                label="اسم المستخدم "
                value={username}
                variant="outlined"
                type="text"
                sx={{
                  my: 1,
                }}
              />
              <TextField
                id="outlined-basic"
                onChange={(e) => setName(e.target.value)}
                name="username"
                label="الاسم"
                value={name}
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
                      if (value) setPhone_code(value.label);
                      else setPhone_code("");
                    }}
                    value={countries.find(
                      (country) => country.dialCode == phone_code
                    )}
                    sx={{ marginRight: 1, width: "60%" }}
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                        key={option.code}>
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
                    onChange={(e) => setPhone(e.target.value)}
                    label="رقم الهاتف"
                    value={phone}
                    variant="outlined"
                    type="tel"
                    sx={{ width: "100%" }}
                  />
                </Box>
                <FormHelperText
                  sx={{
                    textAlign: "center",
                  }}
                  id="component-helper-text">
                  الرقم في صورة 9xxxxxxxxx من دون صفر البداية
                </FormHelperText>
                <br />
              </FormControl>

              <TextField
                id="outlined-basic"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                label="الايميل"
                value={email}
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
                onChange={(e) => setAge(e.target.value)}
                name="age"
                label="العمر"
                value={age}
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
                  if (value) setNationality(value.label);
                  else setNationality("");
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
                  if (value) setResidation(value.label);
                  else setResidation("");
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
                onChange={(e) => setIdentification(e.target.value)}
                name="identification"
                label="الهوية"
                value={identification || ""}
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
          }}>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            color="primary">
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

export default withStyles(styles)(UserEditModal);
