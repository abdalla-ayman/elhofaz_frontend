"use client";
import * as React from "react";
import DataTable from "@/app/components/Table";
import { Container, Button } from "@mui/material";

//mustafa changes goes here
import AddReportsMenus from "@/app/components/ui/AddReportOptions";
import FilterReportsMenu from "@/app/components/ui/FilterReportOptions";

const columns = [
  { field: "id", headerName: "الرقم" },
  { field: "date", headerName: "التاريخ" },
  { field: "day", headerName: "اليوم" },
  { field: "type", headerName: "النوع " },
  { field: "details", headerName: "التفاصيل" },
];

const rows = [
  {
    id: 1,
    date: "09-12-2023",
    day: "الاحد",
    type: "عرض",
    details: "اضغط هنا",
  },
  {
    id: 2,
    date: "09-12-2023",
    day: "الاحد",
    type: "يومي",
    details: "اضغط هنا",
  },
  {
    id: 3,
    date: "09-12-2023",
    day: "الاحد",
    type: "تكرار",
    details: "اضغط هنا",
  },
  {
    id: 4,
    date: "09-12-2023",
    day: "الاحد",
    type: "يومي تأهيلي",
    details: "اضغط هنا",
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
        <div style={{ marginLeft: "10px" }}>
          <FilterReportsMenu />
        </div>
        <AddReportsMenus />
      </Container>

      <DataTable columns={columns} rows={rows}></DataTable>
    </Container>
  );
}
