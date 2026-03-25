"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icon";

export function Navigation() {
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/programacao/") {
        setBgColor("#EB5F0A");
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
    <>
      <div
        className="flex justify-between items-center w-full fixed top-0 left-0 z-20 px-4 py-2 transition-colors duration-300"
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex items-center">
          <a
            href="/"
            className="inline-flex items-center px-1 py-1 text-black text-lg font-medium rounded-sm transform hover:scale-105 transition-transform duration-300"
          >
            <Icon width={75} height={75} variant={getIconVariant(textColor)} />
          </a>
        </div>

        <ul className="text-white font-semibold sm:flex hidden items-center">
<li>
            <a
              className={`inline-block px-12 py-4 text-lg font-medium rounded-sm transform hover:scale-105 transition-transform duration-300 ${textColor === "#FFFFFF" ? "text-white" : "text-black"}`}
              href="/programacao/1/"
            >
              Próximo Evento
            </a>
          </li>
          <li>
            <a
              className={`inline-block px-12 py-4 text-lg font-medium rounded-sm transform hover:scale-105 transition-transform duration-300 ${textColor === "#FFFFFF" ? "text-white" : "text-black"}`}
              href="/#programacao"
            >
              Programação
            </a>
          </li>
<li>
            <a
              className={`inline-block px-12 py-4 text-lg font-medium rounded-sm transform hover:scale-105 transition-transform duration-300 ${textColor === "#FFFFFF" ? "text-white" : "text-black"}`}
              href="/patrocinadores"
            >
              Patrocinadores
            </a>
          </li>
          {/*<li>
            <a
              className={`inline-block px-8 py-4 text-lg font-medium rounded-sm transform hover:scale-105 transition-transform duration-300 ${textColor === "#FFFFFF" ? "text-white" : "text-black"}`}
              href="/#exposicao" 
            >
              Exposição
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
