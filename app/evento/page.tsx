import { Navigation } from "@/components/navigation"

export default function EventoPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column - Content */}
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-vibrant-orange mb-8 text-balance">nome do evento</h1>

              <div className="space-y-6 text-vibrant-orange/80 text-sm leading-relaxed font-mono">
                <p>
                  Este evento marca um momento histórico na celebração dos 50 anos da Engenharia Informática. Durante
                  décadas, testemunhamos transformações extraordinárias que moldaram o mundo digital que conhecemos
                  hoje.
                </p>

                <p>
                  Desde os primeiros sistemas de computação de grande porte até à era da computação em nuvem e
                  inteligência artificial, a nossa jornada tem sido marcada por inovação constante e excelência
                  académica.
                </p>

                <p>
                  Junte-se a nós para celebrar as conquistas do passado e explorar as possibilidades do futuro. Este é
                  um momento de reflexão, partilha e inspiração para a próxima geração de engenheiros informáticos.
                </p>

                <div className="pt-8 space-y-2">
                  <p className="font-bold text-vibrant-orange">Data: XX de XXX de 2024</p>
                  <p className="font-bold text-vibrant-orange">Local: AUDITÓRIO PRINCIPAL, XXXXX</p>
                  <p className="font-bold text-vibrant-orange">Horário: XXhXX</p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src="/images/mainframe-1.jpg"
                  alt="Vintage computing equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
