import { useState, useEffect, forwardRef } from "react";

//components

import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Loading({ loading, text }) {
  return (
    <Dialog
      open={loading}
      TransitionComponent={Transition}
      keepMounted
      // onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        zIndex: 1000,
      }}
    >
      <DialogContentText
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 300,
          height: 100,
          p: 2,
        }}
      >
        <Typography component={"span"} align="center" variant="body2">
          {text}
        </Typography>
        <CircularProgress color="inherit" sx={{ mx: 1 }} size={25} />
      </DialogContentText>
    </Dialog>
  );
}
