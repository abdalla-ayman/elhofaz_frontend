"use client";
import { useState } from "react";
import { useCookies } from "next-client-cookies";
//components
import FormInput from "../../components/FormInput";
import login from "../../../lib/login";

export default function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let cookies = useCookies();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let res = await login({
        username,
        password,
      });
      let data = await res.json();
      if (res.ok) {
        // success logic
        cookies.set("auth_token", data.token);
      } else {
        //failure logic
        setError(data.message);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex">
      <form className="w-80 m-auto" onSubmit={handleSubmit}>
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
