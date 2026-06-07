"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icon";

export function Navigation() {
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/programacao/") {
        setBgColor("#EB5F0A");
        setTextColor("#FFFFFF");
      } else if (pathname === "/") {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (scrollPosition < viewportHeight) {
          setBgColor("#71AA7A");
          setTextColor("#FFFFFF");
        } else if (scrollPosition < viewportHeight * 2.2) {
          setBgColor("#FFFFFF");
          setTextColor("#000000");
        } else {
          setBgColor("#EB5F0A");
          setTextColor("#FFFFFF");
        }
      } else {
        setBgColor("#FFFFFF");
        setTextColor("#000000");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const getIconVariant = (color: string): "icon" | "artboard4" => {
    return color === "#000000" ? "artboard4" : "icon";
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-20 px-4 py-2 flex justify-between items-center transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      {/* LOGO */}
      <a href="/" className="flex items-center">
        <Icon width={75} height={75} variant={getIconVariant(textColor)} />
      </a>

      {/* BOTÃO HAMBÚRGUER ANIMADO */}
      <button
        className="sm:hidden flex flex-col justify-center gap-1.5 w-10 h-10"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <span
          className={`h-1 w-full rounded bg-current transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
          style={{ color: textColor }}
        />
        <span
          className={`h-1 w-full rounded bg-current transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
          style={{ color: textColor }}
        />
        <span
          className={`h-1 w-full rounded bg-current transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
          style={{ color: textColor }}
        />
      </button>

      {/* MENU DESKTOP */}
      <ul className="font-semibold sm:flex hidden items-center gap-6">
        <li>
          <a
            className={`px-12 py-4 text-lg transition-transform duration-300 hover:scale-105 ${
              textColor === "#FFFFFF" ? "text-white" : "text-black"
            }`}
            href="/programacao/5/"
          >
            Próximo Evento
          </a>
        </li>

        <li>
          <a
            className={`px-12 py-4 text-lg transition-transform duration-300 hover:scale-105 ${
              textColor === "#FFFFFF" ? "text-white" : "text-black"
            }`}
            href="/#programacao"
          >
            Programação
          </a>
        </li>
        
	<li>
          <a
            className={`px-12 py-4 text-lg transition-transform duration-300 hover:scale-105 ${
              textColor === "#FFFFFF" ? "text-white" : "text-black"
            }`}
            href="/imprensa"
          >
            Imprensa
          </a>
        </li>

        <li>
          <a
            className={`px-12 py-4 text-lg transition-transform duration-300 hover:scale-105 ${
              textColor === "#FFFFFF" ? "text-white" : "text-black"
            }`}
            href="/patrocinadores"
          >
            Patrocinadores
          </a>
        </li>


        <li>
          <a
            className={`px-12 py-4 text-lg transition-transform duration-300 hover:scale-105 ${
              textColor === "#FFFFFF" ? "text-white" : "text-black"
            }`}
            href="/submissaocvsalunos"
          >
            SubmissãoCVsAlunos
          </a>
        </li>

      </ul>

      {/* MENU MOBILE */}
      <ul
        id="mobile-menu"
        role="menu"
        className={`
          sm:hidden
          absolute top-20 right-0
          w-full
          flex flex-col items-center
          bg-white
          shadow-lg
          transition-all duration-300 ease-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <li>
          <a
            className="block w-full text-center px-6 py-4 text-black text-lg hover:bg-gray-100 transition-colors"
            href="/programacao/5/"
            onClick={() => setOpen(false)}
          >
            Próximo Evento
          </a>
        </li>

        <li>
          <a
            className="block w-full text-center px-6 py-4 text-black text-lg hover:bg-gray-100 transition-colors"
            href="/#programacao"
            onClick={() => setOpen(false)}
          >
            Programação
          </a>
        </li>

        <li>
          <a
            className="block w-full text-center px-6 py-4 text-black text-lg hover:bg-gray-100 transition-colors"
            href="/imprensa"
            onClick={() => setOpen(false)}
          >
            Imprensa
          </a>
        </li>

        <li>
          <a
            className="block w-full text-center px-6 py-4 text-black text-lg hover:bg-gray-100 transition-colors"
            href="/patrocinadores"
            onClick={() => setOpen(false)}
          >
            Patrocinadores
          </a>
        </li>

        <li>
          <a
            className="block w-full text-center px-6 py-4 text-black text-lg hover:bg-gray-100 transition-colors"
            href="/submissaocvsalunos"
            onClick={() => setOpen(false)}
          >
            SubmissãoCVsAlunos
          </a>
        </li>





      </ul>
    </nav>
  );
}

