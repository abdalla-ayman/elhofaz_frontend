import getQuestions from "@/lib/questions";
import Link from "next/link";

export default async function Questions() {
  let data = await getQuestions();
  console.log(data);
  return (
    <div className="my-10">
      <h2>قائمة الاسئلة</h2>
      {data ? (
        data.questions.map((question) => (
          <Link
            id={question._id}
            key={question._id}
            href={`/dashboard/questions/${question._id}`}
          >
            <div>{question.question.slice(0, 20)}</div>
          </Link>
        ))
      ) : (
        <div> no no no</div>
      )}
    </div>
  );
}
