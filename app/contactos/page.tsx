"use client"

import { Navigation } from "@/components/navigation"

export default function ContactosPage() {
const organizacao = [
{
nome: "Prof. Luís Soares Barbosa",
cargo: "Presidente",
},
{
nome: "Prof. Jorge Sousa Pinto",
cargo: "",
},
{
nome: "Prof. José Nuno Oliveira",
cargo: "",
},
{
nome: "Prof.ª Maria Solange Lima",
cargo: "",
},
{
nome: "Prof. Pedro Rangel Henriques",
cargo: "",
},
{
nome: "Cristina Ferreira",
cargo: "Secretaria do DI",
},
{
nome: "Goretti Pereira",
cargo: "Secretaria do DI",
},
{
nome: "Helena Dias",
cargo: "Secretaria do DI",
},
]

return (
<> <Navigation />

```
  <main className="min-h-screen bg-white pt-20">
    <div className="container mx-auto px-4 sm:px-6 py-12">

      {/* HEADER */}
      <div className="mb-16 md:mb-24 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-redaction-20 text-[#EB5F0A] mb-4 leading-tight">
          Contactos
        </h1>

        <p className="text-gray-600 text-lg sm:text-xl font-light max-w-2xl mx-auto">
          Contactos e Comissão Organizadora
        </p>
      </div>

      <div className="space-y-24 pb-24">

        {/* CONTACTOS */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-4xl font-bold text-[#E5E4E2] font-mono">
              CONTACTOS
            </h2>

            <div className="h-1 flex-1 bg-gradient-to-r from-[#E5E4E2] to-transparent" />
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">

              {/* EMAIL */}
              <div className="rounded-2xl p-10 border border-white/30 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] text-center">
                <div className="text-4xl mb-5">
                  ✉
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Email
                </h3>

                <a
                  href="mailto:divulgacao@di.uminho.pt"
                  className="text-[#EB5F0A] font-semibold text-lg hover:underline"
                >
                  divulgacao@di.uminho.pt
                </a>
              </div>

              {/* TELEFONE */}
              <div className="rounded-2xl p-10 border border-white/30 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] text-center">
                <div className="text-4xl mb-5">
                  ☎
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Contactos telefónicos
                </h3>

                <div className="flex justify-center gap-4">
                  <a
                    href="tel:253604465"
                    className="text-[#EB5F0A] font-semibold text-lg hover:underline"
                  >
                    253604465
                  </a>

                  <span className="text-gray-400 text-lg">
                    /
                  </span>

                  <a
                    href="tel:253604470"
                    className="text-[#EB5F0A] font-semibold text-lg hover:underline"
                  >
                    253604470
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* COMISSÃO ORGANIZADORA */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-4xl font-bold text-[#E5E4E2] font-mono">
              COMISSÃO ORGANIZADORA
            </h2>

            <div className="h-1 flex-1 bg-gradient-to-r from-[#E5E4E2] to-transparent" />
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">

              {organizacao.map((pessoa, index) => (
                <div
                  key={index}
                  className="w-full rounded-xl p-8 border border-yellow-300/40 bg-gradient-to-br from-yellow-200/40 via-yellow-100/20 to-yellow-50/10 backdrop-blur-md shadow-[0_8px_24px_rgba(255,200,0,0.25)] text-center flex flex-col items-center justify-center min-h-[170px]"
                >
                  <h3 className="text-xl font-bold text-yellow-800">
                    {pessoa.nome}
                  </h3>

                  {pessoa.cargo && (
                    <p className="mt-2 text-gray-600">
                      {pessoa.cargo}
                    </p>
                  )}
                </div>
              ))}

            </div>
          </div>
        </section>

      </div>
    </div>
  </main>
</>

)
}

