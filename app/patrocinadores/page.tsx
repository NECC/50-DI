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
    { name: "Accenture", logo: "/Acc_Logo_All_Black_RGB.png" },
    { name: "Uphold", logo: "/uphold-branded-house-horizontal-for-light.svg" },
  ],
  gold: [
    { name: "Retail Consult", logo: "/rc_logo_rgb_main.png" },
    { name: "F3M", logo: "/LOGO-F3M.svg" },
    { name: "VisionWare", logo: "/LOGO-HORIZONTAL_GRADIENTE-AZUL.svg" },
    { name: "Checkmarx", logo: "/CheckmarxBlue.svg" },
  ],
  silver: [
    { name: "INESC TEC", logo: "/INESCTECLogotipo_CORPositivo_RGB.png" },
    { name: "KEEPS", logo: "/keeps_logo_black_en_large 1.svg" },
    { name: "Cachapuz", logo: "/Cachapuz.svg" },
    { name: "Eurotux", logo: "/Tux_logo2_svg_site.svg" },
  ],
  bronze: [
    { name: "Kelvin", logo: "/Kelvin-Color-TM.svg" },
    { name: "Ponto 25", logo: "/Logo_Ponto25.svg" },
  ],
}


  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-redaction-20 text-[#EB5F0A] mb-4 text-balance leading-tight">
              Patrocinadores
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl font-light max-w-2xl">
              Apoiantes das Comemorações dos 50 Anos
            </p>
          </div>

          <div className="space-y-16 pb-24">

        {/* PLATINUM */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl font-bold text-[#E5E4E2] font-mono">PLATINUM</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#E5E4E2] to-transparent" />
          </div>

          <Swiper
            modules={[SwiperNav, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2200 }}
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
          >
            {sponsors.platinum.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl p-10 border-2 border-gray-300 hover:border-[#E5E4E2]/70 hover:shadow-xl transition-all duration-300 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-28 mx-auto mb-4 object-contain"
                    />
                    <span className="text-xl font-bold text-gray-700">{sponsor.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

       {/* GOLD */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl font-bold text-[#EB5F0A] font-mono">GOLD</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#EB5F0A] to-transparent" />
          </div>

          <Swiper
            modules={[SwiperNav, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {sponsors.gold.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#EB5F0A]/50 hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-[150px]">
                  <div className="text-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-24 mx-auto mb-4 object-contain"
                    />
                    <span className="text-lg font-bold text-gray-700">{sponsor.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>





       {/* SILVER */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl font-bold text-[#EB5F0A] font-mono">SILVER</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#EB5F0A] to-transparent" />
          </div>

          <Swiper
            modules={[SwiperNav, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2800 }}
            loop
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {sponsors.silver.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-[#EB5F0A]/50 hover:shadow-md transition-all duration-300 flex items-center justify-center min-h-[120px]">
                  <div className="text-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-20 mx-auto mb-3 object-contain"
                    />
                    <span className="text-sm font-bold text-gray-700">{sponsor.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>



       {/* BRONZE */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl font-bold text-[#EB5F0A] font-mono">BRONZE</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#EB5F0A] to-transparent" />
          </div>

          <Swiper
            modules={[SwiperNav, Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView={6}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
          >
            {sponsors.bronze.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-[#EB5F0A]/50 hover:shadow-md transition-all duration-300 flex items-center justify-center min-h-[100px]">
                  <div className="text-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-14 mx-auto mb-2 object-contain"
                    />
                    <span className="text-xs font-bold text-gray-700">{sponsor.name}</span>
                  </div>
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
