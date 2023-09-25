"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

//componentes
import { Box, Container, Divider, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Item from "./item";

export default function Profile() {
  let { data: session } = useSession();

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
      <Typography variant="h5">الملف الشخصي</Typography>
      {session && (
        <Box
          sx={{
            mt: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
          </Box>

          <Container sx={{ mt: 3 }}>
            <Chip
              label={
                session.user.status == "pending" ? "الطلب قيد المعالجة" : "مفعل"
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

            <Item label={"اسم المستخدم"} value={session.user.username} />
            <Item label={"البريد الالكتروني"} value={session.user.email} />

            <Item label={"الجنسية"} value={session.user.nationality} />
            <Item label={"مكان الاقامة"} value={session.user.residation} />
            <Item label={"الهوية"} value={session.user.identification} />

            <Item
              label={"رقم الهاتف"}
              value={`${session.user?.phone_code}${session.user.phone}`}
            />
            <Item label={"العمر"} value={session.user.age} />
            <Item
              label={"النوع"}
              value={session.user.gender == "male" ? "ذكر" : "انثى"}
            />
            <Item label={"المسار"} value={tracks[session.user.track]} />
            <Item
              label={"نوع الحساب"}
              value={"حساب " + roles[session.user.role]}
            />
          </Container>
        </Box>
      )}
    </Container>
  );
}
