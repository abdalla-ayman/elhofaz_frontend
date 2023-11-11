"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Loading from "@/app/components/Loading";
import Alert from "@/app/components/Alert";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";

import Heading from "./heading";
import SocialMedia from "./socialMedia";
import FAQ from "./FAQ";
import Form from "./Form";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  let { data: session } = useSession();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: 5,
        backgroundColor: "#cba346",
        color: "white",
      }}
    >
      <Heading />
      <SocialMedia />
      <FAQ />
      <Form  loading={loading} serError={setError} setSuccess={setSuccess}/>

      {error && <Alert severity="error" message={error} />}
      {success && <Alert message={success} severity="success" />}
      <Loading loading={loading} text={"جاري التحميل"} />
    </Box>
  );
}
