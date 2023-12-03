import React from "react";

import ArdForm from "./forms/Ard";
import DailyForm from "./forms/Daily";
import BeginnerDailyForm from "./forms/Daily_Beginner";
import RepeatsForm from "./forms/Repeats";
import AbsenceForm from "./forms/Absence";

//componets
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Form() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box>
        <Button
          sx={{
            mx: 1,
          }}
          color="info"
          size="small"
          variant="contained"
          onClick={handleClickOpen}
        >
          ارسال تقرير
        </Button>
        <Button
          sx={{
            mx: 1,
          }}
          color="error"
          size="small"
          variant="contained"
          onClick={handleClickOpen}
        >
          ارسال طلب غياب
        </Button>
      </Box>
      <Dialog
        fullWidth
        maxWidth="xs"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          overflow: "visible",
        }}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          align="center"
          id="customized-dialog-title"
        >
          نوع التقرير
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {/* <RepeatsForm extensive={false} /> */}
          <DailyForm />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              mx: "auto",
            }}
            autoFocus
            onClick={handleClose}
            variant="contained"
          >
            إرسال
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
