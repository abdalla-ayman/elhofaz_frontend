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
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let [countries, setCountries] = useState(country_list);
  //role/track

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let res = await fetch("http://localhost:8000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          fullname,
          gender,
          age,
          nationality,
          residential,
          phone_number,
          track,
          role,
        }),
      });
      let data = await res.json();
      if (res.ok) {
        // success logic
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
    <div>
      <form className="w-80 m-auto my-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl text-center">التسجيل في مقارئ الحفاظ</h2>
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
          label="مكان الاقامة"
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

        {error && <p className="text-red-500 mt-1 mb-3">{error}</p>}
        <div>
          <button type="submit" className="bg-sky-500 mx-auto block">
            التسجيل
          </button>
        </div>
      </form>
    </div>
  );
}
