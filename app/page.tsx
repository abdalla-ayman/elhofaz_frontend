"use client";
import { Box, Container, Typography, Grid, Button } from "@mui/material";

import HomeCard from "@/app/components/card";
//icons
import Book from "@mui/icons-material/Book";
import Setting from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Attribution";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";

export default function Home() {
  return (
    <div className="">
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.54) 50%, rgba(0, 0, 0, 0.54) 50%),url(/bg1.jpeg)",
          backgroundAttachment: "fixed",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center -140px",
        }}>
        <Container>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "bold",
              paddingTop: "40vh",
              textAlign: "center",
            }}>
            مرحبا بكم في منصة مقارئ السفرة
          </Typography>

          <Typography variant="h6" sx={{ color: "white", textAlign: "center" }}>
            لتعليم القران الكريم و علومه
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginRight: "1rem" }}>
              ابدأ الان
            </Button>
          </Box>
        </Container>
      </Box>
      {/* Card Section */}

      <Container
        sx={{
          marginTop: "100px",
          marginBottom: "100px",
        }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", marginBottom: "30px" }}>
          مراحل البرنامج
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={3} sm={4} xs={12}>
            <HomeCard
              title={"مرحلة الضبط"}
              text={"يتم فيها حفظ وضبط المصحف لاول مرة"}
              Icon={Setting}
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <HomeCard
              title={"مرحلة التعهد"}
              text={"مرحلة تعهد الكتاب الكريم بعد اتمام الحفظ . بالمراجعة"}
              Icon={CheckCircleIcon}
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <HomeCard
              title={"مرحلة الاسناد "}
              text={"مرحلة التعرف على الاسنادات المختلفة للمصحف الشريف"}
              Icon={InfoIcon}
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <HomeCard
              title={"مرحلة القراءات "}
              text={"مرحلة تعلم القراءات المختلفة للمصحف الشريف"}
              Icon={Book}
            />
          </Grid>
        </Grid>
      </Container>

      {/* 
      <Box
        sx={{
          marginTop: "120px",
          height: "470px",
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.54) 50%, rgba(0, 0, 0, 0.54) 50%), url(/bg.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center -140px",
          position: "relative",
          marginBottom: "150px",
        }}></Box> */}
    </div>
  );
}
