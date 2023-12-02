import { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button, IconButton, Box } from "@mui/material";
import { relative } from "path";

export default function Up({ href }) {
  let [show, setShow] = useState(false);

  const handleScroll = () => {
    console.log("working");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);
    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Button
      sx={{
        display: show ? `inline-block` : `none`,
        position: "fixed",
        right: 30,
        bottom: 30,
        p: 0,
        minWidth: 40,
        height: 40,
        backgroundColor: "#cba346",
      }}
      onClick={backToTop}
      variant="contained"
    >
      <ArrowUpwardIcon
        sx={{
          p: 0,
        }}
        fontSize="medium"
      />
    </Button>
  );
}
