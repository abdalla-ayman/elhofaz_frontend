"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import Link from "next/link";
import HomeCard from "@/app/components/card";
//icons
import Book from "@mui/icons-material/Book";
import Setting from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Attribution";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import BackgroundImage from "@/app/components/BackgroundImage";
import Sections from "@/app/components/Sections";
import HomeAbout from "@/app/components/HomePage-Sections/about";
import HomeGoals from "@/app/components/HomePage-Sections/goals";
import HomeTracks from "@/app/components/HomePage-Sections/tracks";
import { StackedLineChart, Timeline } from "@mui/icons-material";

export default function Home() {
  return (
    <div className="">
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.54) 50%, rgba(0, 0, 0, 0.54) 50%),url(/bg0.png)",
          backgroundAttachment: "fixed",
          height: "100vh",
          // backgroundSize: "cover",
          // backgroundPosition: "center -140px",
        }}>
        {/* <BackgroundImage alt={"bg"} src={"/bg0.png"} position={"absolute"} /> */}
        <Container>
          <Typography
            variant="h4"
            fontSize={26}
            sx={{
              color: "white",
              fontWeight: "bold",
              paddingTop: "40vh",
              textAlign: "center",
            }}>
            مرحبا بكم في منصة مقارئ السفرة
          </Typography>

          <Typography variant="h6" sx={{ color: "white", textAlign: "center" }}>
            لتعليم القرآن الكريم و علومه بمنهجية مقارئ الحفاظ
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
              <a href="#about">تصفح الأن</a>
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Card Section */}
      <HomeAbout />
      <HomeGoals />
      <HomeTracks />
      {/* Card Section */}

      <Box sx={{ backgroundColor: "#907235" }}>
        <Container
          sx={{
            paddingBottom: "100px",
            paddingTop: "20px",
          }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginBottom="30px">
            <Timeline color="primary" fontSize="large" sx={{}} />
            <Typography
              variant="h4"
              fontSize={30}
              sx={{ textAlign: "center", marginLeft: 1 }}>
              مراحل البرنامج
            </Typography>
          </Box>

          <Container
            sx={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}>
              <HomeCard
                title={"مرحلة الضبط"}
                text={"و هي أساس الحفظ و الإتقان"}
                Icon={Setting}
              />
              <HomeCard
                title={"مرحلة التعاهد"}
                text={"يختم الطالب فيها القرآن كل أسبوع"}
                Icon={CheckCircleIcon}
              />
              <HomeCard
                title={"مرحلة الإسناد "}
                text={"للقراءة بسند متصل إلى النبي صلى الله عليه و سلم"}
                Icon={InfoIcon}
              />
              <HomeCard
                title={"مرحلة القراءات "}
                text={"لمن يرغب بمواصلة جمع القراءات السبع"}
                Icon={Book}
              />
            </Box>
          </Container>
        </Container>
      </Box>
    </div>
  );
}
