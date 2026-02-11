import { Navigation } from "@/components/navigation";
import Link from "next/link";

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
    description:
      "Seminário sobre Ensino/formação em Informática/Computação nos diversos níveis do Sistema Educativo: desafios para os próximos 50 anos – evento integrado na ENEI-Encontro Nacional de Estudantes de Informática",
  },
  {
    time: "27 Maio 2026",
    title: "Mesa Redonda",
    imagem: "/Artboard2.svg",
    location: "Auditório Principal",
    description:
      "Mesa redonda com empresas/indústria sobre O futuro da Informática",
  },
  {
    time: "2 e 3 de Junho 2026",
    title:
      "Workshop em Engenharia de Software Apoiada por Assistentes Artificiais",
    imagem: "/Artboard2.svg",
    location:
      "Anfiteatro B2 do Edifício 2 no Campus de Gualtar da Universidade do Minho",
    description: [
      "Será organizada pelo Departamento de Informática e realizada no final do 2º semestre letivo de 2025/2026, integrada nas actividades da unidade curricular de Laboratórios IV da Licenciatura em Engenharia Informática. A participação será aberta à comunidade académica e empresarial, e a qualquer outra pessoa com interesse neste domínio. A participação será gratuita, mas implicará um registo prévio dos participantes.",
      "O workshop decorrerá nos dias 2 e 3 de junho de 2026, no  anfiteatro B1 do Edifício 2 no Campus de Gualtar da Universidade do Minho, e terá incluído no seu programa um conjunto de sessões especializadas (seminários, tutoriais, demonstrações e sessões 'hands-on'), que abordarão alguns dos aspetos científico-técnológicos mais relevantes da Inteligência Artifical Generativa e suas aplicações no mundo real.",
    ],
  },
  {
    time: "3ª semana de Setembro 2026",
    title: "Festa dos 50 Anos da Informática na UMinho",
    imagem: "/Artboard2.svg",
    location: "Auditório Principal",
    description:
      "Festa dos 50 Anos da Informática na UMinho, evento de convívio e networking  entre academia, estudantes, alumni e empresas",
  },
  {
    time: "Data a anunciar em 2027",
    title: "Seminário",
    imagem: "/Artboard2.svg",
    location: "Auditório Principal",
    description:
      "Seminário sobre Temas fronteira: desafios à investigação em informática",
  },
];

export function generateStaticParams() {
  return schedule.map((_, index) => ({
    id: index.toString(),
  }));
}

export default async function EventoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const eventId = parseInt(id);
  const event = schedule[eventId];

  if (!event) {
    return (
      <main className="min-h-screen pt-20 bg-gradient-to-br from-[#EB5F0A] via-[#EB5F0A] to-[#E55100] [--bg-color:#EB5F0A]">
        <Navigation />
        <div className="container mx-auto px-6 py-12 text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            Evento não encontrado
          </h1>
          <Link
            href="/programacao"
            className="text-white/80 hover:text-white transition-colors"
          >
            Voltar aos eventos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20 bg-white [--bg-color:#EB5F0A]">
      <Navigation />

      <div className="absolute top-0 left-0 w-full h-96 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#EB5F0A]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        <Link
          href="/#programacao"
          className="inline-flex items-center gap-2 text-[#EB5F0A] hover:text-[#E55100] font-medium mb-8 transition-colors duration-300"
        >
          <span>←</span>
          <span>Voltar aos eventos</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-sm font-mono uppercase tracking-widest text-[#EB5F0A]/60">
                Evento
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-redaction-20 text-[#EB5F0A] leading-tight">
                {event.title}
              </h1>
            </div>

            {/* Date and Location */}
            <div className="grid grid-cols-2 gap-6 py-6 border-y border-[#EB5F0A]/20">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#EB5F0A]/60 mb-2">
                  Data
                </p>
                <p className="text-xl sm:text-2xl font-mono font-bold text-[#EB5F0A]">
                  {event.time}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#EB5F0A]/60 mb-2">
                  Local
                </p>
                <p className="text-xl sm:text-2xl font-mono font-bold text-[#EB5F0A]">
                  {event.location}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-redaction-20 text-[#EB5F0A] uppercase tracking-wide">
                Descrição
              </h2>
              <div className="text-base sm:text-lg text-[#EB5F0A] leading-relaxed">
                {Array.isArray(event.description) ? (
                  event.description.map((para, idx) => <p key={idx}>{para}</p>)
                ) : (
                  <p>{event.description}</p>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="hidden" />

            <div className="space-y-3">
              {schedule.map((evt, idx) => (
                <Link
                  key={idx}
                  href={`/programacao/${idx}`}
                  className={`
                    block p-4 rounded-lg transition-all duration-300 border
                    ${
                      idx === eventId
                        ? "bg-[#EB5F0A] text-white border-[#EB5F0A] shadow-lg"
                        : "bg-white text-[#EB5F0A] border-[#EB5F0A]/20 hover:border-[#EB5F0A]/50 hover:bg-[#EB5F0A]/5"
                    }
                  `}
                >
                  <p className="font-bold text-sm sm:text-base">{evt.title}</p>
                  <p className="text-xs opacity-70 mt-1">{evt.time}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
