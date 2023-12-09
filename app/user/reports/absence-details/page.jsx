import { Container, Typography } from "@mui/material";

const AbsenceDetails = () => {
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
        Absence details
      </Typography>
    </Container>
  );
};

export default AbsenceDetails;
