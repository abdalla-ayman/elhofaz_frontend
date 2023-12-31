import { Fragment } from "react";

import BackgroundImage from "../components/BackgroundImage";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function layout({ children }) {
  return (
    <Fragment>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
          py: 5,
          paddingTop: 12,
        }}
        maxWidth={"xs"}>
        <Paper
          // variant="outlined"
          elevation={3}
          sx={{
            py: 2,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}>
          {children}
        </Paper>
      </Container>
      <BackgroundImage alt={"login-bg"} src={"/bg.jpg"} position={"fixed"} />
    </Fragment>
  );
}
