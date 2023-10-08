const apiUrl = "https://tahfeeth.frmawy.com/api/user";

export async function getProfileData(token) {
  const result = await fetch(`${apiUrl}/profile`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  return await result.json();
}

export async function updatePhoto(formData, token) {
  const result = await fetch(`${apiUrl}/update_image`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: formData,
  });
  return await result.json();
}

export async function updateProfile(data, token) {
  const result = await fetch(`${apiUrl}/update_profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });
  return await result.json();
}
