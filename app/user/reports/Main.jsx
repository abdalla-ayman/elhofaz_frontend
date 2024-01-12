import ReportCard from "@/app/components/reportsCard";
import { Box, Container, Grid } from "@mui/material";

const MainPage = () => {
  let cards = [
    {
      id: 1,
      title: "التقارير المستلمة",
      subtitle: "عدد التقارير المستلمة للان",
      content: "12",
      btnText: "عرض التقارير",
      btnLink: "/user/reports/report-details",
    },
    {
      id: 2,
      title: "عدد ايام الغياب",
      subtitle: "عدد ايام الغياب للان",
      content: "6",
      btnText: "عرض الغياب",
      btnLink: "/user/reports/absence-details",
    },
    {
      id: 3,
      title: "طلبات التخفيف",
      subtitle: "عدد الطلبات للان",
      content: "3",
      btnText: "عرض الطلبات",
      btnLink: "/user/reports/takhfeef-details",
    },
    {
      id: 4,
      title: "مقدار الحفظ",
      subtitle: "مقدار الحفظ اليومي",
      content: "4",
      btnText: "تغيير",
      btnLink: "/user/reports",
    },
  ];

  return (
    <div className="#main">
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}>
        <Grid container>
          {cards.map((card) => {
            return (
              <Grid key={card.id} item lg={3} md={4} sm={6}>
                <Container>
                  <ReportCard
                    title={card.title}
                    subtitle={card.subtitle}
                    content={card.content}
                    btnText={card.btnText}
                    btnLink={card.btnLink}
                  />
                </Container>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default MainPage;
