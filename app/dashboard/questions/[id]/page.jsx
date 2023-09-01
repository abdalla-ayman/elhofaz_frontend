import getQuestion from "@/lib/question";
import Link from "next/link";

export default async function Question({ params }) {
  let id = params.id;

  let { question } = await getQuestion(id);
  return (
    <div>
      {question && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl">السؤال:</h1>
          <h2 className="text-2xl text-start">{question.question}</h2>
          <h1 className="text-xl mt-8"> الاجابة الصحيحة:</h1>
          <h3 className="text-lg">{question[question.answer]}</h3>
          <div className="flex mt-10">
            <Link
              href={"/dashboard/questions/edit/" + question._id}
              className="bg-sky-500 mx-2 block btn"
            >
              تعديل
            </Link>
            <form
              action={"/dashboard/questions/delete/" + question._id}
              method="get"
            >
              <input type="text" hidden name="id" defaultValue={question._id} />
              <button type="submit" className="bg-red-500 mx-2 block btn">
                حذف
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
