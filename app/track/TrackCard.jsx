import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export default function TrackCard({ title, p1, p2, p3, bg }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        bgcolor: bg,
        m: 2,
        height: 400,
        position: "relative",
        ":hover": {
          "#buttons": {
            display: "initial",
          },
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          // height: "100%",
        }}
      >
        <Typography align="center" sx gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Box
          sx={{
            mt: 4,
          }}
        >
          <Typography variant="body2">{p1}</Typography>
          <Typography variant="body2">{p2}</Typography>
          <Typography variant="body2">{p3} </Typography>
        </Box>
      </CardContent>
      <CardActions
        id="buttons"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: bg,
          zIndex: 10,
          display: "none",
        }}
      >
        <Button
          variant="contained"
          sx={{
            mt: 3,
            mx: "auto",
          }}
          size="large"
        >
          إختيار المسار
        </Button>
      </CardActions>
    </Card>
  );
}
