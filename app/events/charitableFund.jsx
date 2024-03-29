import React, {useState} from 'react'
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
import { Divider, Grid, Container, IconButton } from "@mui/material";
import { EmailOutlined, WhatsApp } from "@mui/icons-material";

import { contact } from "@/lib/contact";
import { motion } from "framer-motion";


export default function CharitableFund() {
  let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");
    let [subject, setSubject] = useState("");
    let [message, setMessage] = useState("");
    let [type, setType] = useState("");
  
    let [hideIdentity, setHideIdentity] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    };

  return (
<Box
        id="message"
        sx={{
          minHeight: "100vh",
          py: 4,
          backgroundColor: "#bb9457",
        }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            mt: 12,
            marginBottom: 9,
            color: "black",
          }}>
          الصندوق الخيري
        </Typography>
  
        {/* <Box> */}
          <Container>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'

              }}>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  viewport={{ once: true }}>
                  <Paper
                    elevation={3}
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      p: 2,
                      width: "100%",
                    }}>
                    <form
                      onSubmit={handleSubmit}
                      action={"#"}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}>
                      <h2 className="text-2xl mb-4 text-center">التواصل</h2>
  
                      {!hideIdentity && (
                        <>
                          <TextField
                            id="outlined-basic"
                            onChange={(e) => setName(e.target.value)}
                            // value={
                            //   Object.keys(data).length === 0
                            //     ? name
                            //     : data.user.name
                            // }
                            label="الإسم رباعي"
                            variant="outlined"
                            type="text"
                            sx={{
                              my: 1,
                            }}
                            // disabled={
                            //   hideIdentity || Object.keys(data).length !== 0
                            // }
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
                            // value={
                            //   Object.keys(data).length === 0
                            //     ? phone
                            //     : `${data.user.phone_code}${data.user.phone}`
                            // }
                            label=" رقم الهاتف"
                            helperText="الرقم في صورة 2499xxxxxxx "
                            variant="outlined"
                            type="tel"
                            sx={{
                              my: 1,
                            }}
                            // disabled={
                            //   hideIdentity || Object.keys(data).length !== 0
                            // }
                          />
                          <TextField
                            id="outlined-basic"
                            onChange={(e) => setEmail(e.target.value)}
                            // value={
                            //   Object.keys(data).length === 0
                            //     ? email
                            //     : data.user.email
                            // }
                            label="البريد الإلكتروني"
                            variant="outlined"
                            type="email"
                            sx={{
                              my: 1,
                            }}
                            // disabled={
                            //   hideIdentity || Object.keys(data).length !== 0
                            // }
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
                      {/* <TextField
                        id="outlined-basic"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
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
                          value={type}>
                          <MenuItem value={"complaint"}>شكوى</MenuItem>
                          <MenuItem value={"suggestion"}>مقترح</MenuItem>
                          <MenuItem value={"question"}>إستفسار</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        id="outlined-multiline-static"
                        label="الرسالة"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        multiline
                        rows={4}
                      /> */}
  
                      <Button variant="contained" type="submit" sx={{ m: 1 }}>
                        إرسال
                      </Button>
                    </form>
                    <br />
                    {/* <Divider>او</Divider>
                    <Container
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        marginTop: "10px",
                      }}>
                      <Typography variant="h6">
                        تواصل مباشرة عن طريق الايميل او الواتساب{" "}
                      </Typography>
                    </Container>
                    <Container
                      sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <IconButton
                        color="inherit"
                        component="a"
                        href="mailto:maqaresafarah@gmail.com"
                        target="_blank">
                        <EmailOutlined
                          sx={{
                            fontSize: "30px",
                            borderRadius: "10px",
                          }}
                          htmlColor="#c4302b"
                        />
                      </IconButton>
                      <IconButton
                        color="inherit"
                        component="a"
                        href="https://api.whatsapp.com/send?phone=249912153727"
                        target="_blank">
                        <WhatsApp
                          sx={{
                            fontSize: "30px",
                            borderRadius: "10px",
                          }}
                          htmlColor="#128c7e"
                        />
                      </IconButton>
                    </Container> */}
                  </Paper>
                </motion.div>
              </Box>
            {/* </Grid> */}
          </Container>
        {/* </Box> */}
      </Box>  )
}

