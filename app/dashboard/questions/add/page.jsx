"use client";
import FormTextarea from "@/app/components/FormTextarea";
import FormSelect from "@/app/components/FormSelect";
import { useState } from "react";

let options = [
  {
    label: "a",
    value: "a",
  },
  {
    label: "b",
    value: "b",
  },
  {
    label: "c",
    value: "c",
  },
  {
    label: "d",
    value: "d",
  },
];
export default function Questions() {
  let [question, setQuestion] = useState("");
  let [a, setA] = useState("");
  let [b, setB] = useState("");
  let [c, setC] = useState("");
  let [d, setD] = useState("");
  let [answer, setAnswer] = useState("");

  return (
    <div className="my-10">
      <form className="w-80 m-auto ">
        <h2 className="text-2xl ">اضافة سؤال</h2>

        <FormTextarea setValue={setQuestion} label="السؤال" />
        <FormTextarea setValue={setA} label="الاجابة a" />
        <FormTextarea setValue={setB} label="الاجابة b" />
        <FormTextarea setValue={setC} label="الاجابة c" />
        <FormTextarea setValue={setD} label="الاجابة d" />

        <FormSelect
          setValue={setAnswer}
          label="الاجابة الصحيحة"
          options={options}
        />
        <div>
          <button type="submit" className="bg-sky-500 mx-auto block">
            اضافة
          </button>
        </div>
      </form>
    </div>
  );
}
