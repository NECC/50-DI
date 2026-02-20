import Image from "next/image";
import ProgramacaoPage from "./programacao/page";
import { Navigation } from "@/components/navigation";
import { Icon } from "@/components/icon"
import Sponsors from "@/components/sponsors/Sponsors";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-[#71AA7A] flex items-center justify-center relative overflow-hidden px-6 [--bg-color:#71AA7A]">
        <Navigation />
        {/* Decorative orange squares - Mantive exatamente como estavam */}
        <div className="absolute top-20 left-12 w-16 h-16 bg-[#EB5F0A] rounded-sm opacity-100" />
        <div className="absolute top-20 right-1/4 w-12 h-12 bg-[#EB5F0A] rounded-sm opacity-100" />
        <div className="absolute top-1/3 right-12 w-20 h-20 bg-[#EB5F0A] rounded-sm opacity-100" />
        <div className="absolute bottom-24 left-1/4 w-16 h-16 bg-[#EB5F0A] rounded-sm opacity-100" />
        <div className="absolute bottom-32 right-24 w-24 h-24 bg-[#EB5F0A] rounded-sm opacity-100" />
        <div className="absolute top-1/2 left-1/3 w-14 h-14 bg-[#EB5F0A] rounded-sm opacity-100" />

        <div className="text-center z-10 max-w-4xl w-full">
          {/* Image */}
          <div className="mb-12 flex justify-center">
            <Image
              src="/Artboard2.svg"
              alt="50 anos Informática Universidade do Minho"
              width={800}
              height={600}
              priority
              className="w-full h-auto max-w-[500px] md:max-w-[700px]"
            />
          </div>

          {/* Coming Soon Button
          <button className="px-12 py-4 border-2 border-white text-white text-lg font-medium rounded-lg hover:bg-white hover:text-[#71AA7A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Em Breve
          </button>

          {/* Additional info */}
          <div className="mt-16 text-white/70 text-sm font-mono max-w-2xl mx-auto leading-relaxed">
            <p>
              Celebrando cinco décadas de inovação, excelência e transformação
              tecnológica. Junte-se a nós nesta jornada através de 50 anos de
              história em Informática na Universidade do Minho.
            </p>
          </div>
        </div>
      </main>
      <main className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden px-6">
        <div className="my-16 max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full flex flex-col gap-16">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:flex-1 min-w-0 break-words whitespace-normal text-[#EB5F0A] text-md font-mono leading-relaxed">
                    <p className="">
                      O ensino regular da Informática e sua Engenharia inicia-se na
                      Universidade do Minho no ano lectivo de 1976-77. Pioneiro no país,
                      o novo curso, sob a designação Engenharia de Produção – Ramo
                      Sistemas, incluia no seu plano de estudos disciplinas como
                      Linguagens de Programação, Sistemas de Computação ou Processamento
                      de Dados, O último semestre previa um estágio na indústria de modo
                      a facilitar a integração dos futuros engenheiros no mercado de
                      trabalho.
                    </p>
                    <br />
                    <p>
                      E foi assim que tudo começou. Quatro anos mais tarde, o curso
                      autonomizava-se na Licenciatura em Engenharia de Sistemas e
                      Informática, a LESI, e, um pouco depois, diversificar-se-ia com a
                      criação da Licenciatura em Matemática e Ciências da Computação, a
                      LMCC. Dois cursos marcaram decisivamente o desenvolvimento da
                      Informática em Portugal e sucessivas gerações de alunos.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 z-20 bg-[#71AA7A] opacity-40 rounded-md pointer-events-none" />
                    <Image
                      src="/home1.jpg"
                      alt="50 anos Informática Universidade do Minho"
                      width={800}
                      height={600}
                      priority
                      className="relative z-10 w-full md:w-96 h-56 md:h-96 rounded-md flex-shrink-0 object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
                  <div className="md:flex-1 min-w-0 text-[#EB5F0A] text-md font-mono leading-relaxed">
                        <p className="break-words whitespace-normal">
                      Entretanto, a oferta cresceu e diversificou-se. Alguns ramos, como
                      os Sistemas de Informação, consolidaram-se em novos departamentos,
                      outros autonomizaram-se em novos projectos, como as Comunicações
                      e, mais recentemente, as Ciências de Dados, a Informática Médica,
                      a Inteligência Artificial, a Segurança da Informação ou a
                      Computação de Alto Desempenho. Cursos de fronteira surgiram em
                      diálogo com outros domínios do saber, como a Bioinformática e a
                      Engenharia Física, esta última igualmente pioneira no ensino da
                      computação quântica.
                    </p>
                    <br />
                    <p>
                      Simultaneamente, uma forte e consistente dimensão de investigação,
                      com elevado nível de internacionalização, veio escudar o
                      vertiginoso desenvolvimento da Informática nesta Casa. Desde o
                      início, também aí, fomos pioneiros: em 1995 o Departamento de
                      Informática organizou a primeira conferência nacional em WWW,
                      alojou a primeira página institucional de Portugal, e daqui saiu a
                      primeira mensagem de e-mail.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 z-20 bg-[#71AA7A] opacity-40 rounded-md pointer-events-none" />
                    <Image
                      src="/home2.jpg"
                      alt="50 anos Informática Universidade do Minho"
                      width={800}
                      height={600}
                      priority
                      className="relative z-10 w-full md:w-96 h-56 md:h-96 rounded-md flex-shrink-0 object-cover"
                    />
                  </div>
              </div>

                <div className="flex flex-col md:flex-row gap-16 items-center">
                  <div className="md:flex-1 min-w-0 text-[#EB5F0A] text-md font-mono leading-relaxed">
                        <p className="break-words whitespace-normal">
                      O segredo deste sucesso reside na conjugação de três factores:
                      ensino exigente e rigoroso; investigação internacionalmente
                      reconhecida, hoje enquadrada no Algoritmi e no INESC TEC; aposta
                      consistente na inovação, no empreendedorismo e no diálogo com o
                      tecido empresarial.
                    </p>
                    <br />
                    <p>
                      Este último pilar é constitutivo, desde o início, do código
                      genético da Informática na UMinho. Concretizando o célebre
                      aforismo de E. W. Dijkstra, procuramos levar à indústria não tanto
                      o que ela quer, mas o que de facto precisa. E fazer, em conjunto,
                      esse caminho.
                    </p>
                    <br />
                    <p>
                      Assim se explica o vibrante ecossistema de inovação que é imagem
                      de marca da Informática na UMinho. Caminho iniciado logo na década
                      de 1970, com a criação da Datamatic, e continuado hoje com
                      empresas fundamentais, em domínios que vão da segurança à
                      sustentação da vida, do processamento de documentos às bases de
                      dados distribuídas, dos agentes inteligentes à engenharia de
                      dados.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 z-20 bg-[#71AA7A] opacity-40 rounded-md pointer-events-none" />
                    <Image
                      src="/home3.jpg"
                      alt="50 anos Informática Universidade do Minho"
                      width={800}
                      height={600}
                      priority
                      className="relative z-10 w-full md:w-96 h-56 md:h-96 rounded-md flex-shrink-0 object-cover"
                    />
                  </div>
                </div>
              </div>
        </div>
      </main>
      <section id="programacao">
        <ProgramacaoPage />
      </section>
      {/* <section id="patrocinadores">
        <Sponsors
          mainSponsors={[
            { name: "Patrocinador 1", logo: "/icon.svg" },
            { name: "Patrocinador 2" },
            { name: "Patrocinador 4" },
            { name: "Patrocinador 4" },
            { name: "Patrocinador 4" },
            { name: "Patrocinador 3", logo: "/icon.svg" },
            { name: "Patrocinador 3", logo: "/icon.svg" },
            { name: "Patrocinador 3", logo: "/icon.svg" },
          ]}
          exhibitionSponsors={[
            { name: "Exposição 1", logo: "/icon.svg" },
            { name: "Exposição 2" },
            { name: "Exposição 3", logo: "/icon.svg" },
          ]}
        />
      </section> */}
    </>
  );
}
