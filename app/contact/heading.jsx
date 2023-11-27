import React from "react";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

export default function Heading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "550px",
        backgroundColor: "#A5823D",
      }}>
      <Typography align="center" sx={{ color: "white" }} variant="h4">
        تواصل معنا <ContactSupportIcon fontSize="large" />
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",

          width: "100%",
          mt: 2,
        }}>
        <Button
          // align="center"
          sx={{
            my: 4,
            mx: 1,
          }}
          variant="contained">
          {" "}
          <a href="#socialmedia"> وسائل التواصل الإجتماعي</a>
        </Button>
        <Button
          // align="center"
          sx={{
            my: 4,
            mx: 1,
          }}
          variant="contained">
          <a href="#FAQ">الأسئلة الأكثر شيوعا</a>
        </Button>
        <Button
          // align="center"
          sx={{
            my: 4,
            mx: 1,
          }}
          variant="contained">
          <a href="#message">الشكاوي \ المقترحات \ الإستفسارات</a>
        </Button>
      </Box>
    </Box>
  );
}
