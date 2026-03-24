"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface Sponsor {
  name: string;
  logo: string;
}

interface SponsorCategory {
  title: string;
  sponsors: Sponsor[];
  color: string;
}

interface SponsorsSidebarProps {
  platinum?: Sponsor[];
  gold?: Sponsor[];
  silver?: Sponsor[];
  bronze?: Sponsor[];
  outros?: Sponsor[];
}

export default function SponsorsSidebar({
  platinum = [],
  gold = [],
  silver = [],
  bronze = [],
  outros = [],
}: SponsorsSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [buttonColor, setButtonColor] = useState("#71AA7A");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/programacao/") {
        setButtonColor("#EB5F0A");
      } else if (pathname === "/") {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (scrollPosition < viewportHeight) {
          setButtonColor("#71AA7A");
        } else if (scrollPosition < viewportHeight * 2) {
          setButtonColor("#EB5F0A");
        } else {
          setButtonColor("#EB5F0A");
        }
      } else {
        setButtonColor("#71AA7A");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const categories: SponsorCategory[] = [
    {
      title: "Platina",
      sponsors: platinum,
      color: "#a0b2c6",
    },
    {
      title: "Ouro",
      sponsors: gold,
      color: "#FFD700",
    },
    {
      title: "Prata",
      sponsors: silver,
      color: "#C0C0C0",
    },
    {
      title: "Bronze",
      sponsors: bronze,
      color: "#CD7F32",
    },
  ];

  const hasSponsors =
    platinum.length > 0 ||
    gold.length > 0 ||
    silver.length > 0 ||
    bronze.length > 0 ||
    outros.length > 0;

  if (!hasSponsors) return null;

  return (
    <div className="fixed right-0 top-24 z-50 transition-all duration-300">
      <div
        className={`bg-white shadow-2xl rounded-l-lg transition-all duration-300 ${
          isCollapsed ? "w-12" : "w-72"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -left-10 top-4 text-white p-2 rounded-l-lg transition-all duration-300 shadow-lg"
          style={{ backgroundColor: buttonColor }}
          onMouseEnter={(e) => {
            const target = e.currentTarget as HTMLButtonElement;
            target.style.opacity = "0.8";
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget as HTMLButtonElement;
            target.style.opacity = "1";
          }}
          aria-label={
            isCollapsed ? "Expandir patrocinadores" : "Recolher patrocinadores"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Content */}
        {!isCollapsed && (
          <div className="p-6 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-[#71AA7A] scrollbar-track-gray-100">
            <h2 className="text-2xl font-bold text-[#71AA7A] mb-6 text-center border-b-2 border-[#EB5F0A] pb-2">
              Patrocinadores
            </h2>

            <div className="space-y-6">
              {categories.map((category) => {
                if (category.sponsors.length === 0) return null;

                return (
                  <div key={category.title} className="space-y-3">
                    <h3
                      className="text-lg font-semibold text-center py-2 rounded-md"
                      style={{
                        backgroundColor: category.color,
                        color: category.title === "Ouro" ? "#000" : "#fff",
                        textShadow:
                          category.title === "Ouro"
                            ? "none"
                            : "0 1px 2px rgba(0,0,0,0.3)",
                      }}
                    >
                      {category.title}
                    </h3>

                    <div className="space-y-3">
                      {category.sponsors.map((sponsor, index) => (
                        <div
                          key={`${sponsor.name}-${index}`}
                          className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                        >
                          <div className="flex items-center justify-center h-16 relative">
                            <Image
                              src={sponsor.logo}
                              alt={sponsor.name}
                              width={120}
                              height={60}
                              className="object-contain max-h-14"
                            />
                          </div>
                          <p className="text-xs text-center text-gray-600 mt-2 font-medium">
                            {sponsor.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>



            {/* Outros Apoios */}
{/* Outros Apoios
            {outros.length > 0 && (
              <div className="space-y-3 pt-4 border-t-2 border-gray-200">
                <h3
                  className="text-lg font-semibold text-center py-2 rounded-md"
                  style={{
                    backgroundColor: "#6B7280",
                    color: "#fff",
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  Outros Apoios
                </h3>
                <div className="space-y-3">
                  {outros.map((sponsor, index) => (
                    <div
                      key={`${sponsor.name}-${index}`}
                      className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                      <div className="flex items-center justify-center h-16 relative">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          width={120}
                          height={60}
                          className="object-contain max-h-14"
                        />
                      </div>
                      <p className="text-xs text-center text-gray-600 mt-2 font-medium">
                        {sponsor.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

*/}
          </div>
        )}
      </div>
    </div>
  );
}
