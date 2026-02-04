import { Navigation } from "@/components/navigation"
import Link from "next/link"

const schedule = [
  {
    time: "8 Abril 2026",
    title: "Sessão de Abertura",
    imagem: "/Artboard2.svg",
    location: "Auditório Principal",
    description: "Cerimónia de abertura das comemorações dos 50 anos",
  },
  {
    time: "9-12 Abril 2026",
    title: "Seminário",
    imagem: "/Artboard2.svg",
    location: "Auditório Principal",
    description: "Seminário sobre Ensino/formação em Informática/Computação nos diversos níveis do Sistema Educativo: desafios para os próximos 50 anos – evento integrado na ENEI-Encontro Nacional de Estudantes de Informática",
  },
  {
    time: "27 Maio 2026",
    title: "Mesa Redonda",
    imagem: "/Artboard2.svg",
    location: "Auditório Principal",
    description: "Mesa redonda com empresas/indústria sobre O futuro da Informática",
  },
  {
    time: "Junho 2026",
    title: "Workshop",
    imagem: "/Artboard2.svg",
    location: "Auditório Principal",
    description: "Workshop em Engenharia de Software Apoiada por Assistentes Artificiais – evento focado nos desafios e oportunidades da IA ao desenvolvimento de software, envolvendo alunos, peritos e empresas",
  },
  {
    time: "3ª semana de Setembro 2026",
    title: "Festa dos 50 Anos da Informática na UMinho",
    imagem: "/Artboard2.svg",
    location: "Auditório Principal",
    description: "Festa dos 50 Anos da Informática na UMinho, evento de convívio e networking  entre academia, estudantes, alumni e empresas",
  },
  {
    time: "Data a anunciar em 2027",
    title: "Seminário",
    imagem: "/Artboard2.svg",
    location: "Auditório Principal",
    description: "Seminário sobre Temas fronteira: desafios à investigação em informática",
  },
]

export function generateStaticParams() {
  return schedule.map((_, index) => ({
    id: index.toString(),
  }))
}

export default function EventoPage({ params }: { params: { id: string } }) {
  const eventId = parseInt(params.id)
  const event = schedule[eventId]
  
  if (!event) {
    return (
      <main className="min-h-screen pt-20 bg-[#EB5F0A] [--bg-color:#EB5F0A]">
        <Navigation />
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Evento não encontrado</h1>
        </div>
      </main>
    )
  }
  
  return (
    <main className="min-h-screen pt-20 bg-white [--bg-color:#EB5F0A]">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-7xl md:text-8xl font-redaction-20 text-[#EB5F0A] mb-8 drop-shadow-md text-balance">
                {event.title}
              </h1>
              <h2 className="text-s md:text-s font-redaction-20 mb-2 text-[#EB5F0A]">
                {event.time}
              </h2>
              <h2 className="text-5xl font-redaction-20 text-[#EB5F0A] uppercase tracking-wider mb-3">
                Descrição
              </h2>
              <p className="text-xl text-[#EB5F0A] leading-relaxed">
                {event.description}
              </p>
              <p className="text-xl text-[#EB5F0A] font-mono">
                {event.location}
              </p>
            </div>
          </div>
          <div 
            className="w-full lg:w-96 h-96 bg-black bg-center bg-no-repeat relative flex-shrink-0 rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${event.imagem})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>
      </div>
    </main>
  )
}