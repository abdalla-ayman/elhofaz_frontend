import { Container } from "@mui/material";
import MainPage from "./Main";
import Forms from "./Form";

const Reports = () => {
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
      <MainPage />
      <br />
      <br />
      <br />
      <Forms />
    </Container>
  );
};

export default Reports;
