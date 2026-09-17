"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://galeria.di.uminho.pt/?album=Exposi%C3%A7%C3%A3o+dos+50+Anos");
  }, []);

  return null;
}
