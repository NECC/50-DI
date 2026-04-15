"use client";

import { useState } from "react";

export default function Apoios() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left bg-gray-200 px-4 py-2 rounded-md font-semibold"
      >
        {open ? "Apoios ▲" : "Apoios ▼"}
      </button>

      {open && (
        <div className="mt-4">
          <h2 className="text-gray-800 text-xl font-semibold mb-6">
            Apoios
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-10">
            {[
              { name: "EEUM", logo: "logos/EEUM_logo.png" },
              { name: "Arquivo Distrital", logo: "logos/g3.png" },
              { name: "Algoritmi", logo: "logos/ALGORITMI.png" },
              { name: "HASLab", logo: "logos/HASLAB.png" },
            ].map((org, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-32 h-20 flex items-center justify-center">
                  <img
                    src={org.logo}
                    alt={org.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <span className="text-black/70 text-sm">{org.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}



