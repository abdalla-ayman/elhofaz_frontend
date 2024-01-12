const apiUrl = "https://dev.tahfeeth.org/api";

// this should be fetched from local storage or cookies, leaving for testing right now
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzAyMTM3OTc3LCJuYmYiOjE3MDIxMzc5NzcsImp0aSI6IlR1aWgwRmwweEhHQ3pHdGoiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.E2FG8tz5hVQW2b_m-dVvO4fupwH56oIoAaDaAl5tIIk";

const getTruthyKeys = (object) => {
  const o = Object.keys(object).reduce((obj, key) => {
    const val = object[key];
    if (val && val !== "null") {
      obj[key] = val;
    }
    return obj;
  }, {});
  return o;
};

export async function getReports(searchParams) {
  const nonNullParams = getTruthyKeys(searchParams);
  const result = await fetch(
    `${apiUrl}/user/reports?${new URLSearchParams(nonNullParams)}`,
    {
      headers: { Authorization: token },
    }
  );
  const { data, message, code } = await result.json();
  if (code > 201) {
    return { data: null, error: message };
  }
  const { total, data: list } = data;
  return { total, list, error: null };
}

export async function updateReport(updatedData) {
  const result = await fetch(`${apiUrl}/user/reports/${updatedData.id}}`, {
    headers: { Authorization: token, "content-type": "application/json" },
    body: JSON.stringify(updatedData),
    method: "PUT",
  });
  const { message, code } = await result.json();
  if (code > 201) {
    return { message: null, error: message };
  }
  return { message, error: null };
}
