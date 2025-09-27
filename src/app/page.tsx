"use client"
import Image from "next/image";
import A from "@/components/A";
import { Button } from "@/stories/Button";
export default function Home() {
  return (
    <div className="bg-red-900">
      <Button label="dix" />
      <A />
    </div>
  );
}
