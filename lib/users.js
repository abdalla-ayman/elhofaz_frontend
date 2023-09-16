const apiUrl = "http://localhost:8000/api/users";

export async function login(credentials) {
  const result = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = await result.json();
  return data;
}

export async function signup(body) {
  const result = await fetch(`${apiUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await result.json();
}
