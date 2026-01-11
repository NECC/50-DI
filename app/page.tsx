import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Removed Navigation component */}
      <main className="min-h-screen bg-sage-green flex items-center justify-center relative overflow-hidden px-6">
        
        {/* Decorative orange squares - Mantive exatamente como estavam */}
        <div className="absolute top-12 left-12 w-16 h-16 bg-vibrant-orange rounded-sm opacity-80" />
        <div className="absolute top-20 right-1/4 w-12 h-12 bg-vibrant-orange rounded-sm opacity-60" />
        <div className="absolute top-1/3 right-12 w-20 h-20 bg-vibrant-orange rounded-sm opacity-70" />
        <div className="absolute bottom-24 left-1/4 w-16 h-16 bg-vibrant-orange rounded-sm opacity-50" />
        <div className="absolute bottom-32 right-24 w-24 h-24 bg-vibrant-orange rounded-sm opacity-80" />
        <div className="absolute top-1/2 left-1/3 w-14 h-14 bg-vibrant-orange rounded-sm opacity-40" />

        <div className="text-center z-10 max-w-4xl w-full">
          
          {/* LOGO SUBSTITUI O TEXTO ANTERIOR */}
          {/* Ajustei o margin-bottom (mb-12) para dar espaço ao botão */}
          <div className="mb-12 flex justify-center">
            <Image
              src="/Artboard 2.svg" 
              alt="50 anos Engenharia Informática Universidade do Minho"
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
    </>
  )
}