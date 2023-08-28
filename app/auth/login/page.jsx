"use client";
import { useState } from "react";
import FormInput from "../../components/FormInput";

export default function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  return (
    <div className="h-screen flex">
      <form className="w-80 m-auto ">
        <h2 className="text-2xl text-center">تسجيل الدخول</h2>
        <FormInput label="اسم المستخدم" type="text" setValue={setUsername} />
        <FormInput label="كلمة المرور" type="password" setValue={setPassword} />
        <div>
          <button type="submit" className="bg-sky-500 mx-auto block">
            تسجيل الدخول
          </button>
        </div>
      </form>
    </div>
  );
}
