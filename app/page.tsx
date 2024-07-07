"use client";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Hello</h1>
      <Button onClick={() => toast("Hello")}>Click me</Button>
    </div>
  );
}
