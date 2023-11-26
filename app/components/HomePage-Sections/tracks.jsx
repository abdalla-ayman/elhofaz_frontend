import { Box, Typography, Grid, Container } from "@mui/material";
import { AssignmentInd } from "@mui/icons-material";
export default function HomeTracks() {
  return (
    <div style={{ marginBottom: 80 }}>
      <Box
        mb={"30px"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}>
        <AssignmentInd
          fontSize="large"
          color="primary"
          sx={{ margin: "0 0 10px 0" }}
        />

        <Typography variant="h4" marginLeft={2} fontSize={30}>
          مسارات البرنامج
        </Typography>
      </Box>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Container
            sx={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid #e0e0e0",
            }}>
            <Typography
              variant="subtitle1"
              sx={{
                backgroundColor: "#53421f",
                color: "white",
                padding: "8px",
                marginY: "8px",
                fontWeight: "bold",
                fontSize: "18px",
                letterSpacing: "1px",
              }}>
              المسارالتأهيلي
            </Typography>
          </Container>
        </Grid>

        <Grid item xs={12} md={6}>
          <Container
            sx={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid #e0e0e0",
            }}>
            <Typography
              variant="subtitle1"
              sx={{
                backgroundColor: "#53421f",
                color: "white",
                padding: "8px",
                marginY: "8px",
                fontWeight: "bold",
                fontSize: "18px",
                letterSpacing: "1px",
              }}>
              مسار الحافظ الجديد
            </Typography>
          </Container>
        </Grid>

        <Grid item xs={12} md={6}>
          <Container
            sx={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid #e0e0e0",
            }}>
            <Typography
              variant="subtitle1"
              sx={{
                backgroundColor: "#53421f",
                color: "white",
                padding: "8px",
                marginY: "8px",
                fontWeight: "bold",
                fontSize: "18px",
                letterSpacing: "1px",
              }}>
              مسار الخاتم
            </Typography>
          </Container>
        </Grid>

        <Grid item xs={12} md={6}>
          <Container
            sx={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid #e0e0e0",
            }}>
            <Typography
              variant="subtitle1"
              sx={{
                backgroundColor: "#53421f",
                color: "white",
                padding: "8px",
                marginY: "8px",
                fontWeight: "bold",
                fontSize: "18px",
                letterSpacing: "1px",
              }}>
              {" "}
              مسار الخمسة أجزاء
            </Typography>
          </Container>
        </Grid>

        <Grid item xs={12} md={6}>
          <Container
            sx={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid #e0e0e0",
            }}>
            <Typography
              variant="subtitle1"
              sx={{
                backgroundColor: "#53421f",
                color: "white",
                padding: "8px",
                marginY: "8px",
                fontWeight: "bold",
                fontSize: "18px",
                letterSpacing: "1px",
              }}>
              مسار السور
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
