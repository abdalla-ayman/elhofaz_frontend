"use client";
import { useState, Fragment } from "react";
import { signup } from "../../../lib/users";

//compnents
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import MobileStepper from "@mui/material/MobileStepper";
import Container from "@mui/material/Container";

// steps
import Information from "./Information";
import Stage from "./Stage";
import Track from "./Track";

const steps = ["اختيار المسار", "المرحلة", "المعلومات الاساسية"];

let track_options = [
  { label: "التأهيلي", value: "المسار التأهيلي" },
  { label: "الحافظين الجدد", value: "الحافظين" },
  { label: "الخاتمين", value: "الخاتمين" },
];

export default function Register() {
  let [state, setState] = useState({
    username: "",
    passowrd: "",
    name: "",
    gender: "male",
    age: "",
    nationality: "",
    residential: "",
    country_code: "",
    phone_number: "",
    role: "user",
    track: "",
  });

  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);

  // stepper state and functions
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //role/track

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let res = await signup({
        username,
        password,
        fullname,
        gender,
        age,
        nationality,
        residential,
        phone_number,
        track,
        role,
      });

      let data = await res.json();
      if (res.ok) {
        // success logic
      } else {
        //failure logic
        setError(data.message);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        my: 5,
      }}
      maxWidth={"xs"}
    >
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        التسجيل في مقارئ الحفاظ
      </Typography>

      {activeStep == 0 && <Information state={state} setState={setState} />}
      {activeStep == 1 && state.role == "user" && <Stage />}
      {activeStep == 2 && state.role == "user" && <Track />}

      <MobileStepper
        variant="progress"
        steps={state.role === "user" ? 3 : 1}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
            التالي
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            السابق
          </Button>
        }
      />
      <form
        className="w-80 m-auto my-6 flex flex-col "
        onSubmit={handleSubmit}
      ></form>
    </Container>
  );
}
