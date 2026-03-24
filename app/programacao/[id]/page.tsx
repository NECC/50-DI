import { Navigation } from "@/components/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const schedule = [
  {
    time: "Durante 2026-2027",
    title: "Exposição 50 Anos Informática UMinho",
    imagem: "/Artboard2.svg",
    location:
      "Departamento de Informática da Escola de Engenharia, Campus de Gualtar",
    description: `Esta exposição faz parte das celebrações os **50 anos da Informática na Universidade do Minho** que ao longo deste ano de 2026 e prolongando-se por 2027 terão lugar no [Departamento de Informática](https://web.di.uminho.pt/sitedi/) da [Escola de Engenharia](https://www.eng.uminho.pt/pt/Paginas/default.aspx).

Com a desmaterialização progressiva da actividade académica, consequência do advento da internet e das rápidas comunicações que hoje temos, permitindo que tudo esteja disponível de imediato, em suporte electrónico, achou-se interessante dar prioridade aos tempos em que tudo era ‘*feito à mão*’, ou quase, pelo interesse que isso possa suscitar nas camadas mais jovens e a bem da preservação da memória colectiva da instituição.`,
  },
  {
    time: "8 Abril, 2026 (14H30)",
    title: "Informática 50 Anos: Memória e Desafio",
    imagem: "/Artboard2.svg",
    location: "Campus de Gualtar (Ed. 2, B1)",
    description: [
      "14:30",
      "Saudação do Director do Departamento de Informática",
      "Intervenção do Senhor Presidente da Escola de Engenharia",
      "Abertura das Comemorações pelo Senhor Reitor da Universidade do Minho",
      "15:00",
      "Mesa-redonda - Informática 50 Anos: Memória e Desafio",
      "Moderada pelo Prof João Álvaro Carvalho, com vários professores convidados.",
      "16:30",
      "Inauguração da Exposição Informática na UMinho: 50 Anos",
      "17:30",
      "Cocktail",
    ],
  },
  {
    time: "11 Abril, 2026 (18H00)",
    title: "Os Próximos 50 Anos no Ensino da Informática",
    imagem: "/icon.svg",
    location: "Fórum Braga",
    description: [
      "Tertúlia integrada na ENEI - Encontro Nacional de Estudantes de Informática.",
    ],
  },
  {
    time: "27 Maio, 2026 (14H30)",
    title: "Informática, Inovação e o Futuro",
    imagem: "/icon.svg",
    location: "Campus de Gualtar (Ed. 2, B1)",
    description: [
      "Mesa-redonda com actores-chave do tecido empresarial em Informática.",
    ],
  },
  {
    time: "2 - 3 Junho, 2026 (9H30 às 17H30)",
    title: "Engenharia de Software Apoiada por Assistentes Artificiais",
    imagem: "/icon.svg",
    location: "Campus de Gualtar (Ed. 2, B2)",
    description: [
      "Workshop sobre desafios e oportunidades da IA no desenvolvimento de software.",
    ],
  },
  {
    time: "3ª semana de Setembro 2026",
    title: "Informática@UMinho: A Festa dos 50 Anos",
    imagem: "/icon.svg",
    location: "",
    description: [
      "Convívio e networking entre academia, estudantes, alumni e empresas.",
    ],
  },
  {
    time: "Data a anunciar em 2027",
    title: "Os próximos 50 anos: Caminhos para a investigação",
    imagem: "/Artboard2.svg",
    location: "",
    description: [
      "Seminário sobre o futuro da investigação em Computação.",
    ],
  },
];

export function generateStaticParams() {
  return schedule.map((_, index) => ({
    id: index.toString(),
  }));
}

export default function EventoPage({
  params,
}: {
  params: { id: string };
}) {
  const eventId = Number(params.id);
  const event = schedule[eventId];

  if (!event) {
    return (
      <main className="min-h-screen pt-20 bg-gradient-to-br from-[#EB5F0A] via-[#EB5F0A] to-[#E55100]">
        <Navigation />
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Evento não encontrado
          </h1>
          <Link href="/programacao" className="text-white/80">
            Voltar aos eventos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20 bg-white">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        <Link
          href="/#programacao"
          className="text-[#EB5F0A] font-medium mb-8 inline-block"
        >
          ← Voltar aos eventos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* COLUNA PRINCIPAL */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-5xl font-bold text-[#EB5F0A]">
              {event.title}
            </h1>

            <div className="flex justify-between border-y py-4">
              <div>
                <p className="text-sm text-gray-500">Data</p>
                <p className="font-bold text-[#EB5F0A]">{event.time}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Local</p>
                <p className="font-bold text-[#EB5F0A]">
                  {event.location}
                </p>
              </div>
            </div>

            <div className="bg-white border rounded-xl p-6">
              {Array.isArray(event.description) ? (
                event.description.map((line, idx) => {
                  const isTime = /^\d{1,2}:\d{2}$/.test(line.trim());

                  return isTime ? (
                    <p
                      key={idx}
                      className="font-bold text-[#EB5F0A] mt-4"
                    >
                      {line}
                    </p>
                  ) : (
                    <p key={idx} className="text-[#EB5F0A]">
                      {line}
                    </p>
                  );
                })
              ) : (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      a: ({ node, ...props }) => (
        <a
          {...props}
          className="text-blue-600 underline underline-offset-2 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        />
      ),
    }}
  >
    {event.description}
  </ReactMarkdown>
              )}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-3">
            {schedule.map((evt, idx) => (
              <Link
                key={idx}
                href={`/programacao/${idx}`}
                className={`block p-4 border rounded-lg ${
                  idx === eventId
                    ? "bg-[#EB5F0A] text-white"
                    : "text-[#EB5F0A]"
                }`}
              >
                <p className="font-bold">{evt.title}</p>
                <p className="text-xs opacity-70">{evt.time}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
