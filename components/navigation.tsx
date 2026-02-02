"use client"
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  return(
        <>
        <div className="flex justify-between items-center w-full bg-transparent fixed top-0 left-0 z-50"><div className="flex items-center cursor-pointer">
        <Image alt="50-Informática" src="/Artboard2.svg" width={100} height={100} className="w-30 h-30" priority/>
        </div><ul className="text-gray-800 font-semibold sm:flex hidden items-center">
        <li><a className="px-12 py-4 text-white text-lg font-medium rounded-sm hover:bg-white hover:text-[#EB5F0A] transition-all duration-300"href="/">Homepage</a></li>
        <li><a className="px-12 py-4 text-white text-lg font-medium rounded-sm hover:bg-white hover:text-[#EB5F0A] transition-all duration-300"href="/programacao">Programação</a></li>
        <li><a className="px-12 py-4 text-white text-lg font-medium rounded-sm hover:bg-white hover:text-[#EB5F0A] transition-all duration-300" href="/super_user">5 décadas</a></li></ul></div>
        </>
)
}