const apiUrl = "http://localhost:8000/api/questions";

export async function getQuestions(body) {
  let res = await fetch(`${apiUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
}

export async function getQuestion(id) {
  let res = await fetch(`${apiUrl}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
}

export async function addQuestion(body) {
  let res = await fetch(`${apiUrl}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(body),
  });

  return await res.json();
}

export async function editQuestion(body) {
  let res = await fetch(`${apiUrl}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(body),
  });

  return await res.json();
}

export async function deleteQuestion(id) {
  let res = await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
}
