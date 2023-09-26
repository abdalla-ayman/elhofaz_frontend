const apiUrl = "https://tahfeeth.frmawy.com/api/user";

export async function updatePhoto(formData) {
  const result = await fetch(`${apiUrl}/update_image`, {
    method: "POST",

    body: formData,
  });
  return await result.json();
}

export async function updateProfile(data) {
  const result = await fetch(`${apiUrl}/update_profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await result.json();
}
