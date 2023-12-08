"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import Form from "./Form";
import MainPage from "./Main";
//componentes

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Loading from "@/app/components/Loading";
import Alert from "@/app/components/Alert";

export default function Profile() {
  let { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [loadingmsg, setLoadingmsg] = useState(
    "جاري تحميل معلومات الملف الشخصي"
  );

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
      <Typography variant="h5" sx={{ mt: 5, textAlign: "center" }}>
        التقارير
      </Typography>

      <MainPage />
      <br />
      <br />
      <br />
      <br />

      <Form />

      {error && <Alert severity="error" message={error} />}
      {success && <Alert message={success} severity="success" />}
      <Loading loading={loading} text={loadingmsg} />
    </Container>
  );
}
