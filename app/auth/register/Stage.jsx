import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

//components
import Container from "@mui/material/Container";

export default function Stage() {
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
        اختيار المرحلة
      </Typography>
      {/* <Container sx={{ my: 4 }}>
        <Typography>المرحلة الأولى هو ما تقدمه منظورنا إعادة</Typography>
        <Typography></Typography>
      </Container> */}

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="1"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="1" control={<Radio />} label="مرحلة الضبط" />
          <FormControlLabel
            value="2"
            disabled
            control={<Radio />}
            label="مرحلة التعاهد"
          />
          <FormControlLabel
            value="3"
            disabled
            control={<Radio />}
            label="مرحلة الاسناد"
          />
          <FormControlLabel
            value="4"
            disabled
            control={<Radio />}
            label="مرحلة القراءات"
          />
        </RadioGroup>
        <FormLabel sx={{ mt: 4 }} id="demo-radio-buttons-group-label">
          يبدأ كل الطلاب الجدد من مرحلة الضبط
        </FormLabel>
      </FormControl>
    </Container>
  );
}
