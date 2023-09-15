import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

//components
import Container from "@mui/material/Container";

export default function Track() {
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
        textColor="success"
        indicatorColor="success"
        aria-label="success tabs example"
        sx={{
          mt: 3,
        }}
      >
        <Tab value="one" label="المسار التأهيلي" />
        <Tab value="two" label="الحافظين الجدد" />
        <Tab value="three" label="الخاتمين" />
      </Tabs>
    </Container>
  );
}
