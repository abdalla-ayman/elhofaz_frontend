"use client";
import { useState, useEffect } from "react";

import { getQuestion, deleteQuestion, editQuestion } from "@/lib/questions";

// components
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
  let [question, setQuestion] = useState({});
  let [a, setA] = useState("");
  let [b, setB] = useState("");
  let [c, setC] = useState("");
  let [d, setD] = useState("");
  let [answer, setAnswer] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await getQuestion(params.id);
      setQuestion(response.question);
      setA(response.a);
      setB(response.b);
      setC(response.c);
      setD(response.d);
      setAnswer(response.answer);
    }
    fetchData();
  }, [params]);

  let _deleteQuestion = async () => {
    try {
      let response = await deleteQuestion(params.id);
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  let _editQuestion = async () => {
    try {
      let response = await editQuestion({
        question,
        a,
        b,
        c,
        d,
        answer,
        id: params.id,
      });
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-10">
      {question && (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <FormTextarea
            disabled={true}
            label="السؤال"
            setVal
            value={question.question}
          />
          <FormTextarea
            disabled={true}
            label="a"
            setVal={setA}
            value={question.a}
          />
          <FormTextarea
            disabled={true}
            label="b"
            setVal={setB}
            value={question.b}
          />
          <FormTextarea
            disabled={true}
            label="c"
            setVal={setC}
            value={question.c}
          />
          <FormTextarea
            disabled={true}
            label="c"
            setVal={setD}
            value={question.d}
          />
          <FormSelect
            label="الاجابة الصحيحة:"
            defaultVal={{
              label: question.answer,
              value: question.answer,
            }}
            options={options}
            disabled={true}
          />
          <div className="flex mt-10">
            <button
              className="bg-sky-500 mx-2 block btn"
              onClick={_editQuestion}
            >
              تعديل
            </button>

            <button
              type="submit"
              className="bg-red-500 mx-2 block btn"
              onClick={_deleteQuestion}
            >
              حذف
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
