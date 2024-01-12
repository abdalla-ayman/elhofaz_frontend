"use client";
import * as React from "react";
import DataTable from "@/app/components/Table";
import { Container, Button } from "@mui/material";

const columns = [
  { field: "id", headerName: "الرقم", width: 70 },
  { field: "date", headerName: "التاريخ", width: 100 },
  { field: "jozzu", headerName: "الجزء ", width: 100 },
  { field: "sorra", headerName: "السورة", width: 100 },
  { field: "alhefth", type: "number", headerName: "مقدار الحفظ", width: 100 },
  { field: "new", type: "number", headerName: "الحفظ الجديد", width: 100 },
  {
    field: "current",
    headerName: "الحفظ الحالي",
    width: 100,
  },
  {
    field: "previous",
    type: "number",
    headerName: "الحفظ السابق",
    width: 100,
  },
  {
    field: "old",
    type: "number",
    headerName: "الحفظ القديم",
    width: 100,
  },
  {
    field: "teacher",
    headerName: "اسم الشيخ",
    width: 100,
  },
];

const rows = [
  {
    id: 1,
    date: "09-12-2023",
    jozzu: "الاول",
    sorra: "البقرة",
    alhefth: 4,
    new: 4,
    current: [1, 8],
    previous: 1,
    old: 1,
    teacher: "شيخ مازن",
  },
  {
    id: 1,
    date: "09-12-2023",
    jozzu: "الاول",
    sorra: "البقرة",
    alhefth: 4,
    new: 4,
    current: [1, 8],
    previous: 1,
    old: 1,
    teacher: "شيخ مازن",
  },
  {
    id: 1,
    date: "09-12-2023",
    jozzu: "الاول",
    sorra: "البقرة",
    alhefth: 4,
    new: 4,
    current: [1, 8],
    previous: 1,
    old: 1,
    teacher: "شيخ مازن",
  },
  {
    id: 1,
    date: "09-12-2023",
    jozzu: "الاول",
    sorra: "البقرة",
    alhefth: 4,
    new: 4,
    current: [1, 8],
    previous: 1,
    old: 1,
    teacher: "شيخ مازن",
  },
  {
    id: 1,
    date: "09-12-2023",
    jozzu: "الاول",
    sorra: "البقرة",
    alhefth: 4,
    new: 4,
    current: [1, 8],
    previous: 1,
    old: 1,
    teacher: "شيخ مازن",
  },
  {
    id: 1,
    date: "09-12-2023",
    jozzu: "الاول",
    sorra: "البقرة",
    alhefth: 4,
    new: 4,
    current: [1, 8],
    previous: 1,
    old: 1,
    teacher: "شيخ مازن",
  },
  {
    id: 1,
    date: "09-12-2023",
    jozzu: "الاول",
    sorra: "البقرة",
    alhefth: 4,
    new: 4,
    current: [1, 8],
    previous: 1,
    old: 1,
    teacher: "شيخ مازن",
  },
  {
    id: 1,
    date: "09-12-2023",
    jozzu: "الاول",
    sorra: "البقرة",
    alhefth: 4,
    new: 4,
    current: [1, 8],
    previous: 1,
    old: 1,
    teacher: "شيخ مازن",
  },

  {
    id: 1,
    date: "09-12-2023",
    jozzu: "الاول",
    sorra: "البقرة",
    alhefth: 4,
    new: 4,
    current: [1, 8],
    previous: 1,
    old: 1,
    teacher: "شيخ مازن",
  },
];

export default function ReportDetails() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        minHeight: "100vh",
        py: 5,
        paddingTop: 12,
      }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}>
        <Button
          sx={{
            mx: 1,
          }}
          color="info"
          size="small"
          variant="contained"
          // onClick={() => handleClickOpen("report")}
        >
          ارسال تقرير
        </Button>
      </Container>

      <DataTable columns={columns} rows={rows}></DataTable>
    </Container>
  );
}
