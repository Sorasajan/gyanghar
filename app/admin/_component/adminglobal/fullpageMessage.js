import { Check } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function AdminNotification({ message, setMessage }) {
  const router = useRouter();

  const handleOk = () => {
    setMessage(null);
    router.push("/admin/categories");
  };

  return (
    <div className="fixed grid justify-center items-center backdrop-blur bg-black/40 top-0 left-0 w-full h-screen z-100">
      <div className="bg-white p-5 w-100">
        <div className="flex mt-5 gap-2 items-center text-green-700 justify-center">
          <Check className="border rounded-full text-green-700 text-xs" />
          {message}
        </div>

        <div
          onClick={handleOk}
          className="hover:scale-95 bg-blue-900 text-white my-5 px-10 hover:rounded-lg hover:bg-blue-800 transition-all duration-500 cursor-pointer py-2 text-center w-fit mx-auto "
        >
          OK
        </div>
      </div>
    </div>
  );
}
