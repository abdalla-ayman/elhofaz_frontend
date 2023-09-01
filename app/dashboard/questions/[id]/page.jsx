"use client";
import { useState, useEffect } from "react";
import getQuestion from "@/lib/question";
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

export default function Question({ params }) {
  let id = params.id;

  let [question, setQuestion] = useState("");
  let [a, setA] = useState("");
  let [b, setB] = useState("");
  let [c, setC] = useState("");
  let [d, setD] = useState("");
  let [answer, setAnswer] = useState("");
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

  useEffect(async () => {
    let { question } = await getQuestion(id);
    setQuestion(question.question);
    setA(question.a);
    setB(question.b);
    setC(question.c);
    setD(question.d);
    setAnswer(question.answer);
  }, []);

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
    <div>
      <div className="my-10">
        <form className="w-80 m-auto  " onSubmit={handleSubmit}>
          <h2 className="text-2xl ">اضافة سؤال</h2>

          <FormTextarea
            value={question}
            setValue={setQuestion}
            label="السؤال"
          />
          <FormTextarea value={a} setValue={setA} label="الاجابة a" />
          <FormTextarea value={b} setValue={setB} label="الاجابة b" />
          <FormTextarea value={c} setValue={setC} label="الاجابة c" />
          <FormTextarea value={d} setValue={setD} label="الاجابة d" />

          <FormSelect
            setValue={setAnswer}
            label="الاجابة الصحيحة"
            options={options}
            defaultVal={answer}
          />
          {error && <p className="text-red-500 mt-1 mb-3">{error}</p>}

          <div className="flex ">
            <div className="mx-2">
              <button className="bg-sky-500 mx-auto block">تعديل</button>
            </div>
            <div className="mx-2">
              <button className="bg-red-500 mx-auto block">حذف</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
