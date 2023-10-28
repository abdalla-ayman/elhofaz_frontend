"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getExam } from "@/lib/exam";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Loading from "@/app/components/Loading";
import Alert from "@/app/components/Alert";
import Box from "@mui/material/Box";

export default function Track() {
  let [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  let { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session)
      (async function () {
        let res = await getExam(session.accessToken);
        setData(res.data);
        console.log(res.data);
      })();
  }, [session, router]);

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
        {data.map((item) => (
          <div key={item.id}>
            <Typography> قم بتسجيل قرائتك للمقطع أدناه</Typography>
            <div
              dangerouslySetInnerHTML={{
                __html: item.question,
              }}
            />
          </div>
        ))}
      </Box>
      {error && <Alert severity="error" message={error} />}
      {success && <Alert message={success} severity="success" />}
      <Loading loading={loading} text={"جاري التحميل"} />
    </Container>
  );
}
