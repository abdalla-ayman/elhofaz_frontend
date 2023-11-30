"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import Loading from "@/app/components/Loading";
import Alert from "@/app/components/Alert";
import Box from "@mui/material/Box";

import Heading from "./heading";

export default function Contact() {
  const [faq, setFAQ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  let { data: session } = useSession();

  useEffect(() => {
    (async function () {
      let res = await getFAQ();
      setFAQ(res.data);
    })();
  }, []);

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
      {error && (
        <Alert severity="error" close={() => setError("")} message={error} />
      )}
      {success && (
        <Alert
          message={success}
          severity="success"
          close={() => setSuccess("")}
        />
      )}
      <Loading loading={loading} text={"جاري التحميل"} />
    </Box>
  );
}
