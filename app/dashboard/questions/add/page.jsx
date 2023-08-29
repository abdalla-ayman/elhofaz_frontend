"use client";
import { useState } from "react";
import add_question from "@/lib/add_question";

//components
import FormTextarea from "@/app/components/FormTextarea";
import FormSelect from "@/app/components/FormSelect";

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
export default function AddQuestions() {
  let [question, setQuestion] = useState("");
  let [a, setA] = useState("");
  let [b, setB] = useState("");
  let [c, setC] = useState("");
  let [d, setD] = useState("");
  let [answer, setAnswer] = useState("");
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let res = await add_question({
        question,
        a,
        b,
        c,
        d,
        answer,
      });

      let data = await res.json();
      if (res.ok) {
        // success logic
      } else {
        //failure logic
        setError(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-10">
      <form className="w-80 m-auto  " onSubmit={handleSubmit}>
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
        {error && <p className="text-red-500 mt-1 mb-3">{error}</p>}

        <div>
          <button type="submit" className="bg-sky-500 mx-auto block">
            اضافة
          </button>
        </div>
      </form>
    </div>
  );
}
