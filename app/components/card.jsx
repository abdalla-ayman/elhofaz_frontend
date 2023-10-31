import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function HomeCard({ title, text, Icon }) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: 200,
        width: 200,
        p: 2,
        m: 2,
        backgroundColor:"#DFE2E2",
        cursor: 'pointer',
        "&:hover": {
          backgroundColor: '#9a9c9c'
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          sx={{
            mb: 1,
          }}
        />
        <Typography align="center" variant="h6" className="title">
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{
          my: 2,
        }}
        align="center"
        variant="body1"
        className="text"
      >
        {text}
      </Typography>
    </Card>
  );
}
