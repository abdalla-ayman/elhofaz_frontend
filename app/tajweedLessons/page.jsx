"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Lessons from './lessons'

import Loading from "@/app/components/Loading";
import Alert from "@/app/components/Alert";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import TaskIcon from '@mui/icons-material/Task';


export default function Contact() {
  // const [faq, setFAQ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  let { data: session } = useSession();

  
  // useEffect(() => {
  //   (async function () {
  //     let res = await getFAQ();
  //     setFAQ(res.data);
  //   })();
  // }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: 16,
        // backgroundColor: "#cba346",
        backgroundColor: '#907235',
        color: "white",
      }}
    >
    <Typography align="center" sx={{ color: "white" }} variant="h4">دروس التجويد<TaskIcon fontSize="large" />
      </Typography>
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
      <Lessons />
    </Box>
  );
}

