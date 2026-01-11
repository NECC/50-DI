import { Navigation } from "@/components/navigation"

export default function ProgramacaoPage() {
  const schedule = [
    {
      time: "09:00",
      title: "Abertura Oficial",
      location: "Auditório Principal",
      description: "Cerimónia de abertura das comemorações dos 50 anos",
    },
    {
      time: "10:00",
      title: "Painel: 50 Anos de Inovação",
      location: "Auditório Principal",
      description: "Discussão sobre a evolução da Engenharia Informática",
    },
    {
      time: "11:30",
      title: "Coffee Break",
      location: "Átrio",
      description: "Networking e convívio",
    },
    {
      time: "12:00",
      title: "Apresentações de Projetos Alumni",
      location: "Sala A",
      description: "Ex-alunos apresentam os seus projetos inovadores",
    },
    {
      time: "13:00",
      title: "Almoço",
      location: "Cantina",
      description: "Almoço buffet",
    },
    {
      time: "14:30",
      title: "Workshop: IA e Machine Learning",
      location: "Laboratório 2",
      description: "Workshop prático sobre as últimas tendências em IA",
    },
    {
      time: "16:00",
      title: "Mesa Redonda: Futuro da Computação",
      location: "Auditório B",
      description: "Debate sobre o futuro da área",
    },
    {
      time: "18:00",
      title: "Sessão de Networking",
      location: "Átrio",
      description: "Convívio entre alumni, professores e estudantes",
    },
    {
      time: "20:00",
      title: "Jantar de Gala",
      location: "Salão Nobre",
      description: "Jantar comemorativo dos 50 anos",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-vibrant-orange pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 text-balance">Programação</h1>
            <p className="text-white/90 text-xl font-mono">Agenda do Dia</p>
          </div>

          <div className="space-y-6 pb-24 max-w-4xl">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-3xl font-bold text-white font-mono">{item.time}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 font-mono text-sm mb-2">{item.location}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
