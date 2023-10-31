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
import Sections from '@/app/components/Sections'
import { StackedLineChart, Timeline } from "@mui/icons-material";

export default function Home() {
  return (
    <div className="">
      <Box
        sx={{
        //   backgroundImage:
        //     "linear-gradient(90deg, rgba(0, 0, 0, 0.54) 50%, rgba(0, 0, 0, 0.54) 50%),url(/bg1.jpeg)",
        //   backgroundAttachment: "fixed",
          height: "100vh"
        //   backgroundSize: "cover",
        //   backgroundPosition: "center -140px",
        }}
      >
        <BackgroundImage alt={"bg"} src={"/bg1.jpeg"} position={"absolute"} />
        <Container>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "bold",
              paddingTop: "40vh",
              textAlign: "center",
            }}
          >
            مرحبا بكم في منصة مقارئ السفرة
          </Typography>

          <Typography variant="h6" sx={{ color: "white", textAlign: "center" }}>
            لتعليم القرآن الكريم و علومه
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ marginRight: "1rem" }}
            >
              إبدأ الأن
            </Button>
          </Box>
        </Container>
      </Box>

      <Sections />
      {/* Card Section */}

      <Box sx={{ backgroundColor: '#EFF1F1' }}>
      <Container
        sx={{
          paddingBottom: "100px",
          paddingTop: "20px",
          // backgroundColor: "#EFF1F1",
        }}
      >
              <Box display="flex" alignItems="center" justifyContent="center" marginBottom= "30px"
      >
        <Timeline color="primary" fontSize="large" sx={{}} />
        <Typography
         
          variant="h4"
          sx={{ textAlign: "center",  marginLeft: 1 }}
        >
          
          مراحل البرنامج
        </Typography>
        </Box>
        <Paper>
        <Container sx={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid #e0e0e0'
              }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
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
        </Paper>
      </Container>
      </Box>

      {/* <Box
        sx={{
          marginTop: "120px",
          height: "470px",
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.54) 50%, rgba(0, 0, 0, 0.54) 50%), url(/bg2.jpeg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center -140px",
          position: "relative",
          marginBottom: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <List>
          <ListItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              margin: "10px",
            }}>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              margin: "10px",
            }}>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              margin: "10px",
            }}>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Item 3" />
          </ListItem>
          <ListItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              margin: "10px",
            }}>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Item 4" />
          </ListItem>
        </List>
      </Box> */}
    </div>
  );
}
