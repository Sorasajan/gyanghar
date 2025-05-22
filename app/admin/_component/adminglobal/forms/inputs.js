"use client";
import { ArrowDropDown } from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";

const AdminFormInput = ({ label, name, value, onChange }) => {
  return (
    <section className="flex flex-col gap-2 items-start">
      <label>{label} </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className="p-2 mb-5 border border-gray-300 w-full dark:border-gray-800 rounded bg-slate-100  dark:bg-gray-900"
      />
    </section>
  );
};

const AdminFormTextArea = ({ label, name, className }) => {
  return (
    <section className="flex flex-col gap-2 mb-5 items-start">
      <label>{label}</label>
      <textarea
        name={name}
        className={`p-2 border border-gray-300 w-full dark:border-gray-800 rounded bg-slate-100 dark:bg-gray-900 ${className}`}
      />
    </section>
  );
};

const AdminFormDropdown = ({ label, name }) => {
  return (
    <section className="flex flex-col gap-2 items-start">
      <label>{label} </label>
      <select
        name={name}
        autoComplete="off"
        className="p-2 mb-5 border border-gray-300 w-full dark:border-gray-800 rounded bg-slate-100  dark:bg-gray-900"
      >
        <option>1</option>
        <option>2</option>
      </select>
    </section>
  );
};

export { AdminFormInput, AdminFormTextArea, AdminFormDropdown };
