"use client";
import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";

import Loading from "@/app/components/Loading";
import Alert from "@/app/components/Alert";
import Box from "@mui/material/Box";

import Heading from "./heading";
import RecitingCorrection from "./RecitingCorrection";
import CharitableFunds from './charitableFund'
import { getTeacher, getSession } from "@/lib/events"

export default function Contact() {
  const [teacher, setTeacher] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  let { data: session } = useSession();
  const count = useRef([])
  
  useEffect(() => {
    (async function () {
      let res = await getTeacher();
      // console.log(res.data.teachers)
      count.current = res.data.teachers
      setTeacher(res.data.teachers);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      let res = await getSession();
      // console.log(res.data)
      setSessions(res.data);
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
      <RecitingCorrection teachers={count.current} sessions={sessions} />
      <CharitableFunds />
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
