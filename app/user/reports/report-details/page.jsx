import { Container, Typography } from "@mui/material";

const ReportsDetails = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        minHeight: "100vh",
        py: 5,
        paddingTop: 12,
      }}>
      <Typography variant="h5" color={"black"}>
        Reports details
      </Typography>
    </Container>
  );
};

export default ReportsDetails;
