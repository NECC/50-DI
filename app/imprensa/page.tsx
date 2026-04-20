"use client"

import { Navigation } from "@/components/navigation"

export default function ImprensaPage() {

  const press = [
    {
      titulo: "Informática 50 Anos: Memória e Desafio",
      data: "8 Abril 2026",
      descricao: "",
      noticias: [
        {
          titulo: "Sessão de fotos",
          link: "https://www.sas.uminho.pt/galeria/1953",
          imagens: [
            "https://picsum.photos/400/300?random=1",
            "https://picsum.photos/400/300?random=2",
            "https://picsum.photos/400/300?random=3"
          ]
        },
	{
        titulo: "Diário do Minho",
        link: "https://www.diariodominho.pt/noticias/braga/2026-04-08-uminho-evoca-50-anos-de-ensino-pioneiro-da-informatica-69d69f44dd83b",
        },
        {
        titulo: "Correio do Minho",
        link: "https://www.correiodominho.pt/noticias/departamento-de-informatica-celebra-50-anos-de-accao/167751",
        }
      ]
    }
  ]

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-12">

          {/* HEADER */}
          <div className="mb-16 md:mb-24 text-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-redaction-20 text-[#EB5F0A] mb-4 leading-tight">
              Imprensa
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl font-light max-w-2xl mx-auto">
              Notícias, comunicados e recursos oficiais
            </p>
          </div>

          <div className="space-y-24 pb-24">

            {/* EVENTOS */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-4xl font-bold text-[#E5E4E2] font-mono">
                  EVENTOS
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-[#E5E4E2] to-transparent" />
              </div>

              <div className="space-y-20">

                {press.map((evento, index) => (
                  <div key={index} className="space-y-12">

                    {/* DESTAQUE */}
                    <div className="flex justify-center">
                      <div className="w-full max-w-5xl">
                        <div className="rounded-2xl p-10 border border-white/30 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] text-center">
                          <h3 className="text-2xl font-bold text-gray-800">
                            {evento.titulo}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {evento.data}
                          </p>
                          <p className="mt-4 text-gray-700">
                            {evento.descricao}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* NOTÍCIAS (filhas) */}
                    <div className="flex justify-center">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">

                        {evento.noticias.map((item, i) => (
                          <div
                            key={i}
                            className="w-full rounded-xl p-8 border border-yellow-300/40 bg-gradient-to-br from-yellow-200/40 via-yellow-100/20 to-yellow-50/10 backdrop-blur-md shadow-[0_8px_24px_rgba(255,200,0,0.25)] text-center flex flex-col items-center"
                          >
                            <h3 className="text-xl font-bold text-yellow-800">
                              {item.titulo}
                            </h3>

                            <p className="text-sm text-gray-500">
                              {item.data}
                            </p>

                            <p className="mt-2 text-gray-700">
                              {item.descricao}
                            </p>

                            {item.imagens && (
                              <div className="grid grid-cols-3 gap-2 mt-4 w-full">
                                {item.imagens.map((img, imgIndex) => (
                                  <img
                                    key={imgIndex}
                                    src={img}
                                    className="w-full h-20 object-cover rounded-md"
                                  />
                                ))}
                              </div>
                            )}

                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                className="inline-block mt-4 text-sm font-semibold text-yellow-700 underline"
                              >
                                Link
                              </a>
                            )}
                          </div>
                        ))}

                      </div>
                    </div>

                  </div>
                ))}

              </div>
            </section>

            {/* VÍDEO (mantido exatamente no fim) */}
            <div className="flex justify-center">
              <div className="w-full md:w-3/4 lg:w-2/3 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YasSI-uCcTM?autoplay=1&mute=1&loop=1&playlist=YasSI-uCcTM"
                    title="Vídeo em destaque"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
