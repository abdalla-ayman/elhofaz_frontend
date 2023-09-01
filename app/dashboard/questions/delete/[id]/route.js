import { NextResponse } from "next/server";
export async function GET(request) {
  // const res = await fetch(`http://localhost:8000/api/questions/$`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   method: "DELETE",
  // });
  // const data = await res.json();
  let data;
  console.log(request.searchParams);
  console.log(request.params);

  return NextResponse.json(data);
}
