"use client";
import { Delete } from "@mui/icons-material";

export default function AdminCategoryDelete({ data }) {
  const handleDelete = () => {
    const confirm = window.confirm(`Are you sure you want to delete ${data} ?`);
    if (confirm) {
      return;
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="px-10 py-2 bg-red-900 text-white hover:scale-95 hover:rounded hover:bg-red-600 transition-all duration-500 cursor-pointer"
    >
      <Delete /> Delete
    </button>
  );
}
