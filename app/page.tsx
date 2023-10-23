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
} from "@mui/material";
import Link from "next/link";
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
        }}
      >
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
            لتعليم القران الكريم و علومه
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
              إبدأ الان
            </Button>
          </Box>
        </Container>
      </Box>
      {/* Card Section */}

      <Container
        sx={{
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "30px" }}
        >
          مراحل البرنامج
        </Typography>

        <Grid className="grid" container spacing={3}>
          <Grid item md={3} sm={4} xs={6}>
            <HomeCard
              title={"مرحلة الضبط"}
              text={"و هي أساس الحفظ و الاتقان"}
              Icon={Setting}
            />
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <HomeCard
              title={"مرحلة التعاهد"}
              text={"يختم الطالب فيها القرآن كل أسبوع"}
              Icon={CheckCircleIcon}
            />
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <HomeCard
              title={"مرحلة الإسناد "}
              text={"للقراءة بسند متصل الى النبي صلى الله عليه و سلم"}
              Icon={InfoIcon}
            />
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <HomeCard
              title={"مرحلة القراءات "}
              text={"لمن يرغب بمواصلة جمع القراءات السبع"}
              Icon={Book}
            />
          </Grid>
        </Grid>
      </Container>

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
