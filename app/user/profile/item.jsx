import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Item({ label, value }) {
  return (
    <>
      <Typography
        sx={{
          mt: 2,
        }}
      >
        {label}:
      </Typography>
      <Typography
        sx={{
          fontStyle: "italic",
          mb:2
        }}
        align="center"
      >
        {value}
      </Typography>
      <Divider component="hr" />
    </>
  );
}
