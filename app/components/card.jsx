import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function HomeCard({ title, text, Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}>
      <Card
        variant="outlined"
        sx={{
          height: 220,
          width: 220,
          p: 2,
          m: 2,
          backgroundColor: "#432818",
          color: "white",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#bb9457",
          },
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Icon
            sx={{
              mb: 1,
            }}
          />
          <Typography align="center" variant="h6" className="title">
            {title}
          </Typography>
        </Box>
        <Typography
          sx={{
            my: 2,
          }}
          align="center"
          variant="body1"
          className="text">
          {text}
        </Typography>
      </Card>
    </motion.div>
  );
}
