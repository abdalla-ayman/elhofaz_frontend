"use client";
import { useState, useEffect, Fragment } from "react";
import { signup, register_status } from "../../../lib/auth";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

//compnents
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MobileStepper from "@mui/material/MobileStepper";
import Alert from "../../components/Alert";
import { Container, Box } from "@mui/material";
import Loading from "../../components/Loading";
// steps
import Information from "./Information";
import Close from "./Close";

export default function Register() {
  let [state, setState] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    gender: "male",
    birth_date: "",
    nationality: "",
    residation: "",
    phone_code: "",
    phone: "",
    role: "user",
  });
  let [acceptedConditions, setAcceptedConditions] = useState(false);
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let [loadingMsg, setLoadingMsg] = useState("جاري التسجيل");

  // registrtsion close things
  let [registerOpen, setRegisterOpen] = useState(true);
  let [start_date, setStartDate] = useState("");
  let [end_date, setEndDate] = useState("");

  let { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/");
  }, [session, router]);

  useEffect(() => {
    (async function () {
      let res = await register_status();
      if (res.code == 200) {
        setStartDate(res.data.start_date);
        setEndDate(res.data.end_date);
        setRegisterOpen(res.data.reservation_open);
      }
    })();
    router.prefetch("/");
  }, []);

  // stepper state and functions
  const [activeStep, setActiveStep] = useState(0);
  let [steps, setSteps] = useState(3);

  useEffect(() => {
    setError("");
  }, [state]);

  const formControl = () => {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    for (const input_field in state) {
      if (state[input_field] == "") {
        setError("يجب ملء كل المعلومات اﻷساسية");
        setLoading(false);
        return false;
      }

      if (!/^[ ء-ي]+$/.test(state.name)) {
        setError("يجب أن يتكون الإسم الرباعي من الاحرف العربية فقط");
        setLoading(false);
        return false;
      }

      if (!/^[a-zA-Z0-9_]*$/.test(state.username)) {
        setError(
          "يجب أن يتكون إسم المستخدام من الأحرف والأرقام الانجليزية بالإضافة ل _ فقط"
        );
        setLoading(false);
        return false;
      }

      if (!/^[a-zA-Z0-9_]*$/.test(state.password)) {
        setError(
          "يجب أن تتكون كلمة المرور من الأحرف والأرقام الانجليزية بالإضافة ل _ فقط"
        );
        setLoading(false);
        return false;
      }

      if (state.username.length < 5) {
        setError("يجب أن يتكون إسم المستخدم من ٥ أحرف على الأقل");
        setLoading(false);
        return false;
      }

      if (state.password.length < 8) {
        setError("يجب ان تتكون كلمة المرور من ٨ أحرف على الأقل");
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
        router.replace("/");
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

      {!registerOpen && (
        <>
          <Information
            state={state}
            setState={setState}
            acceptedConditions={acceptedConditions}
            setAcceptedConditions={setAcceptedConditions}
          />

          {/* {error && (
            <Alert severity="error" icon={false}>
              {error}
            </Alert>
          )} */}
          {error && <Alert severity="error" message={error} />}

         

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                mx: "auto",
              }}
              size="medium"
              variant="outlined"
              disabled={false}
              onClick={handleSubmit}
            >
              التسجيل
            </Button>
          </Box>
          <Typography
            align="center"
            sx={{
              my: 1,
            }}
            variant="subtitle2"
          >
            سيتم اغلاق التسجل في {end_date}
          </Typography>

          <Loading loading={loading} text={loadingMsg} />
        </>
      )}

      {registerOpen && <Close startDate={start_date} />}
    </Fragment>
  );
}
