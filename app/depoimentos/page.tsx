import { Navigation } from "@/components/navigation"

export default function DepoimentosPage() {
  const testimonials = [
    {
      name: "Prof. Dr. João Silva",
      role: "Ex-Diretor (1985-1995)",
      image: "/images/professor-1.jpg",
      quote:
        "Testemunhar o crescimento do Departamento de Informática ao longo de décadas tem sido uma honra. Vimos gerações de estudantes tornarem-se líderes da indústria tecnológica.",
    },
    {
      name: "Prof. Dra. Maria Santos",
      role: "Professora Catedrática",
      image: "/images/professor-2.jpg",
      quote:
        "A inovação sempre esteve no coração do nosso departamento. Desde os primeiros mainframes até à inteligência artificial moderna, mantivemos o compromisso com a excelência.",
    },
    {
      name: "Prof. Dr. António Costa",
      role: "Ex-Diretor (2005-2015)",
      image: "/images/professor-3.jpg",
      quote:
        "Os 50 anos do DI representam meio século de dedicação ao ensino e investigação de qualidade. É gratificante ver o impacto dos nossos alumni no mundo.",
    },
    {
      name: "Prof. Dr. Carlos Ferreira",
      role: "Diretor Atual",
      image: "/images/professor-4.jpg",
      quote:
        "Olhamos para o futuro com entusiasmo, mantendo os valores que nos trouxeram até aqui. Os próximos 50 anos prometem ser ainda mais emocionantes.",
    },
    {
      name: "Prof. Dra. Ana Rodrigues",
      role: "Professora Associada",
      image: "/images/professor-5.jpg",
      quote:
        "A comunidade do DI é única. A colaboração entre professores, estudantes e alumni cria um ambiente de aprendizagem excepcional.",
    },
    {
      name: "Prof. Dr. Pedro Almeida",
      role: "Ex-Diretor (1995-2005)",
      image: "/images/professor-6.jpg",
      quote:
        "Ver os nossos estudantes desenvolverem tecnologias que transformam a sociedade é a maior recompensa de uma carreira dedicada ao ensino.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-sage-green pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 text-balance">Depoimentos</h1>
            <p className="text-vibrant-orange text-xl font-mono">Professores e Ex-Diretores sobre o DI</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 pb-24">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-colors"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-full bg-vibrant-orange/30 flex-shrink-0 overflow-hidden">
                    <img
                      src={testimonial.image || "/placeholder.svg?height=80&width=80"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                    <p className="text-vibrant-orange text-sm font-mono">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-white/90 leading-relaxed text-lg">"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
