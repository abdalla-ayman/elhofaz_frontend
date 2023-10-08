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
<<<<<<< HEAD
      "Content-Type": "application/json",
=======
>>>>>>> 0fb3af6e8c3e82d09daccc456916f703d9e93d51
    },
    body: formData,
  });
  return await result.json();
}

export async function updateProfile(image, token) {
  const result = await fetch(`${apiUrl}/update_profile`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(image),
  });
  return await result.json();
}
