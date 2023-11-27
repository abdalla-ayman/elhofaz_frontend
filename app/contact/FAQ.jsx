import React from "react";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

export default function FAQ({ faq }) {
  return (
    <Box
      id="FAQ"
      sx={{
        backgroundColor: "#A5823D",
        minHeight: "100vh",
        py: 4,
        // color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 4,
        }}>
        الأسئلة الأكثر شيوعا
      </Typography>
      <Box
        sx={{
          // display: "flex",
          // flexDirection: "row",
          // flexWrap: "wrap",
          // justifyContent: "center",
          // alignItems: "center",
          minHeight: "80%",
          maxWidth: 800,
          width: "100%",
          px: 1,
        }}>
        {faq.map((item) => (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            viewport={{ once: true }}>
            <Accordion
              key={item.id}
              sx={{
                backgroundColor: "#E0CFAC",
                my: 1,
                width: "100%",
              }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography> {item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
