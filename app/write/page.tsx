"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function WritePage() {

  const {data: session, status} = useSession();

  const router = useRouter();

  if (!session) {
    router.replace("/login");
  }

  return (
    <div>WritePage</div>
  )
}
