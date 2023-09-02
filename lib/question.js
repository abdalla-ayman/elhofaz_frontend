export default async function login(id) {
  let res = await fetch(`http://localhost:8000/api/questions/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}
