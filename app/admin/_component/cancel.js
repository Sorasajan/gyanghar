"use client";
import { Cancel } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function AdminCancel() {
  const router = useRouter();

  const handleCancel = () => {
    const confirm = window.confirm("Are You Sure you want to cancel?");

    if (confirm) {
      router.back();
    }
  };
  return (
    <div>
      <button
        onClick={handleCancel}
        className="bg-red-900 text-white px-5 py-2 hover:rounded-lg hover:bg-red-600 transition-all duration-500 cursor-pointer hover:scale-95"
      >
        <Cancel /> Cancel
      </button>
    </div>
  );
}
