import { useRouter } from "next/navigation";

export default function AdminNotification({ message, setMessage }) {
  const router = useRouter();

  const handleOk = () => {
    setMessage(null);
    router.push("/admin/categories");
  };

  return (
    <div className="fixed grid justify-center items-center backdrop-blur bg-black/40 top-0 left-0 w-full h-screen z-100">
      <div className="bg-white p-5">
        {message}
        <div onClick={handleOk} className="bg-black px-5 py-2">
          OK
        </div>
      </div>
    </div>
  );
}
