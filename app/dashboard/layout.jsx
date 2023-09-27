"use client";
import { useState, useEffect } from "react";

//componentes
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";

export default function layout({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        minHeight: "100vh",
        py: 5,
        paddingTop: 12,
      }}
    >
      <Typography variant="h4" sx={{ mt: 5 }}>
        لوحة التحكم
      </Typography>
      <Box
        sx={{
          paddingTop: 12,
          px: 10,
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
