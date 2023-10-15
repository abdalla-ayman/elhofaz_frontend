"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { getProfileData, updatePhoto } from "@/lib/profile";
import UserEditModal from "@/app/user/profile/Model";

//componentes

import Box from "@mui/material/Box";
import { List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import Item from "./item";
import Loading from "@/app/components/Loading";
import Alert from "@/app/components/Alert";

export default function Profile() {
  let { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [loadingmsg, setLoadingmsg] = useState(
    "جاري تحميل معلومات الملف الشخصي"
  );

  let fetchUser = async () => {
    const userdata = await getProfileData(session.accessToken);
    if (userdata.code == 200) setUser(userdata.data.user);
    setLoading(false);
  };

  useEffect(() => {
    if (session) fetchUser();
  }, [session]);



  
  const handleFileChange = async (event) => {
    try {
      setSuccess("");
      setError("");
      setLoadingmsg("الرجاء الإنتظار");
      setLoading(true);
      setSelectedFile(event.target.files[0]);
      let formDate = new FormData();
      formDate.append("image", selectedFile);
      let result = await updatePhoto(formDate, session.accessToken);
      if (result.code == 200) {
        await fetchUser();
        setSuccess("تم تعديل الصورة بنجاح");
      } else {
        setError(result.message);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  let tracks = {
    beginner: "المسار التأهيلي",
    mid_level: "الحافظين الجدد",
    hight_level: "الخاتمين ",
  };
  let roles = {
    teacher: "معلم",
    user: "طالب",
    admin: "Yداري",
  };
  let stages = {
    dabt: "مرحلة الضبط",
    taahhud: "مرحلة التعاهد",
    isnad: "مرحلة الإسناد",
    qiraat: "مرحلة القراءات",
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        minHeight: "100vh",
        py: 5,
        paddingTop: 12,
      }}
    >
      <Typography variant="h5" sx={{ mt: 5, textAlign: "center" }}>
        الملف الشخصي
      </Typography>
      {user && (
        <Box
          sx={{
            mt: 4,
          }}
        >
          <Grid container>
            <Grid item md={3} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 200,
                      height: 200,
                    }}
                    src={user?.image}
                  />
                  <IconButton
                    aria-label="delete"
                    color="info"
                    onClick={() => {
                      document.getElementById("image-upload").click();
                    }}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "100%",
                      height: "100%",
                      transform: "translate(-50%,-50%)",
                      color: "transparent",
                      "&:hover": {
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                      },
                    }}
                  >
                    <CloudUploadTwoToneIcon />
                  </IconButton>
                </Box>
                <Typography
                  sx={{
                    mt: 2,
                  }}
                  variant="h6"
                >
                  {user?.name}
                </Typography>
                <Typography
                  color={"gray"}
                  sx={{
                    mt: 1,
                  }}
                >
                  #{user?.id.toString().padStart(6, "0")}
                </Typography>
                <Chip
                  label={
                    user.status == "pending" ? "الطلب قيد المعالجة" : "مفعل"
                  }
                  sx={{
                    bgcolor:
                      user.status == "pending" ? "warning.light" : "info.light",

                    mt: 2,
                    mx: "auto",
                  }}
                />
                <br />
                <TextField
                  id="image-upload"
                  sx={{
                    display: "none",
                  }}
                  type="file"
                  onChange={handleFileChange}
                />
              </Box>
            </Grid>

            <Grid item md={9} xs={12}>
              <Box
                display="flex"
                sx={{
                  mt: 3,
                }}
                justifyContent="flex-start"
              >
                <UserEditModal
                  user={user}
                  fetchUser={fetchUser}
                  token={session.accessToken}
                />
              </Box>

              <Box
                sx={{
                  mt: 1,
                  pt: 5,
                  padding: "20px",
                  backgroundColor: "#E1DEE3",
                  borderRadius: "12px",
                }}
              >
                <List>
                  <ListItem>
                    <TextField
                      label="إسم المستخدم"
                      variant="filled"
                      value={user.username}
                      InputProps={{ readOnly: true }}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="البريد الإلكتروني"
                      variant="filled"
                      value={user.email}
                      InputProps={{ readOnly: true }}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="رقم الهاتف"
                      variant="filled"
                      value={`${user.phone_code}${user.phone} `}
                      InputProps={{ readOnly: true }}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="الجنسية"
                      variant="filled"
                      value={user.nationality}
                      InputProps={{ readOnly: true }}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="مكان الإقامة"
                      variant="filled"
                      value={user.residation}
                      InputProps={{ readOnly: true }}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="الهوية"
                      variant="filled"
                      value={user.identification || "--------"}
                      InputProps={{ readOnly: true }}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="العمر"
                      variant="filled"
                      value={user.age}
                      InputProps={{ readOnly: true }}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="النوع"
                      variant="filled"
                      value={user.gender == "male" ? "ذكر" : "انثى"}
                      InputProps={{ readOnly: true }}
                      fullWidth
                    />
                  </ListItem>
                  <br />

                  {user.role == "user" && (
                    <Item label={"المسار"} value={tracks[user.track]} />
                  )}
                  {user.role == "user" && (
                    <Item label={"المرحلة"} value={stages[user.stage]} />
                  )}

                  <Item
                    label={"نوع الحساب"}
                    value={"حساب " + roles[user.role]}
                  />
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
      {error && <Alert severity="error" message={error} />}
      {success && <Alert message={success} severity="success" />}
      <Loading loading={loading} text={loadingmsg} />
    </Container>
  );
}
