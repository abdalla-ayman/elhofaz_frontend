import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    // <footer className=" text- py-6">
    //   <div className="container mx-auto text-center">
    //     <Typography variant='h6'>&copy; مَقَارِئُ الحُفّاظِ</Typography>
    //     <p className="text-sm mt-2">Made with ❤️ and Tailwind CSS</p>
    //   </div>
    // </footer>

    <Box
      bgcolor="#53421f"
      py={3}
      bottom="0"
      width="100%"
      color="white"
      textAlign="left"
    >
      <Container>
        <Box py={2}>
          <Container>
            <Typography variant="h6">برنامج مقارئ السفرة</Typography>
            <Typography variant="body" sx={{ fontSize: "14px" }}>
              هو برنامج يهتم بتعليم القرآن الكريم وعلومه، يعتمد على منهج مجرب
            </Typography>
            <Typography variant="caption" >
            {" "}  (بمنهجية مقارئ الحفاظ), 
            </Typography>
            <Typography variant="body" sx={{ fontSize: "14px" }}>
            {" "}  يقوم على آلية معينة للحفظ والمراجعة {" "}
            </Typography>
          </Container>
          <Container>
            <Typography variant="h6" mt={2}>
              مواقع التواصل الاجتماعي
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                component="a"
                href="https://www.facebook.com/profile.php?id=100094450418374&mibextid=ZbWKwL"
                target="_blank"
              >
                <Facebook htmlColor="" sx={{ fontSize: "36px" }} />
              </IconButton>
              <IconButton
                color="inherit"
                component="a"
                href="https://twitter.com/maqaresafarah?t=3ld9XzJMs-TqhwYNHTFMQQ&s=09"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="36"
                  height="36"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
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
                <Instagram sx={{ fontSize: "36px" }} />
              </IconButton>
              <IconButton
                color="inherit"
                component="a"
                href="https://www.youtube.com/@maqaresafarah"
                target="_blank"
              >
                <YouTube sx={{ fontSize: "36px" }} />
              </IconButton>
            </Box>
          </Container>
        </Box>
        {/* <Box py={2}>
        <Typography variant="h6">Quick Links</Typography>
        Add your quick links here
        <Typography variant="body2"><Link>Link 1</Link></Typography>
        <Typography variant="body2"><Link>Link 1</Link></Typography>
        <Typography variant="body2"><Link>Link 1</Link></Typography>
      </Box> */}
      </Container>
      <Box bgcolor="#53421f" py={1} color="white" textAlign="center">
        <Typography variant="body">&copy; 2023 مَقَارِئُ السفرة</Typography>
      </Box>
    </Box>
  );
}
