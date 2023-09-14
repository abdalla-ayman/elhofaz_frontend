"use client";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
//components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      signIn("credentials", { username, password, redirect: false });

      // }
    } catch (error) {
      // console.log(error);
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
        />
        <TextField
          id="outlined-basic"
          onChange={(e) => setPassword(e.target.value)}
          label="كلمة المرور"
          variant="outlined"
          type="password"
          sx={{ my: 1 }}
        />
        <div>
          {error && <p className="text-red-500 mt-1 mb-3">{error}</p>}

          <Button variant="contained" type="submit"  sx={{ my: 1 }}>
            تسجيل الدخول
          </Button>
        </div>
      </form>
    </div>
  );
}
