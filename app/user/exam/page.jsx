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
import { AudioRecorder } from "react-audio-voice-recorder";
import { Button } from "@mui/material";

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

  const addAudioElement = (blob, id) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    // document.body.appendChild(audio);
    let newData = data.map((item) => {
      if (id == item.id) {
        item.url = url;
      }
      return item;
    });
    setData(newData);
  };

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
          <Box
            sx={{
              my: 2,
              py: 1,
              borderTop: ".5px solid #333",
            }}
            key={item.id}
          >
            <Typography sx={{ mb: 2 }}>
              {" "}
              قم بتسجيل قرائتك للمقطع أدناه:
            </Typography>
            <div
              dangerouslySetInnerHTML={{
                __html: item.question,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
              }}
            >
              <AudioRecorder
                onRecordingComplete={(blob) => addAudioElement(blob, item.id)}
                audioTrackConstraints={{
                  noiseSuppression: true,
                  echoCancellation: true,
                }}
                downloadOnSavePress={true}
                downloadFileExtension="webm"
              />
              {item.url && (
                <audio
                  style={{
                    marginTop: "10px",
                  }}
                  src={item.url}
                  controls={true}
                />
              )}
            </Box>
          </Box>
        ))}
      </Box>
      {error && <Alert severity="error" message={error} />}
      {success && <Alert message={success} severity="success" />}
      <Loading loading={loading} text={"جاري التحميل"} />

      <Box sx={{}}>
        <Button
       
          size="large"
          variant="contained"
        >
          تسليم الإختبار
        </Button>
      </Box>
    </Container>
  );
}
