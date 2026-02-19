import { Navigation } from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProgramacaoPage() {
  const schedule = [
    {
      time: "8 Abril 2026",
      title: "Sessão de Abertura",
      imagem: "/icon.svg",
      location: "Auditório Principal",
      description: "Cerimónia de abertura das comemorações dos 50 anos",
    },
    {
      time: "9-12 Abril 2026",
      title: "Seminário",
      imagem: "/icon.svg",
      location: "Auditório Principal",
      description:
        'Seminário sobre "Ensino/formação em Informática/Computação nos diversos níveis do Sistema Educativo: desafios para os próximos 50 anos" – evento integrado na ENEI-Encontro Nacional de Estudantes de Informática',
    },
    {
      time: "27 Maio 2026",
      title: "Mesa Redonda",
      imagem: "/icon.svg",
      location: "Auditório Principal",
      description:
        'Mesa redonda com empresas/indústria sobre "O futuro da Informática"',
    },
    {
      time: "2 e 3 de Junho 2026",
      title:
        "Workshop em Engenharia de Software Apoiada por Assistentes Artificiais",
      imagem: "/icon.svg",
      location: "Anfiteatro B2 da Universidade do Minho",
      description:
        "Será organizada pelo Departamento de Informática e realizada no final do 2º semestre letivo de 2025/2026, integrada nas actividades da unidade curricular de Laboratórios IV da Licenciatura em Engenharia Informática. A participação será aberta à comunidade académica e empresarial, e a qualquer outra pessoa com interesse neste domínio. A participação será gratuita, mas implicará um registo prévio dos participantes.A workshop decorrerá nos dias 2 e 3 de junho de 2026, no  anfiteatro B1 do Edifício 2 no Campus de Gualtar da Universidade do Minho, e terá incluído no seu programa um conjunto de sessões especializadas (seminários, tutoriais, demonstrações e sessões 'hands-on'), que abordarão alguns dos aspetos científico-técnológicos mais relevantes da Inteligência Artifical Generativa e suas aplicações no mundo real.",
    },
    {
      time: "3ª semana de Setembro 2026",
      title: "Festa dos 50 Anos da Informática na UMinho",
      imagem: "/icon.svg",
      location: "Auditório Principal",
      description:
        "Festa dos 50 Anos da Informática na UMinho, evento de convívio e networking  entre academia, estudantes, alumni e empresas",
    },
  ];

  return (
    <>
      <main className="min-h-screen pt-20 bg-[#EB5F0A] [--bg-color:#EB5F0A]">
        <Navigation />

        <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
          <div className="mb-16 md:mb-24">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-redaction-20 text-white mb-4 drop-shadow-lg text-balance leading-tight">
              Programação
            </h1>
            <p className="text-white/80 text-lg sm:text-xl font-light max-w-2xl">
              Descubra os principais eventos que celebram os 50 anos de
              excelência em Informática
            </p>
          </div>

          {/* Organic Masonry Layout - 5 Cards */}
          <div
            className="relative w-full mx-auto max-w-[1600px]"
            style={{ minHeight: "1800px" }}
          >
            {/* Card 1 - Top Left (Sessão de Abertura) */}
            <Link
              href={`/programacao/0`}
              className="absolute top-[40px] left-[160px] group bg-black cursor-pointer overflow-hidden"
              style={{ width: "480px", height: "480px" }}
            >
              <div className="relative w-full h-full">
                <div
                  className="absolute inset-0 bg-center bg-no-repeat bg-contain bg-[#71AA7A] transition-transform duration-700 group-hover:scale-110 opacity-80"
                  style={{
                    backgroundImage: `url(${schedule[0].imagem})`,
                    backgroundSize: "80%",
                  }}
                />
                <div className="relative z-10 h-full pl-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="inline-block"></div>
                    <h3 className="text-2xl font-redaction-10 text-white leading-tight">
                      {schedule[0].title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-white/60 text-xs uppercase tracking-wider font-light">
                        data
                      </span>
                      <time className="text-sm font-bold text-white font-mono">
                        {schedule[0].time}
                      </time>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-white/60 text-xs uppercase tracking-wider font-light">
                        local
                      </span>
                      <span className="text-sm font-medium text-white/80 font-mono">
                        Auditório Principal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 2 - Top Right (Seminário) */}
            <Link
              href={`/programacao/1`}
              className="absolute top-[200px] right-[160px] group bg-black cursor-pointer overflow-hidden"
              style={{ width: "480px", height: "480px" }}
            >
              <div className="relative w-full h-full">
                <div
                  className="absolute inset-0 bg-center bg-no-repeat bg-contain bg-[#71AA7A] transition-transform duration-700 group-hover:scale-110 opacity-80"
                  style={{
                    backgroundImage: `url(${schedule[1].imagem})`,
                    backgroundSize: "80%",
                  }}
                />
                <div className="relative z-10 h-full pl-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="inline-block"></div>
                    <h3 className="text-2xl font-redaction-10 text-white leading-tight">
                      {schedule[1].title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-white/60 text-xs uppercase tracking-wider font-light">
                        data
                      </span>
                      <time className="text-sm font-bold text-white font-mono">
                        {schedule[1].time}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 3 - Middle Center (Mesa Redonda) */}
            <Link
              href={`/programacao/2`}
              className="absolute top-[45%] left-[50%] -translate-x-1/2 group bg-black cursor-pointer overflow-hidden"
              style={{ width: "380px", height: "380px" }}
            >
              <div className="relative w-full h-full">
                <div
                  className="absolute inset-0 bg-center bg-no-repeat bg-contain bg-[#71AA7A] transition-transform duration-700 group-hover:scale-110 opacity-80"
                  style={{
                    backgroundImage: `url(${schedule[2].imagem})`,
                    backgroundSize: "80%",
                  }}
                />
                <div className="relative z-10 h-full pl-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="inline-block"></div>
                    <h3 className="text-xl font-redaction-10 text-white leading-tight">
                      {schedule[2].title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-white/60 text-xs uppercase tracking-wider font-light">
                        data
                      </span>
                      <time className="text-sm font-bold text-white font-mono">
                        {schedule[2].time}
                      </time>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-white/60 text-xs uppercase tracking-wider font-light">
                        local
                      </span>
                      <span className="text-sm font-medium text-white/80 font-mono">
                        Auditório Principal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 4 - Bottom Left (Workshop) */}
            <Link
              href={`/programacao/3`}
              className="absolute top-[55%] right-[40px] group bg-black cursor-pointer overflow-hidden"
              style={{ width: "380px", height: "400px" }}
            >
              <div className="relative w-full h-full">
                <div
                  className="absolute inset-0 bg-center bg-no-repeat bg-contain bg-[#71AA7A] transition-transform duration-700 group-hover:scale-110 opacity-80"
                  style={{
                    backgroundImage: `url(${schedule[3].imagem})`,
                    backgroundSize: "80%",
                  }}
                />
                <div className="relative z-10 h-full pl-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="inline-block"></div>
                    <h3 className="text-xl font-redaction-10 text-white leading-tight">
                      {schedule[3].title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-white/60 text-xs uppercase tracking-wider font-light">
                        data
                      </span>
                      <time className="text-sm font-bold text-white font-mono">
                        {schedule[3].time}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 5 - Bottom Right (Festa) */}
            <Link
              href={`/programacao/4`}
              className="absolute top-[75%] left-[200px] group bg-black cursor-pointer overflow-hidden"
              style={{ width: "480px", height: "480px" }}
            >
              <div className="relative w-full h-full">
                <div
                  className="absolute inset-0 bg-center bg-no-repeat bg-contain bg-[#71AA7A] transition-transform duration-700 group-hover:scale-110 opacity-80"
                  style={{
                    backgroundImage: `url(${schedule[4].imagem})`,
                    backgroundSize: "80%",
                  }}
                />
                <div className="relative z-10 h-full pl-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="inline-block"></div>
                    <h3 className="text-2xl font-redaction-10 text-white leading-tight">
                      {schedule[4].title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-white/60 text-xs uppercase tracking-wider font-light">
                        data
                      </span>
                      <time className="text-sm font-bold text-white font-mono">
                        {schedule[4].time}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-20 pt-12 border-t border-white/20 text-center">
            <p className="text-white/70 font-light max-w-2xl mx-auto">
              Clique em qualquer evento para obter mais detalhes. Inscrições e
              informações adicionais serão disponibilizadas em breve.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
