"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { updatePhoto, updateProfile, getProfileData } from "@/lib/profile";
import UserEditModal from "@/app/user/profile/Model";

//componentes
import { Card, CardContent } from "@mui/material";

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

export default function Profile() {
  let { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session)
      (async function () {
        const userdata = await getProfileData(session.accessToken);
        console.log(userdata);
      })();
  }, [session]);

  const handleFileChange = async (event) => {
    setLoading(true);
    setSelectedFile(event.target.files[0]);
    let formDate = new FormData();
    formDate.append("image", selectedFile);
    // await updatePhoto(formDate)
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform file upload logic here
    console.log(selectedFile);
  };

  let tracks = {
    beginner: "المسار التأهيلي",
    mid_level: "الحافظين الجدد",
    hight_level: "الخاتمين ",
  };
  let roles = {
    teacher: "معلم",
    user: "طالب",
    admin: "اداري",
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
      {session && (
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
                    src={session.user?.image}
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
                  {session.user?.name}
                </Typography>
                <Typography
                  color={"gray"}
                  sx={{
                    mt: 1,
                  }}
                >
                  #{session.user?.id.toString().padStart(6, "0")}
                </Typography>
                <Chip
                  label={
                    session.user.status == "pending"
                      ? "الطلب قيد المعالجة"
                      : "مفعل"
                  }
                  sx={{
                    bgcolor:
                      session.user.status == "pending"
                        ? "warning.light"
                        : "info.light",

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
              <Box display="flex" justifyContent="flex-end">
                <UserEditModal user={session.user} />
              </Box>

              <Box
                sx={{
                  mt: 3,
                  pt: 5,
                  padding: "20px",
                  backgroundColor: "#DBE9EE",
                  borderRadius: "12px",
                }}
              >
                <List>
                  <ListItem>
                    <TextField
                      label="اسم المستخدم"
                      variant="filled"
                      value={session.user.username}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="البريد الالكتروني"
                      variant="filled"
                      value={session.user.email}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="الجنسية"
                      variant="filled"
                      value={session.user.nationality}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="مكان الاقامة"
                      variant="filled"
                      value={session.user.residation}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="الهوية"
                      variant="filled"
                      value={session.user.identification || "--------"}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="العمر"
                      variant="filled"
                      value={session.user.age}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="النوع"
                      variant="filled"
                      value={session.user.gender == "male" ? "ذكر" : "انثى"}
                      fullWidth
                    />
                  </ListItem>
                  <br />

                  {session.user.role == "user" && (
                    <Item label={"المسار"} value={tracks[session.user.track]} />
                  )}

                  <Item
                    label={"نوع الحساب"}
                    value={"حساب " + roles[session.user.role]}
                  />
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
}
