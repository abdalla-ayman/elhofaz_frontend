"use client";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
//components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  let [password, setPassword] = useState("");
  let [nw_password, setNw_Password] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
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
        <h2 className="text-2xl mb-4 text-center">تغيير كلمة السر</h2>
        <TextField
          id="outlined-basic"
          onChange={(e) => setPassword(e.target.value)}
          label="كلمة السر"
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
        <div>
          {error && <p className="text-red-500 mt-1 mb-3">{error}</p>}

          <Button variant="contained" type="submit" sx={{ my: 1 }}>
            تغيير
          </Button>
        </div>
      </form>
    </div>
  );
}
