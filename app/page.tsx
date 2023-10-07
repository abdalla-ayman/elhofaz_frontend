"use client";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

export default function Home() {
  return (
    <div className="">
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.54) 50%, rgba(0, 0, 0, 0.54) 50%),url(/bg.jpg)",
          backgroundAttachment: "fixed",
          height: "100vh",
          backgroundSize: "cover",

          backgroundPosition: "center -140px",
        }}>
        <Container>
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: "bold",
              paddingTop: "40vh",
              textAlign: "center",
            }}>
            Welcome to the Home page!
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
              Button 1
            </Button>
          </Box>
        </Container>
      </Box>
      {/* Card Section */}

      <Container
        sx={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Card sx={{ width: "30%" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Card 1
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: "30%" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Card 2
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: "30%" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Card 3
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </CardContent>
        </Card>
      </Container>

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
        }}></Box>
    </div>
  );
}
