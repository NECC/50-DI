import { Navigation } from "@/components/navigation"

export default function EventoPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title */}
              <div className="space-y-4">
                <span className="inline-block text-sm font-mono uppercase tracking-widest text-[#EB5F0A]/60">
                  Evento
                </span>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-redaction-20 text-[#EB5F0A] leading-tight">
                  Nome do Evento
                </h1>
              </div>

              {/* Content */}
              <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Este evento marca um momento histórico na celebração dos 50 anos da Engenharia Informática. Durante décadas, testemunhamos transformações extraordinárias que moldaram o mundo digital que conhecemos hoje.
                </p>

                <p>
                  Desde os primeiros sistemas de computação de grande porte até à era da computação em nuvem e inteligência artificial, a nossa jornada tem sido marcada por inovação constante e excelência académica.
                </p>

                <p>
                  Junte-se a nós para celebrar as conquistas do passado e explorar as possibilidades do futuro. Este é um momento de reflexão, partilha e inspiração para a próxima geração de engenheiros informáticos.
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-gray-200">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                    Data
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-[#EB5F0A]">
                    XX de XXX 2026
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                    Local
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-[#EB5F0A]">
                    Auditório Principal
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                    Horário
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-[#EB5F0A]">
                    XXhXX
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="px-8 py-3 bg-[#EB5F0A] text-white font-bold rounded-lg hover:bg-[#E55100] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Registar Interesse
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/images/mainframe-1.jpg"
                  alt="Evento"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
