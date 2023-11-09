import React from "react";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  return (
    <Box
      id="FAQ"
      sx={{
        backgroundColor: "#A5823D",
        minHeight: "100vh",
        py: 4,
        // color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 4,
        }}
      >
        الأسئلة الأكثر شيوعا
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80%",
          maxWidth: 700,
        }}
      >
        <Accordion
          sx={{
            backgroundColor: "#E0CFAC",
          }}
          
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              {" "}
              1- ماهي خطتك المبدئية في الحفظ او المراجعة؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              طبعا جربت مختلفة بس هذا اللي ماشية عليه حاليا حسيته مناسب لي: *حفظ
              وجه يوميا ماعدا الجمعة والسبت، عشان لو في يوم ما لحقت أحفظ أو
              ماكملت أو ما ثبت أكمله الجمعة والسبت. *قراءة الوجه كامل قبل الحفظ.
              *لما أبدأ في حفظ الوجه أبدأ بآخر أية من الوجه اللي قبله ، لأني
              أحيانا ما أتذكر الوجه اللي بعده فصرت أربط بأخر آية من الوجه اللي
              قبله المراجعة: في نهاية الأسبوع أراجع حق الأسبوع كامل وأراجع السور
              اللي مثبتتها مضبوط أو وسط في الصلاة(بصراحة أحسن شيء يساعد على
              التثبيت في الصلاة) (أحيانا لو في سورة أبغى أثبتها مضبوط أكررها في
              صلواتي خلال أسبوع ، الأسبوع الماضي عملتها في مراجعة الزمر
              والحمدلله ثبتت معاي)
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion   sx={{
            backgroundColor: "#E0CFAC",
          }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              {" "}
              2- ماهي العقبات التي واجهتيها في رحلتك وكيف تغلبت عليها؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              *أحيانا الكسل والفتور *ما أتذكر أحيانا خاتمة الأيات بس الحمدلله
              صرت أربط بأي شيء وغالبا أربطها بأي حرف بالآية *ما أحب التكرار كثير
              وأمل منه بس صرت أنوع في التكرار،ي عني مثلا خلال اليوم :بعد
              الفجرأحفظ الوجه وأكرره مرتين أو3 بعدين أحيانا العصر أراجعه مرة وفي
              أي صلاة أراجعه وكمان في الليل أراجعه وأحيانا أسمع الوجه من قارئ
              وكمان أخلي صحباتي يسمعوا حفظي، بكذا تكررت علي الوجه 6أو 7 مرات
              تقريبا .
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion   sx={{
            backgroundColor: "#E0CFAC",
          }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              {" "}
              3- ماهي الوسائل التي تساعدك في الحفظ أوالمراجعة؟{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              - الدعاء ثم الدعاء ثم الدعاء(ادعي أن الله يفتح قلبك ويسهل لك ويثبت
              الحفظ ويعينك على مراجعته وتدبره... 2 -شكرالله داااائما(إذا أتممت
              حفظ سورة أو جزء أو ثبت مضبوط ( لئن شكرتم لأزيدنكم ) 3 -خليكِ واثقة
              في نفسك وفي حفظك وفي قدراتك-بعد حسن الظن بالله بتوفيقه لك- 4
              -قراءة تفسير للأيات اللي بحفظها وأسهل شيء التفسير الميسر والحمدلله
              ساعدني كثير في فهم الأيات 5 -أحب أحد يسمع حفظي أحس يثبت أكثر
              وأتذكر اللي دائما أتلخبط فيه، ماكان عندي أحد بس الحمدلله صرت في
              التحفيظ أخلي صحباتي يسمعوا حفظي حتى لو مو في السور اللي داخلة
              منهجنا. 6 -مكأفأة نفسي إذا أتممت حفظ سورة مثلا أشتري شيء نفسك أو
              روحي مكان تحبيه أو اعملي حركة حلوة تغير الروتين (لما ختمت حفظ آل
              عمران اشتريت لي مجموعة شوكولاتات) وفي أشياء أسويها أثناء حفظي لبعض
              السور وبعضه لا مثلا أحيانا بالخرائط الذهنية وأحيانا بكتابة الأيات
              أو غيرها
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
