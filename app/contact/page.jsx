"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Loading from "@/app/components/Loading";
import Alert from "@/app/components/Alert";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Link as muiLink from '@mui/material/Link';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  let { data: session } = useSession();

  return (
    <Container
      sx={{
        minHeight: "100vh",
        py: 5,
        paddingTop: 12,
        mt: 4,
      }}

      //   maxWidth={"sm"}
    >
      <Typography align="center" variant="h4">
        التواصل
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: "#cba346",
          width: "100%",
          mt: 2,
        }}
      >
        <Button
          // align="center"
          sx={{
            my: 4,
            mx: 1,
          }}
          variant="contained"
        >
            <a href=""></a>
          الأسألة الأكثر شيوعا
        </Button>
        <Button
          // align="center"
          sx={{
            my: 4,
            mx: 1,
          }}
          variant="contained"
        >
          تواصل معنا
        </Button>
      </Box>
      {error && <Alert severity="error" message={error} />}
      {success && <Alert message={success} severity="success" />}
      <Loading loading={loading} text={"جاري التحميل"} />
    </Container>
  );
}
