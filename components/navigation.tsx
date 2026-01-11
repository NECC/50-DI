"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Homepage" },
    { href: "/programacao", label: "Programação" },
    { href: "/evento", label: "Evento" },
    { href: "/timeline", label: "Timeline" },
    { href: "/depoimentos", label: "Depoimentos" },
    { href: "/patrocinadores", label: "Patrocinadores" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-center md:justify-between">
          <Link href="/" className="flex items-center gap-6 group">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
              <img
                src="/images/image.png"
                alt="Universidade do Minho - Departamento de Informática"
                className="h-10 w-auto brightness-100 contrast-100"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
              <div className="text-white text-sm font-mono leading-tight tracking-tight">
                <span className="block text-lg font-semibold">50 anos</span>
                <span className="block text-xs text-white/70">Engenharia Informática</span>
              </div>
            </div>
          </Link>

          {pathname !== "/" && (
            <div className="flex gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-mono transition-colors",
                    pathname === link.href ? "text-white" : "text-white/60 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
