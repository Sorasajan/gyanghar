// category list fetch api
async function categoryFetcher() {
  const url = "https://gyanghar.loca.lt/api/categories";
  const token =
    "txteyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE2OTYyMzQ1NjAsImV4cCI6MTY5NjIzODE2MH0.rKcsAl6CzBdX1XK6m2tXAnOaE5F1j4VzNw8X6S7pGiA";

  try {
    const res = await fetch(url, {
      method: "GET",
      Authorization: token,
      cache: "no-store",
    });

    const data = await res.json();

    if (!res.ok) {
      //   throw new Error(data.message || res.statusText || "Fetch error");
      console.log("no data");

      return;
    }

    return data;
  } catch (err) {
    console.log("error in fetching");

    // throw new Error(err.message || "Fetch Error");
    return;
  }
}

export default categoryFetcher;
