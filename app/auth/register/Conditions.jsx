import React from "react";

//componetes
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

export default function Conditions({
  setAcceptedConditions,
  showConditions,
  setShowConditions,
}) {
  let handleClose = () => {
    setShowConditions(false);
  };
  return (
    <Dialog
      sx={{
        mt: 2,
      }}
      open={showConditions}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        شروط البرنامج
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography variant="" component="li" gutterBottom>
          أولا: المجموعات مخصصة فقط للبرنامج والمتابعة اليومية وغير مسموح فيها أي
          رسائل أخرى كالسياسة والرياضة وغيرها من الأخبار والرسائل اليومية وكل
          الأشياء التي لا تخص البرنامج بصلة.
        </Typography>
        <Typography gutterBottom component="li">
          ثانياً: البرنامج يومياً وغير مسموح بالغياب إلا بعذر مقبول ويكون ذلك
          بالتواصل مع مشرف المجموعة في الخاص أو إدارة البرنامج وإذا تكرر غياب
          الطالب بعذر أو بغير عذر يتم الإعتذار مباشرة من الطالب.
        </Typography>
        <Typography gutterBottom component="li">
          ثالثاً: العرض يكون مع المعلم المشرف على الحلقة أو من ينوب عنه ويكون ذلك
          عبر الإتصال وغير مسموح بالتسجيلات الصوتية للعرض.
        </Typography>
        <Typography gutterBottom component="li">
          رابعاً: التقارير ترسل يومياً وعدم إرسال التقارير أو الانتظام فيها يعتبر
          غياب يُحاسب عليه الطالب
        </Typography>
        <Typography gutterBottom component="li">
          خامساً: إتباع الخطة إلزامي وأمانة وعهد عند الطالب لازم يوفيه حسب آلية
          البرنامج
        </Typography>
        <Typography gutterBottom component="li">
          سادساً: توجيهات المعلم يجب اتباعها تماماً حتى يستفيد الطالب الفائدة
          المرجوة من البرنامج
        </Typography>
        <Typography gutterBottom component="li">
          سابعاً: الإلتزام والمواظبة والجدية شروط اساسية في البرنامج وإذا اتضح
          عدم جدية الطالب يتم الإعتذار منه مباشرة
        </Typography>
       

        <Typography
          align="center"
          color={"#6C757D"}
          gutterBottom
          variant="subtitle2"
          sx={{
            mt: 2,
          }}
        >
          شروط البرنامج من يوافق عليها يضغط على موافق ويستمر معنا في البرنامج
          ومن لم يوافق عليها وفقه الله تعالى ويسر أمره ونعتذر منه
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={() => {
            setAcceptedConditions(true);
            handleClose();
          }}
        >
          الموافقة على الشروط
        </Button>
      </DialogActions>
    </Dialog>
  );
}
