"use client";

import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button 
        variant="outline"
        onClick={() => router.push('/login')}
      >
        <Eye size={24} /> 
        Login
      </Button>
      <Button 
        variant="outline"
        onClick={() => router.push('/categories/react')}
      >
        <Eye size={24} /> 
        Page React
      </Button>
    </main>
  );
}
