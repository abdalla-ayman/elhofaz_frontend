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

export default function FAQ() {
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");
  let [loading, setLoading] = useState(false);

  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [type, setType] = useState("");
  let [hideIdentity, setHideIdentity] = useState(false);

  return (
    <Box
      id="FAQ"
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
            action={"#"}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <h2 className="text-2xl mb-4 text-center">التواصل</h2>
            <FormControl sx={{ width: "100%", my: 1 }}>
              <InputLabel id="demo-simple-select-label">نوع الرسالة</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="نوع الرسالة"
                onChange={(e) => handleStateChange("gender", e.target.value)}
              >
                <MenuItem value={"complaint"}>شكوى</MenuItem>
                <MenuItem value={"suggestion"}>إقتراح</MenuItem>
                <MenuItem value={"question"}>إستفسار</MenuItem>
              </Select>
            </FormControl>
            {!hideIdentity && (
              <>
                <TextField
                  id="outlined-basic"
                  onChange={(e) => setName(e.target.value)}
                  label="الإسم رباعي"
                  variant="outlined"
                  type="text"
                  sx={{
                    my: 1,
                  }}
                  disabled={hideIdentity}
                />
                <TextField
                  id="outlined-basic"
                  onChange={(e) => setPhone(e.target.value)}
                  label=" رقم الهاتف"
                  helperText="الرقم في صورة 2499xxxxxxx "
                  variant="outlined"
                  type="tel"
                  sx={{
                    my: 1,
                  }}
                  disabled={hideIdentity}
                />
                <TextField
                  id="outlined-basic"
                  onChange={(e) => setEmail(e.target.value)}
                  label="البريد الإلكتروني"
                  variant="outlined"
                  type="email"
                  sx={{
                    my: 1,
                  }}
                  disabled={hideIdentity}
                />
              </>
            )}

            <TextField
              id="outlined-multiline-static"
              label="الرسالة"
              onChange={(e) => setMessage(e.target.value)}
              multiline
              rows={4}
            />

            <FormControlLabel
              sx={{ mx: 2, alignSelf: "start" }}
              label="إخفاء الهوية"
              control={
                <Checkbox
                  checked={hideIdentity}
                  onChange={(e) => setHideIdentity(e.target.checked)}
                />
              }
            />

            {error && <Alert severity="error" message={error} />}
            {success && <Alert severity="success" message={success} />}

            <Button variant="contained" type="submit" sx={{ m: 1 }}>
              إرسال
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
}
