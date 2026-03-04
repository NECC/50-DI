import { Navigation } from "@/components/navigation";
import Link from "next/link";

const schedule = [
  {
    time: "Durante 2026-2027",
    title: "Exposição 50 Anos Informática UMinho",
    imagem: "/Artboard2.svg",
    location:
      "Departamento de Informática da Escola de Engenharia, Campus de Gualtar",
    description:
      "Sessão de Abertura, mesa-redonda, e inauguração da Exposição 50 Anos da Informática na UMinho.",
  },
  {
    time: "8 Abril, 2026 (14H30)",
    title: "Informática 50 Anos: Memória e Desafio",
    imagem: "/Artboard2.svg",
    location: "Campus de Gualtar (Ed. 2, B1)",
    description:
      "Sessão de Abertura, mesa-redonda, e inauguração da Exposição 50 Anos da Informática na UMinho.",
  },
  {
    time: "11 Abril, 2026 (18H00)",
    title: "Os Próximos 50 Anos no Ensino da Informática",
    imagem: "/icon.svg",
    location: "Fórum Braga",
    description:
      "Tertúlia integrada  na ENEI - Encontro Nacional de Estudantes de Informática.",
  },
  {
    time: "27 Maio, 2026 (14H30)",
    title: "Informática, Inovação e o Futuro",
    imagem: "/icon.svg",
    location: "Campus de Gualtar (Ed. 2, B1)",
    description:
      "Mesa-redonda com actores-chave do tecido empresarial em Informática.",
  },
  {
    time: "2 - 3 Junho, 2026 (9H30 às 17H30)",
    title: "Engenharia de Software Apoiada por Assistentes Artificiais",
    imagem: "/icon.svg",
    location: "Campus de Gualtar (Ed. 2, B2)",
    description:
      "Workshop sobre desafios e oportunidades da IA no desenvolvimento de software, com alunos, peritos e empresas.",
  },
  {
    time: "3ª semana de Setembro 2026",
    title: "Informática@UMinho: A Festa dos 50 Anos",
    imagem: "/icon.svg",
    location: "",
    description:
      "Oportunidade de convívio e networking  entre academia, estudantes, alumni e empresas.",
  },
  {
    time: "Data a anunciar em 2027",
    title: "Os próximos 50 anos: Caminhos para a investigação",
    imagem: "/Artboard2.svg",
    location: "",
    description:
      "Seminário sobre o futuro da investigação em Computação e sua Engenharia.",
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
