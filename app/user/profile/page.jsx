"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

//componentes
import {
  Box,
  Container,
  List,
  ListItem,
  Button,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Item from "./item";

export default function Profile() {
  let { data: session } = useSession();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
            <Grid item md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                  }}
                  src={session.user?.image}
                />
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
                <form className="text-center" onSubmit={handleSubmit}>
                  <TextField type="file" onChange={handleFileChange} />

                  <Button
                    sx={{ mt: 2 }}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    تحميل صورة الملف
                  </Button>
                </form>
              </Box>
            </Grid>

            <Grid item md={9}>
              <Box
                sx={{
                  mt: 3,
                  pt: 5,
                  padding: "25px",
                  backgroundColor: "#DBE9EE",
                  borderRadius: "12px",
                }}
              >
                <List>
                  <ListItem>
                    <TextField
                      label="اسم المستخدم"
                      variant="outlined"
                      value={session.user.username}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="البريد الالكتروني"
                      variant="outlined"
                      value={session.user.email}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="الجنسية"
                      variant="outlined"
                      value={session.user.nationality}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="مكان الاقامة"
                      variant="outlined"
                      value={session.user.residation}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="الهوية"
                      variant="outlined"
                      value={session.user.identification}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="العمر"
                      variant="outlined"
                      value={session.user.age}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      label="النوع"
                      variant="outlined"
                      value={session.user.gender}
                      fullWidth
                    />
                  </ListItem>
                  <br />
                  <Item label={"المسار"} value={tracks[session.user.track]} />
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
