"use client";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
//components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { confirmCode } from "@/lib/auth";
import Loading from "@/app/components/Loading";

export default function GetCodeEmail() {
  let [code, setCode] = useState("");
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");
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
      let res = await confirmCode({ email, code });

      console.log(res);
      if (res.code == 200) {
        setLoading(false);
        setError("");
        setSuccess("تم تأكيد الكود بنجاح");
        router.push(`/auth/reset_password/new_password?email=${email}`);
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
        <h2 className="text-2xl mb-4 text-center">أدخل الكود</h2>
        <TextField
          id="outlined-basic"
          onChange={(e) => setCode(e.target.value)}
          label="ادخل الكود"
          variant="outlined"
          type="text"
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
          تأكيد الكود
        </Button>
        </form>
      <Loading loading={loading} text={"جاري التأكيد"} />
    </>
  );
}
