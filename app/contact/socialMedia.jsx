import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  WhatsApp,
  Email,
  EmailOutlined,
} from "@mui/icons-material";

export default function SocialMedia() {
  return (
    <Box
      id="social-media"
      sx={{
        backgroundColor: "#7B612E",
        minHeight: "100vh",
        // color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 4,
        }}
      >
        مواقع التواصل الإجتماعي
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80%",
          maxWidth: 500,
        }}
      >
        <IconButton
          color="inherit"
          component="a"
          href="https://www.facebook.com/profile.php?id=100094450418374&mibextid=ZbWKwL"
          target="_blank"
        >
          <Facebook
            htmlColor="#1877F2"
            sx={{
              fontSize: "70px",
              m: 3,
              backgroundColor: "#E8DBC1",
              borderRadius: "10px",
            }}
          />
        </IconButton>
        <IconButton
          color="inherit"
          component="a"
          href="https://twitter.com/maqaresafarah?t=3ld9XzJMs-TqhwYNHTFMQQ&s=09"
          target="_blank"
          sx={{
            m: 3,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="70"
            height="70"
            viewBox="0,0,256,256"
            style={{
              backgroundColor: "#E8DBC1",
              borderRadius: "10px",
            }}
          >
            <g
              fill="#000000"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <g transform="scale(8.53333,8.53333)">
                <path d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z"></path>
              </g>
            </g>
          </svg>
        </IconButton>
        <IconButton
          color="inherit"
          component="a"
          href="https://instagram.com/maqaresafarah?igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
        >
          <Instagram
            sx={{
              fontSize: "70px",
              m: 3,
              backgroundColor: "#E8DBC1",
              borderRadius: "10px",
            }}
            htmlColor="#833AB4"
          />
        </IconButton>
        <IconButton
          color="inherit"
          component="a"
          href="https://www.youtube.com/@maqaresafarah"
          target="_blank"
        >
          <YouTube
            sx={{
              fontSize: "70px",
              m: 3,
              backgroundColor: "#E8DBC1",
              borderRadius: "10px",
            }}
            htmlColor="#c4302b"
          />
        </IconButton>
        <IconButton
          color="inherit"
          component="a"
          href="mailto:maqaresafarah@gmail.com"
          target="_blank"
        >
          <EmailOutlined
            sx={{
              fontSize: "70px",
              m: 3,
              backgroundColor: "#E8DBC1",
              borderRadius: "10px",
            }}
            htmlColor="#c4302b"
          />
        </IconButton>
        <IconButton
          color="inherit"
          component="a"
          href="https://api.whatsapp.com/send?phone=249912153727"
          target="_blank"
        >
          <WhatsApp
            sx={{
              fontSize: "70px",
              m: 3,
              backgroundColor: "#E8DBC1",
              borderRadius: "10px",
            }}
            htmlColor="#128c7e"
          />
        </IconButton>
      </Box>
    </Box>
  );
}
