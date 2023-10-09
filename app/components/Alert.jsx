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

export default function AlertDialogSlide({ severity, message }) {
  const [open, setOpen] = React.useState(true);


  const handleClose = () => {
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
        fullWidth
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Alert severity={severity} icon={false}>
              {message}
            </Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{
            mx:"auto"
          }} onClick={handleClose}>حسنا</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
