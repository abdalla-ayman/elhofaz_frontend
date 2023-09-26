"use client";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
//components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Divider, Typography } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import Loading from "@/app/components/Loading";

//animation library test
import "animate.css";

export default function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let [showPassword, setShowPassword] = useState(false);
  let [rememberMe, setRememberMe] = useState(true);
  let { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/");
  }, [session, router]);

  useEffect(() => {
    setError(false);
  }, [username, password]);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      document.getElementById("outlined-adornment-password").focus();
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (rememberMe) {
        localStorage.setItem("username", username);
      } else localStorage.setItem("username", "");

      let { error, ok, status } = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (error) {
        setError(error);
      } else router.push("/");

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw error;
    }
  };

  return (
    <div className="">
      <form
        className="w-80 m-auto flex items-center flex-col"
        action={"#"}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4 text-center">تسجيل الدخول</h2>
        <FormControl variant="outlined">
          <TextField
            id="outlined-basic"
            onChange={(e) => setUsername(e.target.value)}
            label="اسم المستخدم / رقم الهاتف"
            value={username}
            variant="outlined"
            type="text"
            sx={{
              my: 1,
              width: "calc(100% + 36px)",
              transform: "translateX(-18px)",
            }}
            required
          />
        </FormControl>

        <FormControl variant="outlined" sx={{ mt: 2 }}>
          <InputLabel htmlFor="outlined-adornment-password">
            كلمة المرور
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            // onChange={}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="كلمة المرور"
            required
          />
        </FormControl>
        <FormControlLabel
          sx={{ mx: 2, alignSelf: "start" }}
          label="تذكرني"
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
          }
        />

        <Typography sx={{ mb: 2 }}>
          نسيت كلمة المرور؟{" "}
          <Link
            href={"/auth/reset_password"}
            style={{
              textDecoration: "underline",
              color: "#FB8B24",
            }}
          >
            اضغط هنا
          </Link>
        </Typography>
        <div>
          {error && (
            <Alert severity="error" icon={false}>
              {error}
            </Alert>
          )}
          <Button variant="contained" type="submit" sx={{ m: 1 }}>
            تسجيل الدخول
          </Button>

          <br />
          <Typography sx={{ textAlign: "center" }}>
            <Divider sx={{ mb: 2 }}>او</Divider>
            <Link
              href={"/auth/register"}
              style={{
                textDecoration: "underline",
                fontSize: "19px",
                color: "#FB8B24",
              }}
            >
              حساب جديد ؟
            </Link>
          </Typography>
        </div>
      </form>
      <Loading loading={loading} text={"جاري تسجيل الدخول"} />
    </div>
  );
}
