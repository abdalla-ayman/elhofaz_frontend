const apiUrl = "https://tahfeeth.frmawy.com/api";
//https://tahfeeth.frmawy.com

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
  const result = await fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await result.json();
}

export async function getCode(body) {
  const result = await fetch(`${apiUrl}/user/get_code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await result.json();
}

export async function confirmCode(body) {
  const result = await fetch(`${apiUrl}/user/ConfirmCode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await result.json();
}

export async function updatePassword(body) {
  const result = await fetch(`${apiUrl}/user/UpdatePassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await result.json();
}

export async function register_status() {
  const result = await fetch(`${apiUrl}/setting`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await result.json();
}
