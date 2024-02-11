import React, {useState} from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel"
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup"
import Radio from "@mui/material/Radio"
import FormGroup from '@mui/material/FormGroup'
import { Divider, Grid, Container, IconButton } from "@mui/material";
import { EmailOutlined, WhatsApp } from "@mui/icons-material";

// import { contact } from "@/lib/contact";
import { motion } from "framer-motion";


export default function CharitableFund() {
  let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");
    let [subject, setSubject] = useState("");
    let [message, setMessage] = useState("");
    let [type, setType] = useState("");
    let [money, setMoney] = useState("")
  
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
            mt: 6,
            marginBottom: 6,
            color: "white",
          }}>
            صندوق الدعم الخيري
        </Typography>
        {/* <Typography
          align="center"
          >
            هو 
        </Typography> */}
  
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
                      <h2 className="text-2xl mb-4 text-center">بيانات الصندوق</h2>
  
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
                    <br />
                    {/* <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">توجيه الدعم الى:</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel value="contests" control={<Radio />} label="المسابقات" />
                        <FormControlLabel value="hafiz" control={<Radio />} label="الحوافز" />
                        <FormControlLabel value="programs" control={<Radio />} label="البرامج(اشتراكات,...)" />
                        <FormControlLabel value="charity projects" control={<Radio />} label="المشاريع الخيرية" />
                        <FormControlLabel value="others" control={<Radio />} label="أخرى" />

                      </RadioGroup>
                    </FormControl> */}
                    <Typography sx={{
            marginBottom: 1,
            color: "black",
          }}>رقم الحساب: 2430539</Typography>
                    <Typography sx={{
            mt: 1,
            marginBottom: 1,
            color: "black",
          }}>اسم الحساب: عيسى محمد الحسن</Typography>
                    <Typography sx={{
            mt: 1,
            marginBottom: 1,
            color: "black",
          }}>رقم الوتساب: +249112217441</Typography>
                    <TextField
                            id="outlined-basic"
                            onChange={(e) => setMoney(e.target.value)}

                            label="مقدار الدعم المرسل"
                            variant="outlined"
                            type="number"
                            helperText="المقدار يكتب بصورة ارقام فقط"
                            sx={{
                              my: 2,
                            }}
                             required 
                          />

                    <FormControlLabel required control={<Checkbox />} label="أوافق على ان يقوم برنامج مقارئ السفرة بتوجيه الدعم الى الحوجات الموجودة" />
        
                    <Button variant="contained" type="submit" sx={{ m: 1 }}>
                        إرسال
                      </Button>
                    </form>
                  </Paper>
                </motion.div>
              </Box>
            {/* </Grid> */}
          </Container>
        {/* </Box> */}
      </Box>  )
}

