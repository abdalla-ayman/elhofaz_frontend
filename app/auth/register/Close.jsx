import dayjs from "dayjs";

//componetns
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

export default function Close({ startDate }) {
  return (
    <Container
      sx={{
        my: 4,
      }}
    >
      <Typography align="center">
        التسجيل مغلق حاليا ,يمكنك متابعة صفحات البرنامج على مواقع التواصل
        الإجتماعي لمعرفة اخر التحديثات{" "}
      </Typography>

      {dayjs(new Date()).isBefore(startDate) && (
        <Box
          sx={{
            mt: 4,
          }}
        >
          <Typography align="center">يبدأ التسجيل الجديد في </Typography>
          <Typography align="center" variant="subtitle2">
            {startDate}{" "}
          </Typography>
        </Box>
      )}
    </Container>
  );
}
