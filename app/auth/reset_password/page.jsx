"use client";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

//components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { getCode } from "@/lib/users";
import Loading from "@/app/components/Loading";

export default function ChangePassword() {
  let [email, setEmail] = useState("");
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");
  let [loading, setLoading] = useState(false);
  let { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(session);
  }, [session]);

  const handleSubmit = async (e) => {
    try {
      setLoading(true);

      e.preventDefault();

      //send request
      let res = await getCode({ email });
      console.log(res);

      if (res.code == 200) {
        setLoading(false);
        setSuccess(res.message);
        setError("");
        router.push(`/auth/reset_password/code/${email}`);
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
    <div className="h-screen flex">
      <form
        className="w-80 m-auto flex items-center flex-col"
        action={"#"}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4 text-center">تأكيد الايميل</h2>
        <TextField
          id="outlined-basic"
          onChange={(e) => setEmail(e.target.value)}
          label="ادخل الايميل"
          variant="outlined"
          type="text"
          className="my-5"
          sx={{ my: 1 }}
        />
        <div>
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
            تأكيد الايميل
          </Button>
        </div>
      </form>
      <Loading loading={loading} text={"جاري تأكيد الايميل"} />
    </div>
  );
}
