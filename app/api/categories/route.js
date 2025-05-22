import { Message } from "@mui/icons-material";

export async function GET() {
  try {
    const response = await fetch(`${process.env.API_URL}/categories/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/JSON",
      },
    });
    if (!response.ok) {
      return JSON.stringify("No Data");
    }

    const data = response.json();
    return data;
  } catch (error) {
    throw new Error("Error Fetching Data");
  }
}
