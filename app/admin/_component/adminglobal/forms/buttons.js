"use client";
import { Cancel } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const AdminFormButtonsWithCancel = ({ title, Icon }) => {
  const router = useRouter();

  const handleCancel = () => {
    const confirm = window.confirm("Are You Sure you want to cancel?");

    if (confirm) {
      router.back();
    }
  };

  return (
    <section className="py-10 col-span-2 flex gap-5 justify-center">
      <button
        type="submit"
        className="bg-blue-900 text-white px-5 py-2 hover:rounded-lg hover:bg-blue-600 transition-all duration-500 cursor-pointer hover:scale-95"
      >
        <Icon /> {title}
      </button>
      <button
        onClick={handleCancel}
        type="none"
        className="bg-red-900 text-white px-5 py-2 hover:rounded-lg hover:bg-red-600 transition-all duration-500 cursor-pointer hover:scale-95"
      >
        <Cancel /> Cancel
      </button>
    </section>
  );
};

export { AdminFormButtonsWithCancel };
