"use client";
import { useState, useMemo } from "react";
import country_list from "/public/countries.json";

//compnents
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";

let gender_options = [
  { label: "ذكر", value: "male" },
  { label: "انثى", value: "female" },
];

let role_options = [
  {
    label: "شيخ",
    value: "shekh",
  },
  {
    label: "طالب",
    value: "student",
  },
];

let track_options = [
  { label: "التأهيلي", value: "المسار التأهيلي" },
  { label: "الحافظين الجدد", value: "الحافظين" },
  { label: "الخاتمين", value: "الخاتمين" },
];

export default function Register() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [fullname, setFullname] = useState("");
  let [gender, setGender] = useState("male");
  let [age, setAge] = useState(0);
  let [nationality, setNationality] = useState("");
  let [residential, setResidential] = useState("");
  let [phone_number, setPhone_number] = useState("");
  let [role, setRole] = useState("student");
  let [track, setTrack] = useState("");
  let [countries, setCountries] = useState(country_list);
  //role/track

  return (
    <div>
      <form >
        <FormInput label="اسم المستخدم" type="text" setValue={setUsername} />
        <FormInput label="كلمة المرور" type="password" setValue={setPassword} />
        <FormInput label="الاسم الرباعي" type="text" setValue={setFullname} />
        <FormInput label="رقم الهاتف" type="tel" setValue={setPhone_number} />
        <FormInput label="العمر" type="number" setValue={setAge} />
        <FormSelect
          options={gender_options}
          label="النوع"
          setValue={setGender}
          defaultVal="male"
        />
        <FormSelect
          options={countries.map((country) => ({
            label: country.name,
            value: country.name,
          }))}
          label="الجنسية"
          setValue={setNationality}
        />
        <FormSelect
          options={countries.map((country) => ({
            label: country.name,
            value: country.name,
          }))}
          label="السكن"
          setValue={setResidential}
        />
        <FormSelect
          options={role_options}
          label="التسجيل ك "
          setValue={setRole}
          defaultVal="student"
        />
        {role === "student" && (
          <FormSelect
            options={track_options}
            label="المسار"
            setValue={setTrack}
          />
        )}

        <div>
          <button type="submit">التسجيل</button>
        </div>
      </form>
    </div>
  );
}
