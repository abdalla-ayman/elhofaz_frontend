"use client";
import React, { useState } from "react";
import {
  Paper,
  Button,
  Typography,
  Container,
  FormControl,
  TextField,
} from "@mui/material";
import FormRadio from "../../components/FormRadio";

const Questions = () => {
  //custom styles
  const styles = {
    paper: {
      backgroundColor: "#f8f8f8",
      marginTop: "20px",
      width: "100%",
    },
  };

  let questions = [
    { qname: "question 1", a: "A", b: "B", c: "C", d: "D", answer: "a" },
    { qname: "question 2", a: "A", b: "B", c: "C", d: "D", answer: "c" },
    { qname: "question 3", a: "A", b: "B", c: "C", d: "D", answer: "b" },
    { qname: "question 4", a: "A", b: "B", c: "C", d: "D", answer: "d" },
  ];

  return (
    <div className=" bg-teal-600">
      <br />
      <Container>
        <FormControl fullWidth>
          <TextField
            label="ابحث عن سؤال"
            name="name"
            InputProps={{
              style: { borderColor: "#ff0000" },
            }}
            // value={formData.name}
            // onChange={handleInputChange}
          />
        </FormControl>
      </Container>
      <form>
        {questions.map((question) => {
          //pass in labels
          const labels = {
            a: question.a,
            b: question.b,
            c: question.c,
            d: question.d,
          };

          return (
            <div key={question.qname}>
              <Container>
                <Paper elevation={3} square style={styles.paper}>
                  <Typography sx={{ marginTop: "16px", marginRight: "10px" }}>
                    {question.qname}
                  </Typography>

                  <FormRadio labels={labels} answer={question.answer} />

                  <Typography align="left" sx={{ margin: "16px" }}>
                    the ansewer is : {question.answer}
                  </Typography>
                </Paper>
              </Container>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Questions;
