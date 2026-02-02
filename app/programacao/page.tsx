import { Navigation } from "@/components/navigation"
import Image from "next/image";


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
      <Navigation />
      <main className="min-h-screen pt-20 bg-[#EB5F0A]">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-16">
            <h1 className="text-7xl md:text-8xl font-redaction-20 text-white mb-8 drop-shadow-md text-balance">
              Programação
            </h1>
          </div>

          <div className="columns-1 lg:columns-2 gap-0 md:gap-20">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`
                  break-inside-avoid inline-block w-full relative overflow-hidden 
                  rounded-lg group bg-black mb-8
                  ${index % 2 !== 0 ? 'lg:mt-16' : ''}
                `}
              >
                
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80"
                  style={{ backgroundImage: `url(${item.imagem})` }}
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

                <div className="relative z-10 p-6 flex flex-col gap-6 h-full justify-between min-h-[250px]">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/90 font-mono text-sm uppercase tracking-wider">
                      {item.location}
                    </p>
                  </div>

                  
                  <div className="flex items-end justify-between border-t border-white/20 pt-4 mt-4">
                    {/*<Image 
                      alt="50-Informática" 
                      src="/Artboard2.svg" 
                      width={100} 
                      height={100} 
                      className="w-12 h-12 opacity-80" 
                      priority
                    />*/}
                     <div className="text-2xl font-bold text-white font-mono">
                      {item.time}
                    </div>
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
