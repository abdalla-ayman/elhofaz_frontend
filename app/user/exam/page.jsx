"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Loading from "@/app/components/Loading";
import Alert from "@/app/components/Alert";
import Box from "@mui/material/Box";

export default function Track() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  let { data: session } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (session)
  //     if (session.user.track) {
  //       router.replace("/user/profile");
  //     }
  // }, [session, router]);

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
        الإختبار التمهيدي
      </Typography>
      <Typography
        align="center"
        variant="body2"
        sx={{
          my: 4,
        }}
      >
        يجب على كل من يتقدم للإختبار لمسار الحافظين الجدد القيام بالإختبار
        التمهيدي
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >


      </Box>
      {error && <Alert severity="error" message={error} />}
      {success && <Alert message={success} severity="success" />}
      <Loading loading={loading} text={"جاري التحميل"} />
    </Container>
  );
}
