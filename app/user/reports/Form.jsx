"use client";
import React, { useState } from "react";

import ArdForm from "@/app/components/ui/forms/Ard";
import DailyForm from "@/app/components/ui/forms/Daily";
import BeginnerDailyForm from "@/app/components/ui/forms/Daily_Beginner";
import RepeatsForm from "@/app/components/ui/forms/Repeats";
import AbsenceForm from "@/app/components/ui/forms/Absence";
import ChangeNew from "@/app/components/ui/forms/ChangeNew";

//mustafa changes goes here
import AddReportsMenus from "@/app/components/ui/AddReportOptions";
import FilterReportsMenu from "@/app/components/ui/FilterReportOptions";
import ReportsTables from "@/app/components/ui/ReportsTableOptions";

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
      }}>
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
            onClick={() => setType("daily")}>
            التقرير اليومي
          </Button>
          <Button
            sx={{
              m: 1,
            }}
            size="small"
            variant="outlined"
            color="info"
            onClick={() => setType("daily_begginer")}>
            التقرير اليومي التأهيلي
          </Button>
          <Button
            sx={{
              m: 1,
            }}
            size="small"
            variant="outlined"
            color="info"
            onClick={() => setType("repeats")}>
            تقرير التكرار
          </Button>
          <Button
            sx={{
              m: 1,
            }}
            size="small"
            variant="outlined"
            color="info"
            onClick={() => setType("extensive")}>
            تقرير التكرار المكثف
          </Button>
          <Button
            sx={{
              m: 1,
            }}
            size="small"
            variant="outlined"
            color="info"
            onClick={() => setType("ard")}>
            تقرير العرض
          </Button>
          <Button
            sx={{
              m: 1,
            }}
            size="small"
            variant="outlined"
            color="info"
            onClick={() => setType("levely")}>
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
            onClick={() => setType("absence")}>
            طلب غياب
          </Button>
          <Button
            sx={{
              m: 1,
            }}
            size="small"
            variant="outlined"
            color="info"
            onClick={() => setType("diluted")}>
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
      <SelectType key={1} report={true} setType={setType} />,
    ],
    request: [
      "اختر نوع الطلب",
      <SelectType key={2} report={false} setType={setType} />,
    ],
    change: ["تغيير مقدار الحفظ", <ChangeNew key={3} />],
    daily: ["التقرير اليومي", <DailyForm key={4} />],
    daily_begginer: ["التقرير اليومي", <BeginnerDailyForm key={5} />],
    repeats: ["تقرير التكرار", <RepeatsForm key={6} />],
    extensive: ["التكرار المكثف", <RepeatsForm key={7} extensive={true} />],
    ard: ["تقرير العرض", <ArdForm key={8} />],
    levely: ["تقرير العرض المرحلي", <ArdForm key={9} levely={true} />],
    absence: ["طلب غياب", <AbsenceForm key={10} />],
    diluted: ["طلب البرنامج المخفف", <AbsenceForm key={11} />],
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
          onClick={() => handleClickOpen("report")}>
          ارسال تقرير
        </Button>
        <Button
          color="error"
          size="small"
          variant="contained"
          onClick={() => handleClickOpen("request")}>
          ارسال طلب غياب/تخفيف البرنامج
        </Button>
        <Button
          sx={{
            mx: 1,
          }}
          color="success"
          size="small"
          variant="contained"
          onClick={() => handleClickOpen("change")}>
          ارسال طلب تغيير مقدار الحفظ
        </Button>
      </Box>
      <br />
      <AddReportsMenus />
      <br />
      <FilterReportsMenu />
      <br />
      <ReportsTables />

      <Dialog
        fullWidth
        maxWidth="xs"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          overflow: "visible",
        }}>
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          align="center"
          id="customized-dialog-title">
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
          }}>
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
            variant="contained">
            إرسال
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
