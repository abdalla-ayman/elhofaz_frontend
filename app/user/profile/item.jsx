import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

export default function Item({ label, value }) {
  return (
    <>
      <Divider sx={{ mb: 2}}>
        <Chip label={label} />
      </Divider>
      {/* <Typography
        sx={{
          mt: 2,
        }}
      >
        {label}:
      </Typography> */}
      <Typography
        sx={{
          fontStyle: "italic",
          mb: 2,
        }}
        align="center"
      >
        {value}
      </Typography>
      {/* <Divider component="hr" /> */}
    </>
  );
}
