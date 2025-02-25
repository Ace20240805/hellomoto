'use client';
import MainForm from "@/components/MainForm";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Forms() {
    const pathname = usePathname();
    useEffect(() => {  
        if(pathname === "/Forms") {
          document.body.classList.add("bg-gray-200",'text-white');
        }} , [pathname]);
  return (
    <div>
      <MainForm />
    </div>
  );
}