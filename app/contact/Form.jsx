import { useState } from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import { Divider } from "@mui/material";

import { contact } from "@/lib/contact";

export default function Form({ data, setError, setLoading, setSuccess }) {
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");
  let [type, setType] = useState("");

  let [hideIdentity, setHideIdentity] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    let body = {
      message,
      subject,
      type,
    };

    if (!hideIdentity) {
      body.name = Object.keys(data).length === 0 ? name : data.user.name;
      body.email = Object.keys(data).length === 0 ? email : data.user.email;
      body.phone =
        Object.keys(data).length === 0
          ? phone
          : `${data.user.phone_code}${data.user.phone}`;
    }

    if (!formControl(body)) {
      setLoading(false);
      return;
    }


    let res = await contact(body);

    if (res.code == 200) {
      setSuccess("تم إرسال الرسالة بنجاح");
    } else {
      setError(res.message);
    }

    setLoading(false);
  };

  let formControl = (body) => {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!type || !subject || !message) {
      setError("يجب توفير معلومات الرسالة كاملة");
      return false;
    }
    if (Object.keys(data).length === 0) {      
      if (!hideIdentity && !phone){
        setError("يجب توفير رقم الهاتف للتواصل أو إخفاء الهوية");
        }

      if (!hideIdentity && !email){
        setError("يجب توفير رقم البريد الإلكتروني للتواصل أو إخفاء الهوية");
        }

      if (!hideIdentity && !name ){ 
        setError("يجب توفير الإسم أو إخفاء الهوية");
  }

      if ((!hideIdentity && !name) && !phone && !email) return false;

      if(!hideIdentity){
        if (!/^[ ء-ي]+$/.test(name)) {
          setError("يجب أن يتكون الأسم من الأحرف العربية فقط!");
          return false;
        }
        if (!email.match(mailFormat)) {
          setError("صيغة البريد الالكتروني غير صحيحة");
          setLoading(false);
          return false;
        }
      }

      return true;
  }
    if (Object.keys(data).length !== 0) {
      if (!hideIdentity && ! body.phone){
        setError("يجب توفير رقم الهاتف للتواصل أو إخفاء الهوية");}
  
      if (!hideIdentity && !body.email){
        setError("يجب توفير رقم البريد الإلكتروني للتواصل أو إخفاء الهوية");
        }
  
      if (!hideIdentity && !body.name){ 
        setError("يجب توفير الإسم أو إخفاء الهوية");
  }
  
      if ((!hideIdentity && !body.name) && !body.phone && !body.email) return false;
  
      if (!hideIdentity) {        
        if (!/^[ ء-ي]+$/.test(body.name)) {
          setError("يجب أن يتكون الأسم من الأحرف العربية فقط!");
          return false;
        }
        if (!body.email.match(mailFormat)) {
          setError("صيغة البريد الالكتروني غير صحيحة");
          setLoading(false);
          return false;
        }
      }
      return true;
    }  
    
  };

  return (
    <Box
      id="message"
      sx={{
        backgroundColor: "#7B612E",
        minHeight: "100vh",
        py: 4,
        // color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 4,
        }}
      >
        الشكاوي \ المقترحات \ الإستفسارات
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80%",
          maxWidth: 700,
        }}
      >
        <Paper
          // variant="outlined"
          // className="animate__animated animate__bounce"
          elevation={3}
          sx={{
            p: 2,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            width: "100%",
            maxWidth: 700,
            minWidth: 320,
          }}
        >
          <form
            onSubmit={handleSubmit}
            action={"#"}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <h2 className="text-2xl mb-4 text-center">التواصل</h2>

            {!hideIdentity && (
              <>
                <TextField
                  id="outlined-basic"
                  onChange={(e) => setName(e.target.value)}
                  value={Object.keys(data).length === 0 ? name : data.user.name}
                  label="الإسم رباعي"
                  variant="outlined"
                  type="text"
                  sx={{
                    my: 1,
                  }}
                  disabled={hideIdentity || Object.keys(data).length !== 0}
                />
                <TextField
                  id="outlined-basic"
                  onChange={(e) => {
                    if (!/^[0-9]*$/.test(e.target.value)) {
                      e.preventDefault();
                      return;
                    }
                    setPhone(e.target.value);
                  }}
                  value={
                    Object.keys(data).length === 0
                      ? phone
                      : `${data.user.phone_code}${data.user.phone}`
                  }
                  label=" رقم الهاتف"
                  helperText="الرقم في صورة 2499xxxxxxx "
                  variant="outlined"
                  type="tel"
                  sx={{
                    my: 1,
                  }}
                  disabled={hideIdentity || Object.keys(data).length !== 0}
                />
                <TextField
                  id="outlined-basic"
                  onChange={(e) => setEmail(e.target.value)}
                  value={
                    Object.keys(data).length === 0 ? email : data.user.email
                  }
                  label="البريد الإلكتروني"
                  variant="outlined"
                  type="email"
                  sx={{
                    my: 1,
                  }}
                  disabled={hideIdentity || Object.keys(data).length !== 0}
                />
              </>
            )}
            <FormControlLabel
              sx={{ alignSelf: "start" }}
              label="إخفاء الهوية"
              control={
                <Checkbox
                  checked={hideIdentity}
                  onChange={(e) => setHideIdentity(e.target.checked)}
                />
              }
            />

            <Divider
              sx={{
                my: 2,
              }}
            />
            <TextField
              id="outlined-basic"
              onChange={(e) => setSubject(e.target.value)}
              label="العنوان"
              variant="outlined"
              type="text"
              sx={{
                my: 1,
              }}
            />
            <FormControl sx={{ width: "100%", my: 1 }}>
              <InputLabel id="demo-simple-select-label">
                إختيار نموزج
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="نوع الرسالة"
                onChange={(e) => setType(e.target.value)}
                defaultValue={''}
              >
                <MenuItem value={"complaint"}>شكوى</MenuItem>
                <MenuItem value={"suggestion"}>مقترح</MenuItem>
                <MenuItem value={"question"}>إستفسار</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-multiline-static"
              label="الرسالة"
              onChange={(e) => setMessage(e.target.value)}
              multiline
              rows={4}
            />

            <Button variant="contained" type="submit" sx={{ m: 1 }}>
              إرسال
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
}
