import { Navigation } from "@/components/navigation";
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
        'Seminário sobre "Ensino/formação em Informática/Computação nos diversos níveis do Sistema Educativo: desafios para os próximos 50 anos"',
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
        "Workshop integrada nas actividades da unidade curricular de Laboratórios IV.",
    },
    {
      time: "3ª semana de Setembro 2026",
      title: "Festa dos 50 Anos da Informática na UMinho",
      imagem: "/icon.svg",
      location: "Auditório Principal",
      description:
        "Evento de convívio e networking entre academia, estudantes e empresas",
    },
  ];

  return (
    <main className="min-h-screen pt-20 bg-[#EB5F0A]">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="mb-16 md:mb-24">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-redaction-20 text-white mb-4 leading-tight">
            Programação
          </h1>
          <p className="text-white/80 text-lg sm:text-xl font-light max-w-2xl">
            Descubra os principais eventos que celebram os 50 anos de excelência
            em Informática
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:hidden max-w-xl mx-auto md:max-w-none">
          <div className="md:flex md:gap-8 md:items-start">
            <Link
              href="/programacao/0"
              className="group bg-black overflow-hidden block md:w-[48%] md:ml-[4%]"
              style={{ aspectRatio: "1 / 1" }}
            >
              <CardContent data={schedule[0]} />
            </Link>

            <Link
              href="/programacao/1"
              className="group bg-black overflow-hidden block mt-8 md:mt-16 md:w-[44%]"
              style={{ aspectRatio: "1 / 1" }}
            >
              <CardContent data={schedule[1]} />
            </Link>
          </div>

          <div className="md:flex md:gap-8 md:items-start md:mt-4">
            <Link
              href="/programacao/2"
              className="group bg-black overflow-hidden block md:w-[34%] md:ml-[16%]"
              style={{ aspectRatio: "1 / 1" }}
            >
              <CardContent data={schedule[2]} small />
            </Link>

            <Link
              href="/programacao/3"
              className="group bg-black overflow-hidden block mt-8 md:mt-0 md:w-[34%] md:ml-auto md:mr-[4%]"
              style={{ aspectRatio: "19 / 20" }}
            >
              <CardContent data={schedule[3]} small />
            </Link>
          </div>

          <Link
            href="/programacao/4"
            className="group bg-black overflow-hidden block md:w-[44%] md:ml-[8%] md:mt-4"
            style={{ aspectRatio: "1 / 1" }}
          >
            <CardContent data={schedule[4]} />
          </Link>
        </div>

        <div className="hidden lg:grid grid-cols-12 gap-6 max-w-[1400px] mx-auto">
          <Link
            href="/programacao/0"
            className="col-start-2 col-span-4 group bg-black overflow-hidden"
            style={{ aspectRatio: "1 / 1" }}
          >
            <CardContent data={schedule[0]} />
          </Link>

          <Link
            href="/programacao/1"
            className="col-start-7 col-span-4 mt-20 group bg-black overflow-hidden"
            style={{ aspectRatio: "1 / 1" }}
          >
            <CardContent data={schedule[1]} />
          </Link>

          <div className="col-span-12" />

          <Link
            href="/programacao/2"
            className="col-start-4 col-span-3 -mt-21 group bg-black overflow-hidden"
            style={{ aspectRatio: "1 / 1" }}
          >
            <CardContent data={schedule[2]} small />
          </Link>
          <Link
            href="/programacao/3"
            className="col-start-9 col-span-3 mt-8 group bg-black overflow-hidden"
            style={{ aspectRatio: "19 / 20" }}
          >
            <CardContent data={schedule[3]} small />
          </Link>

          <div className="col-span-12" />

          <Link
            href="/programacao/4"
            className="col-start-2 col-span-4 -mt-16 group bg-black overflow-hidden"
            style={{ aspectRatio: "1 / 1" }}
          >
            <CardContent data={schedule[4]} />
          </Link>
        </div>

        <div className="mt-24 pt-12 border-t border-white/20 text-center">
          <p className="text-white/70 font-light max-w-2xl mx-auto">
            Clique em qualquer evento para obter mais detalhes. Inscrições e
            informações adicionais serão disponibilizadas em breve.
          </p>
        </div>
      </div>
    </main>
  );
}

function CardContent({ data, small = false }: any) {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain bg-[#71AA7A] transition-transform duration-700 group-hover:scale-110 opacity-80"
        style={{
          backgroundImage: `url(${data.imagem})`,
          backgroundSize: "80%",
        }}
      />

      <div className="relative z-10 h-full p-6 flex flex-col justify-between">
        <h3
          className={`${
            small ? "text-xl" : "text-2xl"
          } font-redaction-10 text-white leading-tight`}
        >
          {data.title}
        </h3>

        <div>
          <div className="flex justify-between items-baseline">
            <span className="text-white/60 text-xs uppercase tracking-wider font-light">
              data
            </span>
            <time className="text-sm font-bold text-white font-mono">
              {data.time}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
