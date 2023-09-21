"use client";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
//components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Link, Typography } from "@mui/material";
import Loading from "@/app/components/Loading";

export default function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/");
  }, [session]);

  useEffect(() => {
    setError(false);
  }, [username, password]);

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
    <div className="h-screen flex">
      <form
        className="w-80 m-auto flex items-center flex-col"
        action={"#"}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4 text-center">تسجيل الدخول</h2>
        <TextField
          id="outlined-basic"
          onChange={(e) => setUsername(e.target.value)}
          label="اسم المستخدم"
          variant="outlined"
          type="text"
          className="my-5"
          sx={{ my: 1 }}
          required
        />
        <TextField
          id="outlined-basic"
          onChange={(e) => setPassword(e.target.value)}
          label="كلمة المرور"
          variant="outlined"
          type="password"
          sx={{ my: 1 }}
          required
        />

        <Typography>
          نسيت كلمة السر؟ <Link href={"/auth/reset_password"}>اضغط هنا</Link>
        </Typography>
        <div>
          {error && (
            <Alert severity="error" icon={false}>
              {error}
            </Alert>
          )}
          <Button variant="contained" type="submit" sx={{ my: 1 }}>
            تسجيل الدخول
          </Button>
        </div>
      </form>
      <Loading loading={loading} text={"جاري تسجيل الدخول"} />
    </div>
  );
}
