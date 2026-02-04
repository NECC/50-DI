import { Navigation } from "@/components/navigation"

export default function TimelinePage() {
  const milestones = [
    {
      year: "1975",
      title: "Fundação do Departamento",
      description: "Criação do Departamento de Engenharia Informática com os primeiros cursos de computação.",
    },
    {
      year: "1980",
      title: "Primeiros Mainframes",
      description: "Instalação dos primeiros computadores de grande porte para ensino e investigação.",
    },
    {
      year: "1985",
      title: "Laboratório de IA",
      description: "Abertura do primeiro laboratório dedicado à Inteligência Artificial.",
    },
    {
      year: "1990",
      title: "Era da Internet",
      description: "Implementação da primeira conexão à Internet no departamento.",
    },
    {
      year: "1995",
      title: "Mestrado em Computação",
      description: "Lançamento do programa de mestrado em Engenharia Informática.",
    },
    {
      year: "2000",
      title: "Centro de Supercomputação",
      description: "Inauguração do centro de supercomputação para investigação avançada.",
    },
    {
      year: "2005",
      title: "Programa Doutoral",
      description: "Criação do programa de doutoramento em Ciências da Computação.",
    },
    {
      year: "2010",
      title: "Cloud Computing Lab",
      description: "Estabelecimento do laboratório de computação em nuvem.",
    },
    {
      year: "2015",
      title: "Centro de Inovação",
      description: "Abertura do centro de inovação e empreendedorismo tecnológico.",
    },
    {
      year: "2020",
      title: "Prémio de Excelência",
      description: "Reconhecimento internacional pela excelência em investigação.",
    },
    {
      year: "2025",
      title: "50 Anos de História",
      description: "Celebração de cinco décadas de inovação e excelência académica.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-redaction-20 text-[#EB5F0A] mb-4 text-balance leading-tight">
              Timeline
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl font-light max-w-2xl">
              50 Anos de Marcos Importantes do Departamento
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto pb-24">
            {/* Vertical line */}
            <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#EB5F0A] via-[#EB5F0A]/50 to-transparent" />

            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-8 sm:pl-24">
                  {/* Year dot */}
                  <div className="absolute -left-2 sm:left-2 top-2 w-4 h-4 sm:w-8 sm:h-8 bg-gradient-to-br from-[#EB5F0A] to-orange-500 rounded-full border-4 border-white shadow-lg group hover:scale-125 transition-transform" />

                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-[#EB5F0A]/50 shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-baseline gap-4 mb-4">
                      <div className="text-4xl sm:text-5xl font-bold text-[#EB5F0A] font-mono">
                        {milestone.year}
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-[#EB5F0A] to-transparent group-hover:from-[#EB5F0A] group-hover:to-orange-300 transition-colors" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#EB5F0A] transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
