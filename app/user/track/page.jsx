import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TrackCard from "./TrackCard";

export default function Track() {
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
        />
        <TrackCard
          title={"المسار التأهيلي"}
          p1={
            "📀 هو مخصص للطلاب المبتدئين في القراءة والغرض منه تعريف الطالب بالأحكام العامة للتجويد حيث يتم تدريبهم وتأهيلهم لقراءة القرآن الكريم مجوداً مع شرح دروس التجويد"
          }
          p2={"📀 يتم قبول الطلاب مباشرة في هذا المسار"}
          p3={"📀 تتراوح مدته من ثلاثة إلى أربعة أشهر"}
          bg={"#F7F7F9"}
        />
        <TrackCard
          title={"مسار الخاتم"}
          p1={
            "📀 هو مخصص للطلاب الحافظين للقرآن كاملاً ويرغبون بتجويد حفظهم واتقانه أو الطلاب الذين تفلت منهم القرآن لضعف التعاهد او الانشغال عن المراجعة المنتظمة الصحيحة"
          }
          p2={"📀 يتم قبول الطلاب مباشرة في المسار بعد التأكد من صحة البيانات"}
          p3={
            "📀 يسمح لهم بمقدار يومي من الحفظ (وجه، وجهين، ثلاثة أوجه، أربعة أوجه)"
          }
          bg={"#DEDBD2"}
        />
      </Box>
    </Container>
  );
}
