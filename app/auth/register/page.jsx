"use client";
import { useState, Fragment } from "react";
import country_list from "/public/countries.json";
import {signup} from "../../../lib/users";

//compnents
import {
  MenuItem,
  Select,
  TextField,
  InputLabel,
  Autocomplete,
  Box,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import FormSelect from "../../components/FormSelect";

const steps = ["اختيار المسار", "المرحلة", "المعلومات الاساسية"];

let track_options = [
  { label: "التأهيلي", value: "المسار التأهيلي" },
  { label: "الحافظين الجدد", value: "الحافظين" },
  { label: "الخاتمين", value: "الخاتمين" },
];

export default function Register() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [fullname, setFullname] = useState("");
  let [gender, setGender] = useState("male");
  let [age, setAge] = useState(0);
  let [nationality, setNationality] = useState("");
  let [residential, setResidential] = useState("");
  let [phone_number, setPhone_number] = useState("");
  let [role, setRole] = useState("user");
  let [track, setTrack] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let [countries, setCountries] = useState(country_list);

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
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Fragment>
      )}
      <form className="w-80 m-auto my-6 flex flex-col " onSubmit={handleSubmit}>
        <h2 className="text-2xl text-center">التسجيل في مقارئ الحفاظ</h2>
      </form>
    </div>
  );
}
