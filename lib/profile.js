const apiUrl = "https://api.tahfeeth.org/api/user";

export async function getProfileData(token) {
  const result = await fetch(`${apiUrl}/profile`, {
    method: "GET",
    next: { tags: ["profile"], revalidate: 3600 },
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

export async function deletePhoto(formData, token) {
  const result = await fetch(`${apiUrl}/delete_image`, {
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
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await result.json();
}


export async function changeTrack(data, token) {
  const result = await fetch(`${apiUrl}/change_track`, {
    method: "POST",

    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await result.json();
}
// export async function revalidateProfile() {
//   const result = await fetch(`/api/revalidate?tag=profile`, {
//     method: "POST",

//   });
//   console.log(result, "rre");
//   return await result.json();
// }
