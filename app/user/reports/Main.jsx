import ReportCard from "@/app/components/reportsCard";
import { Box, Container, Grid } from "@mui/material";

const MainPage = () => {
  return (
    <div className="#main">
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}>
        <Grid container>
          <Grid item lg={3} md={4} sm={6}>
            <Container>
              <ReportCard
                title={"التقارير المستلمة"}
                subtitle={"عدد التقارير المستلمة للان"}
                content={"12"}
                btnText={"عرض التقارير"}
                btnLink={"/user/reports/report-details"}
              />
            </Container>
          </Grid>
          <Grid item lg={3} md={4} sm={6}>
            <Container>
              <ReportCard
                title={"عدد ايام الغياب"}
                subtitle={"عدد ايام الغياب للان"}
                content={"6"}
                btnText={"عرض الغياب"}
                btnLink={"/user/reports/absence-details"}
              />
            </Container>
          </Grid>
          <Grid item lg={3} md={4} sm={6}>
            <Container>
              <ReportCard
                title={"طلبات التخفيف"}
                subtitle={"عدد الطلبات للان"}
                content={"3"}
                btnText={"عرض الطلبات"}
                btnLink={"/user/reports/takhfeef-details"}
              />
            </Container>
          </Grid>
          <Grid item lg={3} md={4} sm={6}>
            <Container>
              <ReportCard
                title={"مقدار الحفظ"}
                subtitle={"مقدار الحفظ اليومي"}
                content={"4"}
                btnText={"تغيير"}
              />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MainPage;
