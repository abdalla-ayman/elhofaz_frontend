const apiUrl = "https://tahfeeth.frmawy.com/api";

export async function getTeacher() {
    const result = await fetch(`${apiUrl}/teacher`, {
      method: "GET",
    });
    return await result.json();
  }

  export async function getSession() {
    const result = await fetch(`${apiUrl}/sessions`, {
      method: "GET",
    });
    return await result.json();
  }