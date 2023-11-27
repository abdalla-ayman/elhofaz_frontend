import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  Star,
  AddTask,
  AlarmOn,
  AutoMode,
  AddAlarm,
  AutoAwesome,
} from "@mui/icons-material";
import { motion } from "framer-motion";

export default function HomeGoals() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.54) 50%, rgba(0, 0, 0, 0.54) 50%),url(/bg5.jpeg)",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginBottom: "170px",
          paddingBottom: "50px",
        }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            paddingTop: 8,
          }}>
          <Typography variant="h4" fontSize={30} sx={{ color: "white" }}>
            أهداف البرنامج
          </Typography>
          <Star fontSize="large" color="blue" sx={{ margin: "0 0 10px 0" }} />
        </Container>

        <Grid container sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 400 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              viewport={{ once: true }}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  margin: "20px",
                  height: "140px",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    "& .hoverContainer": {
                      backgroundColor: "white",
                    },
                  },
                  transition: "transform 0.15s ease-in-out",
                }}>
                <CardContent>
                  <Container
                    className="hoverContainer"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      marginBottom: "10px",
                      backgroundColor: "255, 255, 255, 0.6",
                    }}>
                    <AddTask fontSize="large" color="primary" />
                  </Container>
                  <Typography variant="body1" textAlign={"center"}>
                    إعانة الطالب على حفظ القرآن الكريم كاملاً وإتقانه وفق خطط
                    معينة ومدروسة
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -400 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              viewport={{ once: true }}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  margin: "20px",
                  height: "140px",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    "& .hoverContainer": {
                      backgroundColor: "white",
                    },
                  },
                  transition: "transform 0.15s ease-in-out",
                }}>
                <CardContent>
                  <Container
                    className="hoverContainer"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      marginBottom: "10px",
                    }}>
                    <AlarmOn fontSize="large" color="primary" />
                  </Container>
                  <Typography variant="body2" textAlign={"center"}>
                    استثمار أوقات المشتركين واستغلال أوقات الفراغ (فإذا فرغت
                    فانصب)
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 400 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true }}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  margin: "20px",
                  height: "140px",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    "& .hoverContainer": {
                      backgroundColor: "white",
                    },
                  },
                  transition: "transform 0.15s ease-in-out",
                }}>
                <CardContent>
                  <Container
                    className="hoverContainer"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      marginBottom: "10px",
                    }}>
                    <AutoAwesome fontSize="large" color="primary" />
                  </Container>
                  <Typography variant="body2" textAlign={"center"}>
                    تنوير المجتمع بدور المقاريء في التعليم عن بعد ومدى نجاحه
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -400 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true }}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  margin: "20px",
                  height: "140px",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    "& .hoverContainer": {
                      backgroundColor: "white",
                    },
                  },
                  transition: "transform 0.15s ease-in-out",
                }}>
                <CardContent>
                  <Container
                    className="hoverContainer"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      marginBottom: "10px",
                    }}>
                    <AddAlarm fontSize="large" color="primary" />
                  </Container>
                  <Typography variant="body2" textAlign={"center"}>
                    توفير الوقت والجهد والمال من خلال التواصل عبر المنصة
                    الإلكترونية الموحدة او المجموعات الخاصة (واتساب)
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={12}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  margin: "20px",
                  height: "140px",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    "& .hoverContainer": {
                      backgroundColor: "white",
                    },
                  },
                  transition: "transform 0.15s ease-in-out",
                }}>
                <CardContent>
                  <Container
                    className="hoverContainer"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      marginBottom: "10px",
                    }}>
                    <AutoMode fontSize="large" color="primary" />
                  </Container>
                  <Typography variant="body2" textAlign={"center"}>
                    مواكبة العلم وتغيير نظام التدريس التقليدي إلى نظام متطور
                    يعتمد على التقنية الحديثة وربطه بها
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
