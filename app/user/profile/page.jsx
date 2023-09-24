"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

//componentes
import { Box, Container, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Item from "./item";

export default function Profile() {
  let { data: session } = useSession();
  console.log(session.user);
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
            src={session.user.image}
          />
          <Typography
            sx={{
              mt: 2,
            }}
            variant="h6"
          >
            {session.user.name}
          </Typography>
          <Typography
            color={"gray"}
            sx={{
              mt: 1,
            }}
          >
            #{session.user.id}
          </Typography>
        </Box>

        <Container>
          <Item label={"اسم المستخدم"} value={session.user.username} />
          <Item label={"اسم المستخدم"} value={session.user.nationality} />
          <Item label={"اسم المستخدم"} value={session.user.residation} />
          <Item label={"اسم المستخدم"} value={`${session.user.phone_code}${session.user.phone}`} />
          <Item label={"اسم المستخدم"} value={session.user.username} />
          <Item label={"اسم المستخدم"} value={session.user.username} />

          <Typography>{session.user.nationality}</Typography>
          <Typography>{session.user.residation}</Typography>
          <Typography>
            {session.user.phone_code + session.user.phone}
          </Typography>
          <Typography>{session.user.gender}</Typography>
          <Typography>{session.user.track}</Typography>
          <Typography>{session.user.age}</Typography>
        </Container>
      </Box>
    </Container>
  );
}
