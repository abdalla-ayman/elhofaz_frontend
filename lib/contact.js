const apiUrl = "https://tahfeeth.frmawy.com/api";

export async function contact(body) {
  const result = await fetch(`${apiUrl}/contact_us`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await result.json();
}

export async function getFAQ() {
  const result = await fetch(`${apiUrl}/faqs`, {
    method: "GET",
  });
  return await result.json();
}
