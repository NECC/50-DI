import { Navigation } from "@/components/navigation"
import Image from "next/image";
import Link from "next/link"

export default function ProgramacaoPage() {
  const schedule = [
    {
      time: "8 Abril 2026",
      title: "Sessão de Abertura",
      imagem : "/Artboard2.svg",
      location: "Auditório Principal",
      description: "Cerimónia de abertura das comemorações dos 50 anos",
    },
    {
      time: "9-12 Abril 2026",
      title: "Seminário",
      imagem : "/Artboard2.svg",
      location: "Auditório Principal",
      description: "Seminário sobre “Ensino/formação em Informática/Computação nos diversos níveis do Sistema Educativo: desafios para os próximos 50 anos” – evento integrado na ENEI-Encontro Nacional de Estudantes de Informática",
    },
    {
      time: "27 Maio 2026",
      title: "Mesa Redonda",
      imagem : "/Artboard2.svg",
      location: "Auditório Principal",
      description: "Mesa redonda com empresas/indústria sobre “O futuro da Informática",
    },
    {
      time: "Junho 2026",
      title: "Workshop",
      imagem : "/Artboard2.svg",
      location: "Auditório Principal",
      description: "Workshop em “Engenharia de Software Apoiada por Assistentes Artificiais” – evento focado nos desafios e oportunidades da IA ao desenvolvimento de software, envolvendo alunos, peritos e empresas",
    },
    {
      time: "3ª semana de Setembro 2026",
      title: "Festa dos 50 Anos da Informática na UMinho",
      imagem : "/Artboard2.svg",
      location: "Auditório Principal",
      description: "Festa dos 50 Anos da Informática na UMinho, evento de convívio e networking  entre academia, estudantes, alumni e empresas",
    },
    {
      time: "Data a anunciar em 2027",
      title: "Seminário",
      imagem : "/Artboard2.svg",
      location: "Auditório Principal",
      description: "Seminário sobre “Temas fronteira: desafios à investigação em informática”",
    },
  ]

  return (
    <>
      <main className="min-h-screen pt-20 bg-gradient-to-br from-[#EB5F0A] via-[#EB5F0A] to-[#E55100] [--bg-color:#EB5F0A]">
        <Navigation />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-10 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
          {/* Header Section */}
          <div className="mb-16 md:mb-24">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-redaction-20 text-white mb-4 drop-shadow-lg text-balance leading-tight">
              Programação
            </h1>
            <p className="text-white/80 text-lg sm:text-xl font-light max-w-2xl">
              Descobra os principais eventos que celebram os 50 anos de excelência em Informática
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {schedule.map((item, index) => (
              <Link
                key={index}
                href={`/programacao/${index}`}
                className={`
                  group relative overflow-hidden rounded-xl bg-gradient-to-br from-black/80 to-black border border-[#EB5F0A]/30
                  h-64 sm:h-72 md:h-80 lg:h-96
                  shadow-lg transition-all duration-500 ease-out
                  hover:shadow-2xl hover:shadow-[#EB5F0A]/20 hover:border-[#EB5F0A]/60
                  ${index % 2 !== 0 ? 'lg:mt-8' : ''}
                  transform hover:scale-105 cursor-pointer
                `}
              >
                {/* Content Container */}
                <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between">
                  {/* Top Content */}
                  <div className="space-y-4">
                    <div className="inline-block">
                      <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#EB5F0A] opacity-80">
                        Evento
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight group-hover:text-[#EB5F0A] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-4">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#EB5F0A] to-transparent group-hover:w-16 transition-all duration-500" />
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-baseline">
                        <span className="text-white/60 text-xs uppercase tracking-wider font-light">
                          Data
                        </span>
                        <time className="text-base sm:text-lg font-bold text-[#EB5F0A] font-mono">
                          {item.time}
                        </time>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-white/60 text-xs uppercase tracking-wider font-light">
                          Local
                        </span>
                        <span className="text-base sm:text-lg font-medium text-white/80 font-mono">
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EB5F0A] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EB5F0A] to-transparent" />
                </div>
              </Link>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-20 pt-12 border-t border-white/20 text-center">
            <p className="text-white/70 font-light max-w-2xl mx-auto">
              Clique em qualquer evento para obter mais detalhes. Inscrições e informações adicionais serão disponibilizadas em breve.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
