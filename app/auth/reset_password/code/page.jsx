"use client";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
//components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function Login() {
  let [code, setCode] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(session);
  }, [session]);

  const handleSubmit = async (e) => {
    try {
      router.push("/auth/reset_password/new_password");
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
        <h2 className="text-2xl mb-4 text-center">ادخل الكود</h2>
        <TextField
          id="outlined-basic"
          onChange={(e) => setCode(e.target.value)}
          label="ادخل الكود"
          variant="outlined"
          type="text"
          className="my-5"
          sx={{ my: 1 }}
        />
        <div>
          {error && <p className="text-red-500 mt-1 mb-3">{error}</p>}

          <Button variant="contained" type="submit" sx={{ my: 1 }}>
            تأكيد الكود
          </Button>
        </div>
      </form>
    </div>
  );
}
