"use client";
import { useState, useEffect, forwardRef } from "react";
import { signup } from "../../../lib/users";

//compnents
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import MobileStepper from "@mui/material/MobileStepper";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Loading from "../../components/Loading";
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
    track: "1",
  });

  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);

  // stepper state and functions
  const [activeStep, setActiveStep] = useState(0);
  let [steps, setSteps] = useState(3);

  useEffect(() => {
    if (state.role == "user") setSteps(3);
    else {
      setSteps(1);
      setActiveStep(0);
    }
  }, [state.role]);

  useEffect(() => {
    setError("");
  }, [state]);

  const handleNext = () => {
    if (!formControl()) return;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const formControl = () => {
    if (activeStep == 0) {
      for (const input_field in state) {
        if (state[input_field] == "") {
          setError("يجب ملء كل المعلومات الاساسية");
          setLoading(false);
          return false;
        }
      }
    }

    return true;
  };
  //role/track

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      if (!formControl()) return;

      let { message, code, data } = await signup(state);
      if (message) {
        setActiveStep(0);
        setError(message);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
      {activeStep == 2 && state.role == "user" && (
        <Track setState={setState} track={state.track} />
      )}

      {error && (
        <Alert severity="error" icon={false}>
          {error}
        </Alert>
      )}

      <MobileStepper
        variant="progress"
        steps={state.role === "user" ? 3 : 1}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          steps == 1 || activeStep == 2 ? (
            <Button size="large" disabled={false} onClick={handleSubmit}>
              التسجيل
            </Button>
          ) : (
            <Button
              size="large"
              onClick={handleNext}
              disabled={activeStep === 2}
            >
              التالي
            </Button>
          )
        }
        backButton={
          <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
            السابق
          </Button>
        }
      />
      <Loading loading={loading} text={"جاري التسجيل"} />
    </Container>
  );
}
