import { Navigation } from "@/components/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const schedule = [
  {
    time: "Durante 2026-2027",
    title: "Exposição 50 Anos Informática UMinho",
    imagem: "/Artboard2.svg",
    location:
      "Departamento de Informática da Escola de Engenharia, Campus de Gualtar",
    description: `
<p align="justify">Esta exposição faz parte das celebrações os <b>50 anos da Informática na Universidade do Minho</b> que ao longo deste ano de 2026 e prolongando-se por 2027 terão lugar no <a href="https://web.di.uminho.pt/sitedi/">Departamento de Informática</a> da <a href="https://www.eng.uminho.pt/pt/Paginas/default.aspx">Escola de Engenharia</a>.
</p>
<br>
<p align="justify">
Com a desmaterialização progressiva da actividade académica, consequência do advento da internet e das rápidas comunicações que hoje temos, permitindo que tudo esteja disponível de imediato, em suporte electrónico, achou-se interessante dar prioridade aos tempos em que tudo era <em>feito à mão</em>, ou quase, pelo interesse que isso possa suscitar nas camadas mais jovens e a bem da preservação da memória colectiva da instituição.</p>`,
  },
  {
    time: "8 Abril, 2026 (14H30)",
    title: "Informática 50 Anos: Memória e Desafio",
    imagem: "/Artboard2.svg",
    location: "Campus de Gualtar (Ed. 2, B1)",
    description: `

**Programação**
<br/><br/>
### 14:30
Saudação do Diretor do Departamento de Informática  
Intervenção do Senhor Presidente da Escola de Engenharia  
Abertura das Comemorações pelo Senhor Reitor da Universidade do Minho
<br/><br/>
### 14:45
Atuação do quarteto de cordas e clarinete do Departamento de Música da ELACH
<br/><br/>
### 15:00
Mesa-redonda: **Informática 50 Anos — Memória e Desafio**

Moderada pelo Prof. João Álvaro Carvalho, com vários professores convidados.
<br/><br/>
### 16:30
Inauguração da Exposição Informática na UMinho: 50 Anos
<br/><br/>
### 17:30
Cocktail
`,
  },
  {
    time: "11 Abril, 2026 (18H00)",
    title: "Os Próximos 50 Anos no Ensino da Informática",
    imagem: "/icon.svg",
    location: "Fórum Braga",
    description: `
<p>Tertúlia integrada na ENEI - Encontro Nacional de Estudantes de Informática.</p>
`,
  },
{
  time: "27 Maio, 2026 (14H30)",
  title: "Informática, Inovação e o Futuro",
  imagem: "/icon.svg",
  location: "Campus de Gualtar (Ed. 2, B1)",
  description: `
Estará em debate o triângulo **Informática, Inovação e Futuro**, numa mesa redonda com diversos actores‑chave do tecido empresarial e do vibrante ecossistema de inovação que é hoje imagem de marca da Informática na UMinho.
<br/><br/>
**Programação**

### 14:30 — Saudação e boas‑vindas

- Prof. Raúl Fangueiro, Pró‑Reitor para Inovação, Empreendedorismo e Transferência de Conhecimento  
- Prof. Luís Soares Barbosa, Diretor do Departamento de Informática
<br/><br/>

### 14:45 — Mesa‑redonda: **Informática, Inovação e Futuro**

Moderada por António Nestor Ribeiro, professor no Departamento de Informática e diretor do Mestrado em Engenharia Informática.
<br/><br/>
Participantes:
- José Dionísio, Fundação Primavera (anteriormente Cegid‑Primavera)
- Graça Carvalho, Directora do Centre for Digital Innovation, UCL Londres
- Hugo Portela, Accenture
- Nuno Ferreira, Uphold
- José Pedro Magalhães, Standard Chartered Bank e fundador da Chordify
- Jorge Brás, Pathena
<br/><br/>
Encerramento pelo Prof. Daniel Oliveira, Vice‑Presidente da Escola de Engenharia.
<br/><br/>
### 17:00 — Visita à Exposição **Informática na UMinho: 50 Anos**
Edifício do Departamento de Informática no Campus de Gualtar.
<br/><br/>
<a href="https://youtu.be/iJADEov8raA">Vídeo do evento</a>
`,
},
  


{
    time: "2 - 3 Junho, 2026 (9H30 às 17H30)",
    title: "Engenharia de Software Apoiada por Assistentes Artificiais",
    imagem: "/icon.svg",
    location: "Campus de Gualtar (Ed. 2, B2)",
    description: `
<p align="center"><b>Workshop sobre desafios e oportunidades da IA no desenvolvimento de software</b></p>
<br>
<p align="justify">
O aparecimento dos modelos de linguagem avançados (LLM) impulsionou uma nova era no desenvolvimento de software assistido por agentes artificiais, no qual podemos encontrar sistemas inteligentes a colaborar na criação de código-fonte, testes de software, documentação e automação de diversas tarefas técnicas. Este tipo de abordagem está numa vertiginosa evolução, aumentando a sofisticação e o poder do desenvolvimento de software apoiado por agentes artificiais. Como consequência, obtemos ganhos na produtividade e na inovação de software, bem como enfrentamos novos desafios relacionados com fiabilidade, segurança e o futuro do papel dos programadores. Nesta workshop exploraremos o futuro do desenvolvimento de software impulsionado por agentes artificiais e LLM. Ao longo da workshop, serão abordados aspetos essenciais desta abordagem de desenvolvimento, como agentes inteligentes, orquestração de tarefas, automação de processos e colaboração entre humanos e artefactos de Inteligência Artificial no ciclo de desenvolvimento de software. Além disso promover-se-á o contacto com abordagens modernas para criação de sistemas autónomos capazes de analisar, planear, executar e otimizar tarefas de engenharia de software, bem como analisaremos o impacto da Inteligência Artificial na produtividade, arquitetura e inovação de software.
</p>
<br/>
Mais detalhes e programa completo <a href="http://es3a.di.uminho.pt">aqui</a>    
`,
  },
  {
    time: "23 de Setembro 2026",
    title: "Informática@UMinho: A Festa dos 50 Anos",
    imagem: "/icon.svg",
    location: "",
    description: `
Convívio e networking entre academia, estudantes, alumni e empresas.
    `,
  },
  {
    time: "Data a anunciar em 2027",
    title: "Os próximos 50 anos: Caminhos para a investigação",
    imagem: "/Artboard2.svg",
    location: "",
    description: `
Seminário sobre o futuro da investigação em Computação.
    `,
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
    rehypePlugins={[rehypeRaw]}
    skipHtml={false}
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
