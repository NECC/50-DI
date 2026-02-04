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
      <main className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          {/* Header Section */}
          <div className="mb-16 md:mb-24">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-redaction-20 text-[#EB5F0A] mb-4 text-balance leading-tight">
              Depoimentos
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl font-light max-w-2xl">
              Testemunhos de Professores e Ex-Diretores sobre o Departamento
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 pb-24">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 p-8 hover:border-[#EB5F0A]/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Avatar and Info */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#EB5F0A] to-orange-500 flex-shrink-0 overflow-hidden shadow-md">
                    <img
                      src={testimonial.image || "/placeholder.svg?height=80&width=80"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#EB5F0A] text-sm font-mono">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#EB5F0A] to-transparent mb-6" />

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-[#EB5F0A] to-transparent group-hover:h-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
