const apiUrl = "https://tahfeeth.frmawy.com/api";

export async function login(credentials) {
  const result = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await result.json();
  console.log(data);
  return data;
}

export async function signup(body) {
  const result = await fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await result.json();
}
