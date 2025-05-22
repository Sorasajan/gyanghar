import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json(); // extract payload

  const url = process.env.API_URL; // use private server-side env vars
  const token = process.env.API_TOKEN;
  console.log("body", body);

  try {
    const res = await fetch(`${url}/api/categories`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("API error:", errorText);
      return NextResponse.json(
        { error: "Failed to create category" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data); // send response back to client
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
