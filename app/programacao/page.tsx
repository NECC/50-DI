import { Navigation } from "@/components/navigation";
import Link from "next/link";

export default function ProgramacaoPage() {
  const schedule = [
    {
      time: "Ao longo de 2026-2027",
      title: "Exposição 50 Anos Informática UMinho",
      imagem: "/ImagensEventosSite_03.jpg",
      location:
        "Departamento de Informática da Escola de Engenharia, Campus de Gualtar",
      description:
        "Patente no Departamento de Informática da Escola de Engenharia, Campus de Gualtar, ao longo de 2026-2027.",
    },
    {
      time: "8 Abril 2026",
      title: "Informática 50 Anos: Memória e Desafio",
      imagem: "/ImagensEventosSite_04.jpg",
      location: "Auditório Principal",
      description:
        "Sessão de Abertura, mesa-redonda, e inauguração da Exposição 50 Anos da Informática na UMinho.",
    },
    {
      time: "11 Abril, 2026 (18H00)",
      title: "Os Próximos 50 Anos no Ensino da Informática",
      imagem: "/ImagensEventosSite_05.jpg",
      location: "Fórum Braga",
      description:
        "Tertúlia integrada na ENEI - Encontro Nacional de Estudantes de Informática.",
    },
    {
      time: "27 Maio, 2026 (14H30)",
      title: "Informática, Inovação e o Futuro",
      imagem: "/ImagensEventosSite_06.jpg",
      location: "Campus de Gualtar (Ed. 2, B1)",
      description:
        "Mesa-redonda com actores-chave do tecido empresarial em Informática.",
    },
    {
      time: "2 - 3 Junho, 2026 (9H30 às 17H30)",
      title: "Engenharia de Software Apoiada por Assistentes Artificiais",
      imagem: "/ImagensEventosSite_08.jpg",
      location: "Campus de Gualtar (Ed. 2, B2)",
      description:
        "Workshop sobre desafios e oportunidades da IA no desenvolvimento de software, com alunos, peritos e empresas.",
    },
    {
      time: "3ª semana de Setembro 2026",
      title: "Informática@UMinho: A Festa dos 50 Anos",
      imagem: "/ImagensEventosSite_09.jpg",
      location: "Auditório Principal",
      description:
        "Oportunidade de convívio e networking entre academia, estudantes, alumni e empresas.",
    },
    {
      time: "Data a anunciar em 2027",
      title: "Os próximos 50 anos: Caminhos para a investigação",
      imagem: "/ImagensEventosSite_07.jpg",
      location: "",
      description:
        "Seminário sobre o futuro da investigação em Computação e sua Engenharia.",
    },
  ];

  return (
    <main className="min-h-screen pt-20 bg-[#EB5F0A]">
      <Navigation />

      {/* Alterado de z-10 para z-1 */}
      <div className="container mx-auto px-4 sm:px-6 py-12 relative">
        <div className="mb-16 md:mb-24">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-redaction-20 text-white mb-4 leading-tight">
            Programação
          </h1>
          <p className="text-white/80 text-lg sm:text-xl font-light max-w-2xl">
            Descubra os principais eventos que celebram os 50 anos de excelência
            em Informática
          </p>
        </div>

        {/* Mobile: one card per line */}
        <div className="lg:hidden flex flex-col gap-4 z-1">
          {schedule.map((item, i) => (
            <Link
              key={i}
              href={`/programacao/${i}`}
              className="group bg-black overflow-hidden block w-full"
              style={{ aspectRatio: "1 / 1" }}
            >
              <CardContent data={item} small={item} />
            </Link>
          ))}
        </div>

        {/* Desktop: staggered pairs */}
        <div className="hidden lg:flex flex-col max-w-[1400px] mx-auto z-1">
          {chunkSchedule(schedule).map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex gap-24 items-start ${rowIndex > 0 ? "mt-20" : ""}`}
              style={{ paddingLeft: rowIndex % 2 === 1 ? "1%" : "0%" }}
            >
              {row.map((item, colIndex) => (
                <Link
                  key={colIndex}
                  href={`/programacao/${item.index}`}
                  className="group bg-black overflow-hidden flex-shrink-0 "
                  style={{
                    width: item.large ? "45%" : "43%",
                    aspectRatio: "1 / 1",
                    marginTop: colIndex === 1 ? "5rem" : "0",
                  }}
                >
                  <CardContent data={item} />
                </Link>
              ))}
            </div>
          ))}
        </div>


<div className="mt-24 pt-12 border-t border-white/20 text-center">
  <p className="text-white/70 font-light mb-8">
    Outros Apoios
  </p>

  <div className="flex flex-wrap justify-center items-center gap-10">
    {[
      { name: "EEUM", logo: "logos/EEUM_logo.png" },
      { name: "Arquivo Distrital", logo: "logos/logo_adb_white.png" },
      { name: "Algoritmi", logo: "logos/ALGORITMI.png" },
      { name: "HASLab", logo: "logos/HASLAB.png" },
    ].map((org, i) => (
      <div key={i} className="flex flex-col items-center gap-2">
        <img
          src={org.logo}
          alt={org.name}
          className="h-12 object-contain"
        />
        <span className="text-white/70 text-sm">{org.name}</span>
      </div>
    ))}
  </div>
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

function chunkSchedule(schedule: any[]) {
  const rows = [];
  for (let i = 0; i < schedule.length; i += 2) {
    const row = [];
    row.push({ ...schedule[i], index: i, large: i % 4 === 0 });
    if (i + 1 < schedule.length) {
      row.push({ ...schedule[i + 1], index: i + 1, large: i % 4 !== 0 });
    }
    rows.push(row);
  }
  return rows;
}

function CardContent({ data, small = false }: any) {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain bg-[#71AA7A] transition-transform duration-700 group-hover:scale-110 opacity-80"
        style={{
          backgroundImage: `url(${data.imagem})`,
          backgroundSize: "67%",
          backgroundPosition: "center 65%",
        }}
      />
      {/* Alterado de z-1 para z-1 (já estava, mas garantido) */}
      <div className="relative z-1 h-full p-6 flex flex-col justify-between">
        <h3
          className={`${
            small ? "text-xl" : "text-4xl"
          } font-redaction-10 text-white leading-tight`}
        >
          {data.title}
        </h3>
      </div>
    </div>
  );
}
