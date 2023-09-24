import React from "react";
import  Typography  from "@mui/material/Typography";
export default function Item({ label, value }) {
  return <>
     <Typography>{label}:</Typography>
          <Typography
            sx={{
              fontStyle: "italic",
            }}
            align="center"
          >
            {value}
          </Typography>
  </>;
}
