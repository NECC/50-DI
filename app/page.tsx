import Image from "next/image";

export default function HomePage() {
  return (
    <>

      
      <div className="flex justify-between items-center w-full bg-sage-green fixed top-0 left-0 z-50"><div className="flex items-center cursor-pointer">
      {/*<Image alt="Logo NECC" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="w-20 h-20" style="color:transparent" srcset="/_next/image?url=%2Flogos%2FneccSticker.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2Flogos%2FneccSticker.png&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2Flogos%2FneccSticker.png&amp;w=256&amp;q=75">*/}
      {/*<div className="text-[#018cca] text-lg sm:text-2xl font-semibold">NECChange</div>}
      {/*</div><div className="flex flex-col justify-center items-center w-10 h-10 sm:hidden border mx-5 cursor-pointer hover:bg-gray-100 rounded">*/}
      {/*<div className="w-5/12 h-[2px] rounded bg-black m-[1px]"></div><div className="w-5/12 h-[2px] rounded bg-black m-[1px]"></div>*/}
      {/*<div className="w-5/12 h-[2px] rounded bg-black m-[1px]"></div>*/}
      <Image alt="50-Informática" src="/Artboard2.svg" width={100} height={100} className="w-30 h-30" priority/>

      </div><ul className="text-gray-800 font-semibold sm:flex hidden items-center">
      <li><a className="px-12 py-4 text-white text-lg font-medium rounded-sm hover:bg-white hover:text-sage-green transition-all duration-300"href="/programacao">Programação</a></li>
      <li><a className="px-12 py-4 text-white text-lg font-medium rounded-sm hover:bg-white hover:text-sage-green transition-all duration-300" href="/super_user">5 décadas</a></li></ul></div>

      <main className="min-h-screen bg-sage-green flex items-center justify-center relative overflow-hidden px-6">
        
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
    </>
  )
}