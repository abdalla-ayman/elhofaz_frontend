"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { changeTrack } from "@/lib/profile";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Loading from "@/app/components/Loading";
import Alert from "@/app/components/Alert";
import Box from "@mui/material/Box";

import TrackCard from "./TrackCard";

export default function Track() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  let [track, setTrack] = useState("");

  const [error, setError] = useState("");
  let { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session)
      if (session.user.track) {
        router.replace("/user/profile");
      }
  }, [session, router]);

  const _changeTrack = async () => {
    try {
      setSuccess("");
      setError("");
      setLoading(true);
      if (track == "mid_level") {
        router.replace("/user/exam");
        return;
      }
      let result = await changeTrack({ track }, session.accessToken);
      if (result.code == 200) {
        setSuccess("تم اختيار المسار بنجاح ");
        router.replace("/user/profile");
      } else {
        setError(result.message);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleTrackChange = (_track) => {
    setTrack(_track);
    setShowConfirmationModal(true);
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
        إختيار المسار
      </Typography>
      <Typography
        align="center"
        variant="h6"
        sx={{
          my: 4,
        }}
      >
        يتكون البرنامج من ثلالثة مسارات أساساية
      </Typography>
      {session && session.user && session.user.track != null ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <TrackCard
            title={"مسار الحافظ الجديد"}
            p1={" 📀 هو مخصص للطلاب الذين يرغبون في حفظ كتاب الله كاملاً"}
            p2={
              "  📀 يخضع جميع طلاب هذا المسار لإختبار تمهيدي يتم من خلاله التأكد من جودة القراءة والمخارج الصحيحة وإذا اجتاز الطالب هذا الاختبار يحق له الدخول في المسار مباشرة وإذا لم يجتاز الاختبار يتم تحويله إلى مسار التأهيل"
            }
            p3={"     📀 يسمح لهم بمقدار يومي من الحفظ (نصف وجه، وجه، وجهين)"}
            bg={"#C6DDF0"}
            changeTrack={() => handleTrackChange("mid_level")}
          />
          <TrackCard
            title={"المسار التأهيلي"}
            p1={
              "📀 هو مخصص للطلاب المبتدئين في القراءة والغرض منه تعريف الطالب بالأحكام العامة للتجويد حيث يتم تدريبهم وتأهيلهم لقراءة القرآن الكريم مجوداً مع شرح دروس التجويد"
            }
            p2={"📀 يتم قبول الطلاب مباشرة في هذا المسار"}
            p3={"📀 تتراوح مدته من ثلاثة إلى أربعة أشهر"}
            bg={"#F7F7F9"}
            changeTrack={() => handleTrackChange("beginner")}
          />
          <TrackCard
            title={"مسار الخاتم"}
            p1={
              "📀 هو مخصص للطلاب الحافظين للقرآن كاملاً ويرغبون بتجويد حفظهم واتقانه أو الطلاب الذين تفلت منهم القرآن لضعف التعاهد او الانشغال عن المراجعة المنتظمة الصحيحة"
            }
            p2={
              "📀 يتم قبول الطلاب مباشرة في المسار بعد التأكد من صحة البيانات"
            }
            p3={
              "📀 يسمح لهم بمقدار يومي من الحفظ (وجه، وجهين، ثلاثة أوجه، أربعة أوجه)"
            }
            bg={"#DEDBD2"}
            changeTrack={() => handleTrackChange("high_level")}
          />
        </Box>
      ) : (
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h4">عفوا تم اختيار المسار مسبقا </Typography>
        </Container>
      )}

      {showConfirmationModal && (
        <Alert
          severity="error"
          message="هل انت متأكد انك تريد المتابعة ؟ لن يمكنك تغيير المسار بعد اختياره!"
          confirmationModal={true}
          confirmationAction={_changeTrack}
          confirmationButton="إختيار المسار"
          close={() => setShowConfirmationModal(false)}
        />
      )}
      {error && <Alert severity="error" message={error} />}
      {success && <Alert message={success} severity="success" />}
      <Loading loading={loading} text={"جاري التحميل"} />
    </Container>
  );
}
