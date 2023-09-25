"use client";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { updatePassword } from "@/lib/users";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
//components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Loading from "@/app/components/Loading";

export default function ResetPasswordEmail() {
  let [password, setPassword] = useState("");
  let [nw_password, setNw_Password] = useState("");
  let [success, setSuccess] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    console.log(session);
  }, [session]);

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();

      //post to server
      let res = await updatePassword({ email, password });

      console.log(res);
      if (res.code == 200) {
        setLoading(false);
        setError("");
        setSuccess("تم تغيير كلمة المرور");
        router.push("/auth/login");
      } else {
        setLoading(false);
        setError(res.message);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <>
      <form
        className="w-80 m-auto flex items-center flex-col"
        action={"#"}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4 text-center">تغيير كلمة السر</h2>
        <TextField
          id="outlined-basic"
          onChange={(e) => setPassword(e.target.value)}
          label="كلمة السر الجديدة"
          variant="outlined"
          type="password"
          className="my-5"
          sx={{ my: 1 }}
        />
        <TextField
          id="outlined-basic"
          onChange={(e) => setNw_Password(e.target.value)}
          label="تأكيد كلمة السر"
          variant="outlined"
          type="password"
          className="my-5"
          sx={{ my: 1 }}
        />
        {error && (
          <Alert severity="error" icon={false}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" icon={false}>
            {success}
          </Alert>
        )}

        <Button variant="contained" type="submit" sx={{ my: 1 }}>
          تغيير كلمة المرور{" "}
        </Button>
      </form>
      <Loading loading={loading} text={"يتم المعالجة"} />
    </>
  );
}
