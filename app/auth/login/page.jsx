"use client";
import { useState } from "react";
import FormInput from "../../components/FormInput";

export default function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  return (
    <div>
      <form action="">
        <FormInput label="اسم المستخدم" type="text" setValue={setUsername} />
        <FormInput label="كلمة المرور" type="password" setValue={setPassword} />
      </form>
    </div>
  );
}
