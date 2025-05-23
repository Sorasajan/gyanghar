import { NextResponse } from "next/server";

export async function GET(req, context) {
  const { id } = await context.params; // ✅ Await here

  try {
    const response = await fetch(
      `${process.env.API_URL}/api/categories/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return NextResponse.json("No Data", { status: response.text });
    }

    const data = await response.json();
    return NextResponse.json(data.data);
  } catch (error) {
    console.error("Fetch failed:", error);
    return NextResponse.json({ message: "Failed to fetch" }, { status: 500 });
  }
}
