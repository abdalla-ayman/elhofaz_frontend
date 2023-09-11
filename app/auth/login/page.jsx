"use client";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
//components
import FormInput from "../../components/FormInput";
import login from "../../../lib/login";

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
      <form className="w-80 m-auto" action={"#"} onSubmit={handleSubmit}>
        <h2 className="text-2xl text-center">تسجيل الدخول</h2>
        <FormInput label="اسم المستخدم" type="text" setValue={setUsername} />
        <FormInput label="كلمة المرور" type="password" setValue={setPassword} />
        <div>
          {error && <p className="text-red-500 mt-1 mb-3">{error}</p>}

          <button type="submit" className="bg-sky-500 mx-auto block">
            تسجيل الدخول
          </button>
        </div>
      </form>
    </div>
  );
}
