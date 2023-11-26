import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Adjust, Star } from "@mui/icons-material";

export default function HomeGoals() {
  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.54) 50%, rgba(0, 0, 0, 0.54) 50%),url(/bg5.jpeg)",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginBottom: "170px",
        }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            paddingTop: 8,
          }}>
          <Typography
            variant="h4"
            fontSize={30}
            sx={{ marginRight: 1, color: "white" }}>
            أهداف البرنامج
          </Typography>
          <Star fontSize="large" color="blue" sx={{ margin: "0 0 10px 0" }} />
        </Container>

        <Grid container sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                margin: "20px",
                height: "120px",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)", // This is just an example, you can add any CSS property here
                },
                transition: "transform 0.15s ease-in-out",
              }}>
              <CardContent>
                <Typography variant="body2">Your content here</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                margin: "20px",
                height: "120px",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)", // This is just an example, you can add any CSS property here
                },
                transition: "transform 0.15s ease-in-out",
              }}>
              <CardContent>
                <Typography variant="body2">Your content here</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                margin: "20px",
                height: "120px",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)", // This is just an example, you can add any CSS property here
                },
                transition: "transform 0.15s ease-in-out",
              }}>
              <CardContent>
                <Typography variant="body2">Your content here</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                margin: "20px",
                height: "120px",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)", // This is just an example, you can add any CSS property here
                },
                transition: "transform 0.15s ease-in-out",
              }}>
              <CardContent>
                <Typography variant="body2">Your content here</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                margin: "20px",
                height: "120px",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)", // This is just an example, you can add any CSS property here
                },
                transition: "transform 0.15s ease-in-out",
              }}>
              <CardContent>
                <Typography variant="body2" textAlign={"center"}>
                  Your content here
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
