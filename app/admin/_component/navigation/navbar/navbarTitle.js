"use client";
import { useData } from "../../context/adminDataContext";

export default function AdminNavbarHeaderTitle() {
  const { adminHeader } = useData();
  console.log(adminHeader);
  return <div>{adminHeader}</div>;
}
