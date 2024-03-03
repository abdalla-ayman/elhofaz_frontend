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


import { motion } from "framer-motion";
import { support } from '@/lib/events';


export default function CharitableFund({ data, setError, setLoading, setSuccess }) {
  // let [name, setName] = useState("");
  //   let [phone, setPhone] = useState("");
  //   let [email, setEmail] = useState("");

    let [amount, setAmount] = useState("")
  
    // let [hideIdentity, setHideIdentity] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      let body = {amount}

      let res = await support(body);

      if (res.code == 200) {
        setSuccess("تم إرسال الرسالة بنجاح");
        setAmount("");
        
      } else {
        setError(res.message);
      }
      setLoading(false);
    };
    
    

  return (
<Box
        id="CF"
        sx={{
          minHeight: "100vh",
          py: 4,
          px:1,
          backgroundColor: "#bb9457",
        }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            mt: 6,
            marginBottom: 3,
            color: "white",
          }}>
            صندوق الدعم الخيري
        </Typography>
        <Typography
           color={'black'} mt={3} mb={3}
           variant="body4" paragraph>
            يختص صندوق الدعم الخيري جمع تبرعات بغرض دعم الحوجات المختلفة (زواج , وفاة , عملية جراحية , بئر , كسوة ...الخ).
            </Typography>
            <Typography
           color={'black'} mt={3} mb={3}
           variant="body4" paragraph> على من يرغب بأن يساعد البرنامج في دعم الحوجات تحويل المبلغ المراد المساهمة به في اي من الحسابات ادناه. ومن ثم ارسال الاشعار الى رقم الواتساب الموجود اسفل القائمة (اضغط على الرقم ليتم تحويلك الى الواتساب مباشرة).
        </Typography>
        <Container>
        <Box pb={8} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'

              }}>
        <Paper
          elevation={3}
          sx={{
            // backgroundColor: "rgba(255, 255, 255, 0.9)",
            border:'1px solid white',
            backgroundColor:'#432818',
            color:'white',
            py: 2,
            width: "100%",
          }}>
            <Typography variant="h6"  className="text-2xl mb-4 text-center" my={2} fontSize={18}>حساب بنك الخرطوم</Typography>

          <Container sx={{display:'flex',
            justifyContent:'left',}}>
            <Typography flexGrow={1} textAlign={'left'} sx={{
            
            mt: 1,
            mx:2,
            marginBottom: 1,
            
            }}>رقم الحساب  </Typography>
            <Typography flexGrow={1} textAlign={'left'} sx={{                
            mt: 1,
            marginBottom: 1,
            
            fontStyle:'bold'
          }}> 2430539 </Typography></Container>


          <Container sx={{display:'flex',
            justifyContent:'left',}}>
          <Typography flexGrow={1} textAlign={'left'} sx={{
            
            mt: 1,
            mx:2,
            marginBottom: 1,
            
          }}>اسم الحساب  </Typography>
                    <Typography textAlign={'left'} flexGrow={1} sx={{
                      
                      mt: 1,
                      marginBottom: 1,
                      
          }}>عيسى محمد الحسن</Typography></Container>

          <Typography className="text-2xl mb-4 text-center" my={2} variant="h6" fontSize={18} >حساب IBAN</Typography>

          <Container sx={{display:'flex',
            justifyContent:'left',}}>
          <Typography flex={1} textAlign={'left'} sx={{
            
            mt: 1,
            mx:2,
            marginBottom: 1,
            
          }}>رقم الحساب  </Typography>
                    <Typography flex={2} textAlign={'right'} sx={{
                      
                      mt: 1,
                      marginBottom: 1,
                      
                      fontSize:12
          }}> TR00 0000 0000 0000 0000 0000 00 </Typography></Container>

          <Container sx={{display:'flex',
            justifyContent:'left',}}>
          <Typography flexGrow={1} textAlign={'left'} sx={{
            
            mt: 1,
            mx:2,
            marginBottom: 1,
            
          }}>اسم الحساب  </Typography>
                    <Typography textAlign={'left'} flexGrow={1} sx={{
                      
                      mt: 1,
                      marginBottom: 1,
                      
          }}>عيسى محمد الحسن</Typography></Container>

          <Divider sx={{backgroundColor:'white'}}></Divider><br></br>
          <Container sx={{display:'flex',
                      justifyContent:'left',}}>
          <Typography  textAlign={'center'}  flexGrow={1}> رقم الواتساب</Typography>

                    <Typography  textAlign={'center'} flexGrow={1} sx={{
                      
                      
                      backgroundColor:'white',
                      color:'#432818',
                      border:'2px solid white',
                      borderRadius:'5px',
                      
                      ":hover":{
                        backgroundColor:'#432818',
                        color:'white'
                      }
          }}><a href="https://wa.me/+249112217441?text=" target='_blank' style={{}}>249112217441+</a></Typography></Container>
          </Paper></Box></Container>
  
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
                    
          {/* +249112217441 */}
                    <TextField
                            id="outlined-basic"
                            onChange={(e) => setAmount(e.target.value)}
                            value={amount}
                            label="مقدار الدعم المرسل"
                            variant="outlined"
                            type="text"
                            helperText="المقدار يكتب بصورة ارقام فقط"
                            sx={{
                              my: 2,
                            }}
                             required 
                          />

                    <FormControlLabel  control={<Checkbox />} label="أوافق على ان يقوم برنامج مقارئ السفرة بتوجيه الدعم الى الحوجات الموجودة" required/>
        
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

