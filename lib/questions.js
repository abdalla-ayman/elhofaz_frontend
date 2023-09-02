export default async function login(body) {
  let res = await fetch("http://localhost:8000/api/questions/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
    body: JSON.stringify(body),
  });

  return res.json()

}
