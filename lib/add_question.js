export default function login(body) {
  return fetch("http://localhost:8000/api/questions/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}
