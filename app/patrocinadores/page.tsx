"use client"

import { Navigation } from "@/components/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation as SwiperNav, Pagination, Autoplay } from "swiper/modules"





export default function PatrocinadoresPage() {
  const sponsors = {
  platinum: [
    { name: "Accenture", logo: "/Acc_Logo_All_Black_RGB.png" , 
video: {
      type: "youtube",
      src: "https://www.youtube.com/embed/YSJ4P2XZeSQ"
    }
},
    { name: "Uphold", logo: "/uphold-branded-house-horizontal-for-light.svg" , video: {
      type: "youtube",
      src: "https://www.youtube.com/embed/bJEgnJUh_m8"
    } },
  ],
  gold: [
    { name: "Retail Consult", logo: "/rc_logo_rgb_main.png" , 
video: {
      type: "youtube",
      src: "https://www.youtube.com/embed/-GidmadVPbM"
}

},
    { name: "F3M", logo: "/LOGO-F3M.svg",
video: {
      type: "youtube",
      src: "https://www.youtube.com/embed/AysYpWMNKt8"
}

},
    { name: "VisionWare", logo: "/LOGO-HORIZONTAL_GRADIENTE-AZUL.svg",
video: {
      type: "youtube",
      src: "https://www.youtube.com/embed/WEE0Yk1K71I"
}


 },
    { name: "Checkmarx", logo: "/CheckmarxBlue.svg",

video: {
      type: "youtube",
      src: "https://www.youtube.com/embed/rB7sr0f6dq0"
},
 },
  ],
  silver: [
    { name: "INESC TEC", logo: "/INESCTECLogotipo_CORPositivo_RGB.png" ,

video: {
      type: "youtube",
      src: "https://www.youtube.com/embed/O_F43w6qfwc"
}
},
    { name: "KEEPS", logo: "/keeps_logo_black_en_large 1.svg" , 
video: {
      type: "youtube",
      src: "https://www.youtube.com/embed/svvw41jgBbc"
}
},
    { name: "Cachapuz", logo: "/Cachapuz.svg" ,


video: {
      type: "youtube",
      src: "https://www.youtube.com/embed/b08gNMzf48o"
}
},
    { name: "Eurotux", logo: "/Tux_logo2_svg_site.svg" ,

video: {
      type: "youtube",
      src: "https://www.youtube.com/embed/p4oZwer0RvQ"
}

},
  ],
  bronze: [
    { name: "Kelvin", logo: "/Kelvin-Color-TM.svg" 

},

    { name: "Ponto 25", logo: "/Logo_Ponto25.svg" 


},
  ],
}


  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-20"> 

{/*

<main className="min-h-screen pt-20 bg-gradient-to-br from-[#EB5F0A] via-[#EB5F0A] to-[#E55100]">
*/}
{/*
<main className="
  min-h-screen 
  bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#0f0f0f]
  bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_60%)]
  bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_70%)]
  py-20 px-6 text-white
">

<main className="
  min-h-screen 
  bg-gradient-to-br from-white/80 to-white/40
  backdrop-blur-2xl
  bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.7),transparent_60%)]
  bg-[radial-gradient(circle_at_70%_70%,rgba(240,240,240,0.5),transparent_70%)]
  py-20 px-6
">



<main className="
  min-h-screen 
  bg-gradient-to-br from-[#f8f8f8] via-[#eaeaea] to-[#dcdcdc]
  bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6),transparent_60%)]
  bg-[radial-gradient(circle_at_80%_80%,rgba(200,200,200,0.4),transparent_70%)]
  py-20 px-6
">

*/}


        <div className="container mx-auto px-4 sm:px-6 py-12">
          {/* Header */}
          <div className="mb-16 md:mb-24 text-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-redaction-20 text-[#EB5F0A] mb-4 text-balance leading-tight">
              Patrocinadores
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl font-light max-w-2xl mx-auto text-center">
              Apoiantes das Comemorações dos 50 Anos
            </p>
          </div>

          <div className="space-y-16 pb-24">



        {/* PLATINUM — GLASS + METAL */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl font-bold text-[#E5E4E2] font-mono">PLATINA</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#E5E4E2] to-transparent" />
          </div>

          <Swiper
            modules={[SwiperNav, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 100500 }}
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
          >
            {sponsors.platinum.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    relative rounded-2xl p-10 border border-white/30
                    bg-gradient-to-br from-white/20 via-white/10 to-white/5
                    backdrop-blur-xl
                    shadow-[0_8px_32px_rgba(0,0,0,0.15)]
                    before:absolute before:inset-0 before:rounded-2xl
                    before:bg-gradient-to-br before:from-[#ffffff]/60 before:via-[#e5e5e5]/30 before:to-[#cfcfcf]/20
                    before:opacity-60
                    hover:before:opacity-80
                    before:transition-all before:duration-500
                    overflow-hidden
                  "
                >
                  <div className="text-center relative z-10">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-28 mx-auto mb-4 object-contain drop-shadow-md"
                    />
                    <span className="text-xl font-bold text-gray-800">{sponsor.name}</span>

{sponsor.video && (
  <div className="mt-4 aspect-video w-full">
    {sponsor.video.type === "youtube" ? (
      <iframe
        className="w-full h-full rounded-lg"
        src={sponsor.video.src}
        title={sponsor.name}
        allowFullScreen
      />
    ) : (
      <video
        className="w-full h-full rounded-lg"
        controls

      muted
      playsInline
        preload="metadata"
      onPlay={(e) => {
        const swiper = e.currentTarget.closest(".swiper")?.swiper
        swiper?.autoplay.stop()
      }}
      onEnded={(e) => {
        const swiper = e.currentTarget.closest(".swiper")?.swiper
        swiper?.autoplay.start()
        swiper?.slideNext()
      }}



      >
        <source src={sponsor.video.src} type="video/mp4" />
        O seu browser não suporta vídeo.
      </video>
    )}
  </div>
)}

                  </div>

                  {/* Reflexo diagonal */}
                  <div
                    className="
                      absolute inset-0 pointer-events-none
                      bg-gradient-to-tr from-transparent via-white/20 to-transparent
                      opacity-0 hover:opacity-40
                      transition-opacity duration-700
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* GOLD — OURO LÍQUIDO */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl font-bold text-yellow-600 font-mono">OURO</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-yellow-500 to-transparent" />
          </div>

          <Swiper
            modules={[SwiperNav, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 100000 }}
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {sponsors.gold.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    relative rounded-xl p-8 border border-yellow-300/40
                    bg-gradient-to-br from-yellow-200/40 via-yellow-100/20 to-yellow-50/10
                    backdrop-blur-md
                    shadow-[0_8px_24px_rgba(255,200,0,0.25)]
                    before:absolute before:inset-0 before:rounded-xl
                    before:bg-gradient-to-br before:from-yellow-300/60 before:via-yellow-200/30 before:to-yellow-100/10
                    before:opacity-50
                    hover:before:opacity-80
                    before:transition-all before:duration-500
                    overflow-hidden
                  "
                >
                  <div className="text-center relative z-10">
                    <img src={sponsor.logo} alt={sponsor.name} className="h-24 mx-auto mb-4 object-contain drop-shadow" />
                    <span className="text-lg font-bold text-yellow-800">{sponsor.name}</span>




{sponsor.video && (
  <div className="mt-4 aspect-video w-full">
    {sponsor.video.type === "youtube" ? (
      <iframe
        className="w-full h-full rounded-lg"
        src={sponsor.video.src}
        title={sponsor.name}
        allowFullScreen
      />
    ) : (
      <video
        className="w-full h-full rounded-lg"
        controls
      muted
      playsInline
        preload="metadata"
      onPlay={(e) => {
        const swiper = e.currentTarget.closest(".swiper")?.swiper
        swiper?.autoplay.stop()
      }}
      onEnded={(e) => {
        const swiper = e.currentTarget.closest(".swiper")?.swiper
        swiper?.autoplay.start()
        swiper?.slideNext()
      }}




      >
        <source src={sponsor.video.src} type="video/mp4" />
        O seu browser não suporta vídeo.
      </video>
    )}
  </div>
)}





                  </div>

                  {/* Reflexo */}
                  <div
                    className="
                      absolute inset-0 pointer-events-none
                      bg-gradient-to-tr from-transparent via-yellow-200/20 to-transparent
                      opacity-0 hover:opacity-40
                      transition-opacity duration-700
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* SILVER — VIDRO PRATEADO */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl font-bold text-gray-500 font-mono">PRATA</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-gray-400 to-transparent" />
          </div>

          <Swiper
            modules={[SwiperNav, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 100000 }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {sponsors.silver.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    relative rounded-xl p-6 border border-gray-300/40
                    bg-gradient-to-br from-gray-200/30 via-gray-100/10 to-gray-50/5
                    backdrop-blur-lg
                    shadow-[0_6px_20px_rgba(0,0,0,0.15)]
                    before:absolute before:inset-0 before:rounded-xl
                    before:bg-gradient-to-br before:from-white/50 before:via-gray-200/20 before:to-gray-100/10
                    before:opacity-50
                    hover:before:opacity-80
                    before:transition-all before:duration-500
                    overflow-hidden
                  "
                >
                  <div className="text-center relative z-10">
                    <img src={sponsor.logo} alt={sponsor.name} className="h-20 mx-auto mb-3 object-contain drop-shadow-sm" />
                    <span className="text-sm font-bold text-gray-700">{sponsor.name}</span>



{sponsor.video && (
  <div className="mt-4 aspect-video w-full">
    {sponsor.video.type === "youtube" ? (
      <iframe
        className="w-full h-full rounded-lg"
        src={sponsor.video.src}
        title={sponsor.name}
        allowFullScreen
      />
    ) : (
      <video
        className="w-full h-full rounded-lg"
        controls
        preload="none"





      muted
      playsInline
      onPlay={(e) => {
        const swiper = e.currentTarget.closest(".swiper")?.swiper
        swiper?.autoplay.stop()
      }}
      onEnded={(e) => {
        const swiper = e.currentTarget.closest(".swiper")?.swiper
        swiper?.autoplay.start()
        swiper?.slideNext()
      }}








      >
        <source src={sponsor.video.src} type="video/mp4" />
        O seu browser não suporta vídeo.
      </video>
    )}
  </div>
)}



                  </div>

                  {/* Reflexo */}
                  <div
                    className="
                      absolute inset-0 pointer-events-none
                      bg-gradient-to-tr from-transparent via-white/15 to-transparent
                      opacity-0 hover:opacity-40
                      transition-opacity duration-700
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* BRONZE — COBRE QUENTE */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl font-bold text-orange-900 font-mono">BRONZE</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-orange-800 to-transparent" />
          </div>

          <Swiper
            modules={[SwiperNav, Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView={6}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 100000 }}
            loop
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
          >
            {sponsors.bronze.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    relative rounded-lg p-4 border border-orange-900/40
                    bg-gradient-to-br from-orange-300/30 via-orange-200/20 to-orange-100/10
                    backdrop-blur-sm
                    shadow-[0_6px_18px_rgba(120,60,0,0.25)]
                    before:absolute before:inset-0 before:rounded-lg
                    before:bg-gradient-to-br before:from-orange-200/50 before:via-orange-100/20 before:to-orange-50/10
                    before:opacity-40
                    hover:before:opacity-70
                    before:transition-all before:duration-500
                    overflow-hidden
                  "
                >
                  <div className="text-center relative z-10">
                    <img src={sponsor.logo} alt={sponsor.name} className="h-14 mx-auto mb-2 object-contain drop-shadow-sm" />
                    <span className="text-xs font-bold text-orange-900">{sponsor.name}</span>



{sponsor.video && (
  <div className="mt-4 aspect-video w-full">
    {sponsor.video.type === "youtube" ? (
      <iframe
        className="w-full h-full rounded-lg"
        src={sponsor.video.src}
        title={sponsor.name}
        allowFullScreen
      />
    ) : (
      <video
        className="w-full h-full rounded-lg"
        controls
        preload="none"
      >
        <source src={sponsor.video.src} type="video/mp4" />
        O seu browser não suporta vídeo.
      </video>
    )}
  </div>
)}



                  </div>

                  {/* Reflexo */}
                  <div
                    className="
                      absolute inset-0 pointer-events-none
                      bg-gradient-to-tr from-transparent via-orange-200/15 to-transparent
                      opacity-0 hover:opacity-40
                      transition-opacity duration-700
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>












</div>
        </div>
      </main>
    </>
  )
}
