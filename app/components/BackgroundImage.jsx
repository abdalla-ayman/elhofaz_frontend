import Paper from "@mui/material/Paper";
import Image from "next/image";
import Box from "@mui/material/Box";

function BackgroundImage({ src, alt, position }) {
  return (
    <Box
      sx={{
        position: position,
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: "-1",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill={true}
        // placeholder="blur"
        style={{
          objectFit: "cover",
        }}
      />
    </Box>
  );
}

export default BackgroundImage;
