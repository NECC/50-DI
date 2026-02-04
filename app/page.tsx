import Image from "next/image";
import ProgramacaoPage from "./programacao/page";
import { Navigation } from "@/components/navigation";

export default function HomePage() {
  return (
    <>

      <main className="min-h-screen bg-[#71AA7A] flex items-center justify-center relative overflow-hidden px-6 [--bg-color:#71AA7A]">
      <Navigation />  
        {/* Decorative orange squares - Mantive exatamente como estavam */}
        <div className="absolute top-12 left-12 w-16 h-16 bg-[#EB5F0A] rounded-sm opacity-80" />
        <div className="absolute top-20 right-1/4 w-12 h-12 bg-[#EB5F0A] rounded-sm opacity-60" />
        <div className="absolute top-1/3 right-12 w-20 h-20 bg-[#EB5F0A] rounded-sm opacity-70" />
        <div className="absolute bottom-24 left-1/4 w-16 h-16 bg-[#EB5F0A] rounded-sm opacity-50" />
        <div className="absolute bottom-32 right-24 w-24 h-24 bg-[#EB5F0A] rounded-sm opacity-80" />
        <div className="absolute top-1/2 left-1/3 w-14 h-14 bg-[#EB5F0A] rounded-sm opacity-40" />
       
        <div className="text-center z-10 max-w-4xl w-full">
          <div className="mb-12 flex justify-center">
            <Image
              src="/Artboard2.svg" 
              alt="50 anos Informática Universidade do Minho"
              width={800} // Largura base para referência
              height={600} // Altura base para referência
              priority // Carrega a imagem imediatamente (importante para o banner principal)
              className="w-full h-auto max-w-[600px] md:max-w-[800px]" // Controla o tamanho máximo no ecrã
            />
          </div>

          {/* Coming Soon Button */}
          <button className="px-12 py-4 border-2 border-white text-white text-lg font-medium rounded-sm hover:bg-white hover:text-sage-green transition-all duration-300">
            Em Breve
          </button>

          {/* Additional info */}
          <div className="mt-16 text-white/70 text-sm font-mono max-w-2xl mx-auto leading-relaxed">
            <p>
              Celebrando cinco décadas de inovação, excelência e transformação tecnológica. Junte-se a nós nesta jornada
              através de 50 anos de história em Informática na Universidade do Minho.
            </p>
          </div>
        </div>
      </main>
      <main className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden px-6">
        <div className="mt-16 max-w-6xl mx-auto flex gap-6 items-start">
          <div className="text-[#EB5F0A] text-sm font-mono leading-relaxed">
            <p>
              O ensino regular da Informática e sua Engenharia inicia-se na Universidade do
              Minho no ano lectivo de 1976-77. Pioneiro no país, o novo curso, sob a designação
              Engenharia de Produção – Ramo Sistemas, incluia no seu plano de estudos
              disciplinas como Linguagens de Programação, Sistemas de Computação ou
              Processamento de Dados, O último semestre previa um estágio na indústria de
              modo a facilitar a integração dos futuros engenheiros no mercado de trabalho.
            </p>
            <p>
              E foi assim que tudo começou. Quatro anos mais tarde, o curso autonomizava-se na
              Licenciatura em Engenharia de Sistemas e Informática, a LESI, e, um pouco depois,
              diversificar-se-ia com a criação da Licenciatura em Matemática e Ciências da
              Computação, a LMCC. Dois cursos marcaram decisivamente o desenvolvimento da
              Informática em Portugal e sucessivas gerações de alunos. Prosseguiriam com o
              mesmo sucesso, após Bolonha, na Licenciatura e Mestrado em Engenharia
              Informática e na Licenciatura em Ciências de Computação.
            </p>
            <p>
              Entretanto, a oferta cresceu e diversificou-se. Alguns ramos, como os Sistemas de
              Informação, consolidaram-se em novos departamentos, outros autonomizaram-se
              em novos projectos, como as Comunicações e, mais recentemente, as Ciências de
              Dados, a Informática Médica, a Inteligência Artificial, a Segurança da Informação ou
              a Computação de Alto Desempenho. Cursos de fronteira surgiram em diálogo com
              outros domínios do saber, como a Bioinformática e a Engenharia Física, esta última
              igualmente pioneira no ensino da computação quântica.
            </p>
            <p>
              Simultaneamente, uma forte e consistente dimensão de investigação, com elevado
              nível de internacionalização, veio escudar o vertiginoso desenvolvimento da
              Informática nesta Casa. Desde o início, também aí, fomos pioneiros: em 1995 o
              Departamento de Informática organizou a primeira conferência nacional em WWW,
              alojou a primeira página institucional de Portugal, e daqui saiu a primeira mensagem
              de e-mail.
            </p>
            <p>
              O segredo deste sucesso reside na conjugação de três factores: ensino exigente e
              rigoroso; investigação internacionalmente reconhecida, hoje enquadrada no
              Algoritmi e no INESC TEC; aposta consistente na inovação, no empreendedorismo
              e no diálogo com o tecido empresarial.
            </p>
            <p>
              Este último pilar é constitutivo, desde o início, do código genético da Informática na
              UMinho. Concretizando o célebre aforismo de E. W. Dijkstra, procuramos levar à
              indústria não tanto o que ela quer, mas o que de facto precisa. E fazer, em conjunto,
              esse caminho.
            </p>
            <p>  
              Assim se explica o vibrante ecossistema de inovação que é imagem de marca da
              Informática na UMinho. Caminho iniciado logo na década de 1970, com a criação da
              Datamatic, e continuado hoje com empresas fundamentais, em domínios que vão da
              segurança à sustentação da vida, do processamento de documentos às bases de
              dados distribuídas, dos agentes inteligentes à engenharia de dados.
              Pedindo de empréstimo o verso de António Machado
            </p>
              <blockquote className="mt-0 border-l-4 border-[var(--bg-color)] pl-6 italic text-[#EB5F0A]">
                "Caminhante, não há caminho: faz-se caminho ao andar."
              </blockquote>
              <p>
              invocamos nesta exposição um percurso de 50 anos, assinalando metas,
              sublinhando desafios, registando as pequenas e grandes histórias que nos
              conduziram até aqui.
            </p>
            <p>
              Apetece juntar os nomes e os rostos de tantos alunos, investigadores, parceiros
              que, em cada dia, fizeram tantos anos. Orgulhamo-nos do seu profissionalismo, da
              sua competência, dos seus inúmeros sucessos. São eles que validam e certificam
              este caminho. Com eles nos abrimos, confiadamente, aos próximos 50 anos.
            </p>
          </div>
           <div className="absolute top-12 left-12 w-16 h-16 bg-[#71AA7A] rounded-sm opacity-80" />
          <div className="absolute top-20 right-1/4 w-12 h-12 bg-[#71AA7A] rounded-sm opacity-60" />
          <div className="absolute top-1/3 right-12 w-20 h-20 bg-[#71AA7A] rounded-sm opacity-70" />
          <div className="absolute bottom-24 left-1/4 w-16 h-16 bg-[#71AA7A] rounded-sm opacity-50" />
          <div className="absolute bottom-32 right-24 w-24 h-24 bg-[#71AA7A] rounded-sm opacity-80" />
          <div className="absolute top-1/2 left-1/3 w-14 h-14 bg-[#71AA7A] rounded-sm opacity-40" />
        </div>
      </main>
      <ProgramacaoPage/>
    </>
  )
}