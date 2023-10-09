import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ severity, message, close }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    if (close) close();
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle align="center"> مقارئ السفرة </DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="alert-dialog-slide-description">
            <Alert severity={severity} variant="outlined" icon={false}>
              {message}
            </Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{
              mx: "auto",
            }}
            onClick={handleClose}
          >
            حسنا
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
