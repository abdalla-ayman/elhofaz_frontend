"use client";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
//components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Typography } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Loading from "@/app/components/Loading";

export default function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let [showPassword, setShowPassword] = useState(false);
  let { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/");
  }, [session, router]);

  useEffect(() => {
    setError(false);
  }, [username, password]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
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
            variant="outlined"
            type="text"
            className="my-5"
            sx={{
              my: 1,
              width: "calc(100% + 36px)",
              transform: "translateX(-18px)",
            }}
            required
          />
        </FormControl>

        <FormControl variant="outlined" sx={{ my: 2 }}>
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

        <Typography>
          نسيت كلمة السر؟{" "}
          <Link
            href={"/auth/reset_password"}
            style={{
              textDecoration: "underline",
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
          <Link href={"/auth/register"}>
            <Button
              variant="contained"
              type="submit"
              sx={{ m: 1, bgcolor: "primary.light" }}
            >
              ليس لديك حساب ؟
            </Button>
          </Link>
        </div>
      </form>
      <Loading loading={loading} text={"جاري تسجيل الدخول"} />
    </div>
  );
}
