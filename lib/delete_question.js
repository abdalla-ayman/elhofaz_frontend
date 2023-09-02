export default function deleteQuestion(id) {
  return fetch(`http://localhost:8000/api/questions/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
