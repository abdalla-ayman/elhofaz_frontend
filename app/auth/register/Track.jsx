import { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

//components
import Container from "@mui/material/Container";

export default function Track({ setState, track }) {
  let [tab, setTab] = useState("one");
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        my: 3,
      }}
      maxWidth={"xs"}
    >
      <Typography variant="h6" component="h3" sx={{ my: 2 }}>
        اختيار المسار
      </Typography>
      <Typography>البرنامج مكون من ثلاث مسارات اساسية</Typography>

      <Tabs
        value={tab}
        onChange={(e, value) => setTab(value)}
        aria-label="secondary tabs example"
        sx={{
          mt: 3,
        }}
      >
        <Tab value="one" label="المسار التأهيلي" />
        <Tab value="two" label="الحافظين الجدد" />
        <Tab value="three" label="الخاتمين" />
      </Tabs>

      {tab == "one" && (
        <Paper
          sx={{
            p: 2,
            my: 2,
            backgroundColor: "skyblue",
          }}
          variant="outlined"
        >
          <Typography>💠 المسار التأهيلي</Typography>
          <Typography variant="body1">
            📀 هو مخصص للطلاب المبتدئين في القراءة والغرض منه تعريف الطالب
            بالأحكام العامة للتجويد حيث يتم تدريبهم وتأهيلهم لقراءة القرآن
            الكريم مجوداً مع شرح دروس التجويد
          </Typography>
          <Typography>📀 يتم قبول الطلاب مباشرة في هذا المسار</Typography>
          <Typography>📀 تتراوح مدته من ثلاثة إلى أربعة أشهر</Typography>
        </Paper>
      )}

      {tab == "two" && (
        <Paper
          sx={{
            p: 2,
            my: 2,
            backgroundColor: "#4caf50",
          }}
          variant="outlined"
        >
          <Typography>💠 مسار الحافظ الجديد</Typography>
          <Typography variant="body1">
            📀 هو مخصص للطلاب الذين يرغبون في حفظ كتاب الله كاملاً
          </Typography>
          <Typography>
            📀 يخضع جميع طلاب هذا المسار لإختبار تمهيدي يتم من خلاله التأكد من
            جودة القراءة والمخارج الصحيحة وإذا اجتاز الطالب هذا الاختبار يحق له
            الدخول في المسار مباشرة وإذا لم يجتاز الاختبار يتم تحويله إلى مسار
            التأهيل
          </Typography>
          <Typography>
            📀 يسمح لهم بمقدار يومي من الحفظ (نصف وجه، وجه، وجهين)
          </Typography>
        </Paper>
      )}

      {tab == "three" && (
        <Paper
          sx={{
            p: 2,
            my: 2,
            backgroundColor: "#ba68c8",
          }}
          variant="outlined"
        >
          <Typography>💠 مسار الخاتم</Typography>
          <Typography variant="body1">
            📀 هو مخصص للطلاب الحافظين للقرآن كاملاً ويرغبون بتجويد حفظهم
            واتقانه أو الطلاب الذين تفلت منهم القرآن لضعف التعاهد او الانشغال عن
            المراجعة المنتظمة الصحيحة
          </Typography>
          <Typography>
            📀 يتم قبول الطلاب مباشرة في المسار بعد التأكد من صحة البيانات
          </Typography>
          <Typography>
            📀 يسمح لهم بمقدار يومي من الحفظ (وجه، وجهين، ثلاثة أوجه، أربعة
            أوجه)
          </Typography>
        </Paper>
      )}

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="1"
          value={track}
          onChange={(e) =>
            setState((prevState) => {
              return { ...prevState, track: e.target.value };
            })
          }
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="المسار التمهيدي"
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="الحافظين الجدد"
          />
          <FormControlLabel value="3" control={<Radio />} label="الخاتمين" />
        </RadioGroup>
      </FormControl>
    </Container>
  );
}
