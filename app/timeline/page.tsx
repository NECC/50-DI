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
      <main className="min-h-screen bg-cream pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-7xl md:text-8xl font-bold text-dark-bg mb-8 text-balance">Timeline</h1>
            <p className="text-vibrant-orange text-xl font-mono">50 Anos de Feitos do DI</p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto pb-24">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-vibrant-orange/30" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-24">
                  {/* Year dot */}
                  <div className="absolute left-4 top-2 w-8 h-8 bg-vibrant-orange rounded-full border-4 border-cream" />

                  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-5xl font-bold text-vibrant-orange font-mono mb-3">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-dark-bg mb-2">{milestone.title}</h3>
                    <p className="text-dark-bg/70 leading-relaxed">{milestone.description}</p>
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
