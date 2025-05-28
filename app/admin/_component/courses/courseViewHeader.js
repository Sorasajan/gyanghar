"use client";
import { FilterAltTwoTone, SearchTwoTone } from "@mui/icons-material";
import { useState } from "react";

export default function AdminCourseViewHeader() {
  const [filter, setFilter] = useState(false);
  return (
    <div className="pb-5">
      <div className="flex flex-1">
        <div className="bg-slate-200 rounded-l p-2 w-30 grid justify-center dark:bg-gray-700 border-b">
          <SearchTwoTone />
        </div>
        <input
          className="flex-1 px-5 py-2 border-b border-slate-200 w-full dark:border-gray-900 focus:outline-0 focus:bg-slate-200 dark:focus:border-b dark:focus:border-white focus:border-b focus:border-black dark:bg-gray-900 dark:focus:bg-gray-700 transition-all duration-500"
          placeholder="Search Courses"
        />
        <div className="bg-slate-200 p-2 w-30 grid justify-center dark:bg-gray-700 border-b rounded-r">
          Search
        </div>
        <div className="bg-slate-200 dark:bg-gray-700 flex items-center mx-2 focus:outline-none  px-2 border-b">
          <label>Show</label>
          <select className="focus:outline-none ml-2 dark:bg-gray-700 p-2">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
        <div
          onClick={() => setFilter(!filter)}
          className="flex gap-2 justify-center dark:bg-gray-700 items-center px-5 bg-slate-200 hover:scale-95 hover:bg-slate-300 transition-all duration-500 hover:rounded-lg cursor-pointer"
        >
          <FilterAltTwoTone /> Filters
        </div>
      </div>
      {filter ? <div className="p-5 pb-0">Filters</div> : null}
    </div>
  );
}
