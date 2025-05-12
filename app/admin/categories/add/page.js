import { Add } from "@mui/icons-material";
import AdminHeader from "../../_component/adminglobal/header";

export default function AdminAddCategory() {
    return (
    <div>
        <AdminHeader title="Add Category"/>
        <div className="py-10 text-center">
        <p className="font-semibold">New Category</p>
        <div className="mt-10 grid justify-center">
            <section className="flex flex-col gap-2">
<label>Category Name </label>
            <input className="p-2 border border-black w-100 dark:border-gray-600 rounded bg-slate-200  dark:bg-gray-900"/>
            </section>
                 <section className="flex flex-col gap-2 mt-5 dark:border-gray-600">
<label>Description</label>
            <input className="p-2 border border-black w-100 dark:border-gray-600 rounded bg-slate-200 dark:bg-gray-900"/>
            </section>
                 <section className="flex flex-col gap-2 mt-5 dark:border-gray-600">
<label>Parent Category </label>
            <input className="p-2 border border-black w-100 dark:border-gray-600 rounded bg-slate-200 dark:bg-gray-900"/>
            </section>
            <section className="mt-10">
                <button className="bg-blue-900 text-white px-5 py-2 hover:bg-blue-600 transition-all duration-500 cursor-pointer hover:scale-95"><Add/> Add Category</button>
            </section>
        </div>
        
        </div>
    </div>);
}