import React, { useState } from "react";

import ArdForm from "./forms/Ard";
import DailyForm from "./forms/Daily";
import BeginnerDailyForm from "./forms/Daily_Beginner";
import RepeatsForm from "./forms/Repeats";
import AbsenceForm from "./forms/Absence";
import ChangeNew from "./forms/ChangeNew";

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

function SelectType({ report, setType }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {report && (
        <>
          {" "}
          <Button
            sx={{
              m: 1,
            }}
            size="small"
            variant="outlined"
            color="info"
            onClick={() => setType("daily")}
          >
            التقرير اليومي
          </Button>
          <Button
            sx={{
              m: 1,
            }}
            size="small"
            variant="outlined"
            color="info"
            onClick={() => setType("daily_begginer")}
          >
            التقرير اليومي التأهيلي
          </Button>
          <Button
            sx={{
              m: 1,
            }}
            size="small"
            variant="outlined"
            color="info"
            onClick={() => setType("repeats")}
          >
            تقرير التكرار
          </Button>
          <Button
            sx={{
              m: 1,
            }}
            size="small"
            variant="outlined"
            color="info"
            onClick={() => setType("extensive")}
          >
            تقرير التكرار المكثف
          </Button>
          <Button
            sx={{
              m: 1,
            }}
            size="small"
            variant="outlined"
            color="info"
            onClick={() => setType("ard")}
          >
            تقرير العرض
          </Button>
          <Button
            sx={{
              m: 1,
            }}
            size="small"
            variant="outlined"
            color="info"
            onClick={() => setType("levely")}
          >
            تقرير العرض المرحلي
          </Button>
        </>
      )}
      {!report && (
        <>
          <Button
            sx={{
              m: 1,
            }}
            size="small"
            variant="outlined"
            color="info"
            onClick={() => setType("absence")}
          >
            طلب غياب
          </Button>
          <Button
            sx={{
              m: 1,
            }}
            size="small"
            variant="outlined"
            color="info"
            onClick={() => setType("diluted")}
          >
            طلب البرنامج المخفف
          </Button>
        </>
      )}
    </Box>
  );
}

export default function Form() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  let types = {
    report: [
      "اختر نوع التقرير",
      <SelectType report={true} setType={setType} />,
    ],
    request: [
      "اختر نوع الطلب",
      <SelectType report={false} setType={setType} />,
    ],
    change: ["تغيير مقدار الحفظ", <ChangeNew />],
    daily: ["التقرير اليومي", <DailyForm />],
    daily_begginer: ["التقرير اليومي", <BeginnerDailyForm />],
    repeats: ["تقرير التكرار", <RepeatsForm />],
    extensive: ["التكرار المكثف", <RepeatsForm extensive={true} />],
    ard: ["تقرير العرض", <ArdForm />],
    levely: ["تقرير العرض المرحلي", <ArdForm levely={true} />],
    absence: ["طلب غياب", <AbsenceForm />],
    diluted: ["طلب البرنامج المخفف", <AbsenceForm />],
  };

  const handleClickOpen = (type) => {
    setType(type);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setType("");
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
          onClick={() => handleClickOpen("report")}
        >
          ارسال تقرير
        </Button>
        <Button
          color="error"
          size="small"
          variant="contained"
          onClick={() => handleClickOpen("request")}
        >
          ارسال طلب غياب/تخفيف البرنامج
        </Button>
        <Button
          sx={{
            mx: 1,
          }}
          color="success"
          size="small"
          variant="contained"
          onClick={() => handleClickOpen("change")}
        >
          ارسال طلب تغيير مقدار الحفظ
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
          {type ? types[type][0] : "اختر احد الخيارات"}
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
          {/* <DailyForm /> */}
          {/* <AbsenceForm /> */}
          {/* <BeginnerDailyForm /> */}

          {type && types[type][1]}

          {/* {<ArdForm />} */}
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
