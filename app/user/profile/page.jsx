"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

//componentes
import { Box, Container, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Item from "./item";

export default function Profile() {
  let { data: session } = useSession();

  let tracks = {
    begginer: "المسار التأهيلي",
    mid_level: "الحافظين الجدد",
    hight_level: "الخاتمين ",
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
      {session && <Box
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
            #{session.user?.id}
          </Typography>
        </Box>

        <Container sx={{ mt: 3 }}>
          <Item label={"اسم المستخدم"} value={session.user?.username} />
          <Item label={"الجنسية"} value={session.user?.nationality} />
          <Item label={"مكان الاقامة"} value={session.user?.residation} />
          <Item
            label={"رقم الهاتف"}
            value={`${session.user?.phone_code}${session.user?.phone}`}
          />
          <Item label={"العمر"} value={session.user?.age} />
          <Item label={"اسم المستخدم"} value={session.user?.username} />
          <Item
            label={"النوع"}
            value={session.user?.gender == "male" ? "ذكر" : "انثى"}
          />
          <Item label={"المسار"} value={tracks[session.user?.track]} />
        </Container>
      </Box> }
      
    </Container>
  );
}
