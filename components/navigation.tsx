"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [bgColor, setBgColor] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (pathname === "/programacao/") {
        setBgColor("#EB5F0A");
      } else if (pathname === "/") {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (scrollPosition < viewportHeight) {
          setBgColor("#71AA7A");
        } else if (scrollPosition < viewportHeight * 2) {
          setBgColor("#FFFFFF");
        } else {
          setBgColor("#EB5F0A");
        }
      } else {
        setBgColor("#FFFFFF");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="flex justify-between items-center w-full fixed top-0 left-0 z-50 px-4 py-2 transition-colors duration-300"
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex items-center cursor-pointer">
          <Image
            alt="50-Informática"
            src="/icon.svg"
            width={100}
            height={100}
            className="w-30 h-30"
            priority
          />
        </div>
        <ul className="text-black font-semibold sm:flex hidden items-center">
          <li>
            <a
              className="px-12 py-4 text-black text-lg font-medium rounded-sm hover:bg-white hover:text-black transition-all duration-300"
              href="/"
            >
              Homepage
            </a>
          </li>
          <li>
            <a
              className="px-12 py-4 text-black text-lg font-medium rounded-sm hover:bg-white hover:text-black transition-all duration-300"
              href="/programacao"
            >
              Programação
            </a>
          </li>
          {/* <li>
            <a
              className="px-12 py-4 text-black text-lg font-medium rounded-sm hover:bg-white hover:text-black transition-all duration-300"
              href="/"
            >
              5 décadas
            </a>
          </li>*/}
        </ul>
      </div>
    </>
  );
}
