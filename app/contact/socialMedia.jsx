import React from 'react'
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function SocialMedia() {
  return (
    <Box
        sx={{
          backgroundColor: "#D6B76F",
          height: "90vh",
        }}
      >
        <Typography> مواقع التواصل الإجتماعي</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",

            width: "100%",
          }}
        >
          
        </Box>
      </Box>
  )
}
