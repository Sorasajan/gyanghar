// category list fetch api
async function categoryFetcher() {
  const url = process.env.API_URL;
  const token = process.env.API_AUTH;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      //   throw new Error(data.message || res.statusText || "Fetch error");
      console.log("no data");

      return;
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("error in fetching");

    // throw new Error(err.message || "Fetch Error");
    return;
  }
}

async function categoryPost(payload) {
  const url = process.env.API_URL;
  const token = process.env.API_AUTH;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Token ${token}`,

      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    mode: "cors",
  });

  if (!res.ok) {
    console.log("error");
  }
  console.log("success");

  return;
}

export { categoryFetcher, categoryPost };
