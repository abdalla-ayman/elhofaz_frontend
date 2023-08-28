"use client";
import { useState, useMemo } from "react";
import Select from "react-select";
import country_list from "/public/countries.json";

//compnents
import FormInput from "../../components/FormInput";

export default function Register() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [fullname, setFullname] = useState("");
  let [gender, setGender] = useState("male");
  let [age, setAge] = useState(0);
  let [nationality, setNationality] = useState("");
  let [residential, setResidential] = useState("");
  let [phone_number, setPhone_number] = useState("");
  let [countries, setCountries] = useState(country_list);
  //role/track

  return (
    <div>
      <form action="">
        <FormInput label="اسم المستخدم" type="text" setValue={setUsername} />
        <FormInput label="كلمة المرور" type="password" setValue={setPassword} />
        <FormInput label="كلمة المرور" type="password" setValue={setPassword} />
        <FormInput label="كلمة المرور" type="password" setValue={setPassword} />
        <FormInput label="كلمة المرور" type="password" setValue={setPassword} />
        <Select
          options={countries.map((country) => ({
            label: country.name,
            value: country.name,
          }))}
        />
        <Select
          options={countries.map((country) => ({
            label: country.name,
            value: country.name,
          }))}
        />
        
      </form>
    </div>
  );
}
