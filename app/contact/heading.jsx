import React from "react";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Heading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        width: "100%",
        height: "100vh",
      }}
    >
      <Typography align="center" variant="h4">
        تواصل معنا
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",

          width: "100%",
          mt: 2,
        }}
      >
        <Button
          // align="center"
          sx={{
            my: 4,
            mx: 1,
          }}
          variant="contained"
        >
          {" "}
          <a href="#social-media"> وسائل التواصل الإجتماعي</a>
        </Button>
        <Button
          // align="center"
          sx={{
            my: 4,
            mx: 1,
          }}
          variant="contained"
        >
          <a href="#FAQ">الأسئلة الأكثر شيوعا</a>
        </Button>
        <Button
          // align="center"
          sx={{
            my: 4,
            mx: 1,
          }}
          variant="contained"
        >
          <a href="#message">الشكاوي \ المقترحات \ الإستفسارات</a>
        </Button>
      </Box>
    </Box>
  );
}
