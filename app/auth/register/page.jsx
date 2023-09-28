"use client";
import { useState, useEffect, Fragment } from "react";
import { signup } from "../../../lib/auth";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

//compnents
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MobileStepper from "@mui/material/MobileStepper";
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
    password: "",
    name: "",
    email: "",
    gender: "male",
    age: "",
    nationality: "",
    residation: "",
    phone_code: "",
    phone: "",
    role: "user",
    track: "mid_level",
  });
  let [acceptedConditions, setAcceptedConditions] = useState(false);
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let [loadingMsg, setLoadingMsg] = useState("جاري التسجيل");
  let { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/");
  }, [session, router]);

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
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (activeStep == 0) {
      for (const input_field in state) {
        if (state[input_field] == "") {
          setError("يجب ملء كل المعلومات الاساسية");
          setLoading(false);
          return false;
        }
      }

      if (state.username.length < 5) {
        setError("يجب ان يتكون اسم المستخدم من ٥ احرف على الاقل");
        setLoading(false);
        return false;
      }

      if (state.password.length < 8) {
        setError("يجب ان تتكون كلمة المرور من ٨ احرف على الاقل");
        setLoading(false);
        return false;
      }

      if (!state.email.match(mailFormat)) {
        setError("صيغة البريد الالكتروني غير صحيحة");
        setLoading(false);
        return false;
      }


      if (!acceptedConditions) {
        setError("يجب الموافقة على شروط البرنامج للاستمرار");
        setLoading(false);
        return false;
      }
    }

    return true;
  };
  //role/track

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      setLoadingMsg("جاري التسجيل");
      if (!formControl()) return;

      let { message, code, data } = await signup(state);
      if (code == 200) {
        setLoadingMsg("جاري تسجيل الدخول");
        await signIn("credentials", {
          username: state.username,
          password: state.password,
          redirect: false,
        });
        router.push("/");
      } else {
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
    <Fragment>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        التسجيل في مقارئ السفرة
      </Typography>

      {activeStep == 0 && (
        <Information
          state={state}
          setState={setState}
          acceptedConditions={acceptedConditions}
          setAcceptedConditions={setAcceptedConditions}
        />
      )}
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
      <Loading loading={loading} text={loadingMsg} />
    </Fragment>
  );
}
