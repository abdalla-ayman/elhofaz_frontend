import { Typography, Box, Container } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { motion } from "framer-motion";

export default function HomeAbout() {
  return (
    <div className="#" id="about">
      <Box
        marginTop={17}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row">
        <Typography variant="h3" marginRight={2}>
          نبذة
        </Typography>
        <InfoIcon
          fontSize="large"
          color="primary"
          sx={{ margin: "0 0 10px 0" }}
        />
      </Box>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}>
        <Container
          sx={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "flex-start",
          }}>
          <FormatQuoteIcon fontSize="large" />
        </Container>
        <Container
          sx={{
            display: "flex",
            //   width: "900px",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography fontSize={25} sx={{ marginLeft: 1 }}>
            * بدأ هذا المشروع بفكرة بسيطة جدّاً ، مكنونها تحويل هذه الأسافير
            ووسائط التواصل الإجتماعي إلى منبر لنشر كتاب الله و تحفيظه (خلوة
            إلكترونية). * استعنّا بالله وبدأنا هذا المشروع القرآني ولم نظن مجرد
            الظنّ أنه سيجد كل هذا الإحتفاف والإقبال عليه من كل حدب وصوب، وبعدها
            إنطلق كما النار في الهشيم.`
          </Typography>
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "170px",
          }}>
          <FormatQuoteIcon fontSize="large" />
        </Container>
      </motion.div>
    </div>
  );
}
