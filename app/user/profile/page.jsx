"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Container } from "@mui/material";

export default function page() {
  let { data: session } = useSession();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        py: 5,
        paddingTop: 12,
      }}
    >
      


    </Container>
  );
}
