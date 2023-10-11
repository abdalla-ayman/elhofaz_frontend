import React, { useState, useEffect } from "react";
import { updateProfile } from "@/lib/profile";
import BasicDatePicker from "../../components/BasicDatePicker";

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
  Container,
  Chip,
} from "@mui/material";

import Loading from "@/app/components/Loading";
import Alert from "@/app/components/Alert";

import { FormControl, TextField } from "@mui/material";
import { Edit } from "@mui/icons-material";

// api call country list
import country_list from "/public/countries.json";
const countriesOptions = country_list.map((country) => ({
  label: country.name,
  key: country.code,
}));

const UserEditModal = ({ user, fetchUser, token }) => {
  let [countries, setCountries] = useState(country_list);
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");
  let [loading, setLoading] = useState(false);

  //
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [phone_code, setPhone_code] = useState("");
  const [email, setEmail] = useState("");
  const [residation, setResidation] = useState("");
  const [identification, setIdentification] = useState("");

  const [open, setOpen] = useState(false);

  //setting default data fromthe page
  useEffect(() => {
    setError("");
    setSuccess("");
    setUsername(user.username);
    setPhone(user.phone);
    setPhone_code(user.phone_code);
    setEmail(user.email);
    setResidation(user.residation);
    setIdentification(user.identification);
  }, [open]);
  //user data state

  let getCountry = (selector) => {
    let country = countries.find((country) => country.name == user[selector]);

    return country ? { label: country.name, key: country.code } : undefined;
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formControl = () => {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!/^[a-zA-Z0-9_]*$/.test(username)) {
      setError(
        "يجب أن يتكون إسم المستخدام من الأحرف والأرقام الانجليزية بالإضافة ل _ فقط"
      );
      setLoading(false);
      return false;
    }

    if (!email.match(mailFormat)) {
      setError("صيغة البريد الالكتروني غير صحيحة");
      setLoading(false);
      return false;
    }

    if (!/^[a-zA-Z0-9_]*$/.test(identification)) {
      setLoading(false);
      setError("يجب أن لا تحتوي الهوية على الأحرف العربية ");
      return false;
    }

    return true;
  };
  //handle form submission
  const handleSubmit = async (e) => {
    try {
      e.preventDefault;
      setError("");
      setSuccess("");
      setLoading(true);
      if (!formControl()) return;

      //prepare data
      let data = {
        username,
        phone,
        phone_code,
        email,
        residation,
        identification,
      };

      let res = await updateProfile(data, token);
      if (res.code == 200) {
        setSuccess("تم تعديل بيانات الملف الشخصي بنجاح");
        fetchUser();
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
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                label="إسم المستخدم "
                value={username}
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
                    }}
                    defaultValue={countries.find(
                      (country) => country.dialCode == phone_code
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
                    onChange={(e) => {
                      if (
                        !/^[0-9]*$/.test(e.target.value) &&
                        e.target.value.length > 10
                      ) {
                        e.preventDefault();
                        return;
                      } else setPhone(e.target.value);
                    }}
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
                  id="component-helper-text"
                >
                  الرقم في صورة 9xxxxxxxxx من دون صفر البداية
                </FormHelperText>
                <br />
              </FormControl>

              <TextField
                id="outlined-basic"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                label="الإيميل"
                value={email}
                variant="outlined"
                type="text"
                sx={{
                  my: 1,
                  // width: "calc(100% + 36px)",
                  // transform: "translateX(-18px)",
                }}
              />

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                defaultValue={getCountry("residation")}
                onChange={(e, value) => {
                  if (value) setResidation(value.label);
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
                  <TextField {...params} label="مكان الإقامة" />
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
          <Loading loading={loading} text={"الرجاء الإنتظار قليلا"} />
          {error && (
            <Alert
              severity="error"
              close={() => setError("")}
              message={error}
            />
          )}
          {success && (
            <Alert close={handleClose} message={success} severity="success" />
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
