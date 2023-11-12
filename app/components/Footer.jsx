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
            <Typography variant="caption"> (بمنهجية مقارئ الحفاظ),</Typography>
            <Typography variant="body" sx={{ fontSize: "14px" }}>
              {" "}
              يقوم على آلية معينة للحفظ والمراجعة{" "}
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
                href="https://tiktok.com/@maqaresafarah"
                target="_blank"
              >
                <svg
                  fill="#ffffff"
                  viewBox="0 0 512 512"
                  width="36"
                  height="36"
                  id="icons"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"></path>
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
