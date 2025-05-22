// category list fetch api
const url = process.env.API_URL;
const token = process.env.API_AUTH;

async function categoryFetcher() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/categories`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

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
  console.log("payload", payload);

  const res = await fetch("/api/categories/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    console.log("error");
  }
  console.log(res);

  return res.json();
}

export { categoryFetcher, categoryPost };
