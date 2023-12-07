const apiUrl = "https://tahfeeth.frmawy.com/api/user";

export async function getExam(token) {
  const result = await fetch(`${apiUrl}/questions`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  return await result.json();
}

export async function submitExam(formData, token) {
  const result = await fetch(`${apiUrl}/store_records`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: formData,
  });
  return await result.json();
}
