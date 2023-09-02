export default function editQuestion(body) {
  return fetch("http://localhost:8000/api/questions/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}
