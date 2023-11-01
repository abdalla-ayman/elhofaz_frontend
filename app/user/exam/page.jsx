"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getExam, submitExam } from "@/lib/exam";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Loading from "@/app/components/Loading";
import Alert from "@/app/components/Alert";
import Box from "@mui/material/Box";
import { AudioRecorder } from "react-audio-voice-recorder";
import { Button } from "@mui/material";

export default function Exam() {
  let [data, setData] = useState([]);
  let [audioFiles, setAudioFiles] = useState([]);
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

    let fileDontExist = true;

    let newFiles = audioFiles.map((file) => {
      if (id == file.id) {
        file.file = new File([blob], id, {
          lastModified: new Date().getTime(),
          type: blob.type,
        });
        fileDontExist = false;
      }
      return file;
    });

    if (fileDontExist) {
      setAudioFiles([
        ...audioFiles,
        {
          id,
          file: new File([blob], id, {
            lastModified: new Date().getTime(),
            type: blob.type,
          }),
        },
      ]);
    } else {
      setAudioFiles(newFiles);
    }

    setData(newData);
  };

  const handleSubmit = async () => {
    try {
      setSuccess("");
      setError("");
      setLoading(true);

      let form = new FormData();
      for (let _file of audioFiles) {
        form.append("records[]", _file.file);
      }

      let res = await submitExam(form, session.accessToken);
      if (res.code == 200) {
        setSuccess(
          "تم تسليم الإختبار بنجاح, سيتم التواصل معك وتحويلك للمسار المناسب فور مراجعة تلاوتك"
        );
      } else {
        setError(res.message);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
        يجب على كل من يتقدم لمسار الحافظين الجدد القيام بالإختبار التمهيدي
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.length !== 0 && (
          <>
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
                  style={{
                    backgroundColor: "#D1B783",
                    padding: "10px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: "10px",
                    fontFamily: "serif",
                    lineHeight:'27px',
                    letterSpacing:'1px'
                  }}
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
                    onRecordingComplete={(blob) =>
                      addAudioElement(blob, item.id)
                    }
                    audioTrackConstraints={{
                      noiseSuppression: true,
                      echoCancellation: true,
                    }}
                    downloadOnSavePress={false}
                    downloadFileExtension="mp3"
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

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pt: 2,
                borderTop: "1px solid #333",
              }}
            >
              <Button size="large" onClick={handleSubmit} variant="contained">
                تسليم الإختبار
              </Button>
            </Box>
          </>
        )}
      </Box>
      {error && <Alert severity="error" message={error} />}
      {success && (
        <Alert
          message={success}
          close={() => router.replace("/user/profile")}
          severity="success"
        />
      )}
      <Loading loading={loading} text={"جاري التحميل"} />
    </Container>
  );
}
