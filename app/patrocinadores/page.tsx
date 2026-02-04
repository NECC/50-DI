import { Navigation } from "@/components/navigation"

export default function PatrocinadoresPage() {
  const sponsors = {
    platinum: [
      { name: "Tech Corp", logo: "/images/sponsor-1.jpg" },
      { name: "Innovation Labs", logo: "/images/sponsor-2.jpg" },
    ],
    gold: [
      { name: "Cloud Systems", logo: "/images/sponsor-3.jpg" },
      { name: "Data Solutions", logo: "/images/sponsor-4.jpg" },
      { name: "AI Ventures", logo: "/images/sponsor-5.jpg" },
    ],
    silver: [
      { name: "Software Inc", logo: "/images/sponsor-6.jpg" },
      { name: "Digital Agency", logo: "/images/sponsor-7.jpg" },
      { name: "Tech Startup", logo: "/images/sponsor-8.jpg" },
      { name: "Code Factory", logo: "/images/sponsor-9.jpg" },
    ],
    bronze: [
      { name: "Dev Tools", logo: "/images/sponsor-10.jpg" },
      { name: "Web Services", logo: "/images/sponsor-11.jpg" },
      { name: "Mobile Apps", logo: "/images/sponsor-12.jpg" },
      { name: "Cloud Hosting", logo: "/images/sponsor-13.jpg" },
      { name: "Analytics Pro", logo: "/images/sponsor-14.jpg" },
      { name: "Security Systems", logo: "/images/sponsor-15.jpg" },
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
            {/* Platinum Tier */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#EB5F0A] font-mono">PLATINUM</h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-[#EB5F0A] to-transparent" />
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {sponsors.platinum.map((sponsor, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-12 border-2 border-gray-200 hover:border-[#EB5F0A]/50 hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-[200px]"
                  >
                    <div className="text-center">
                      <span className="text-2xl font-bold text-gray-700">{sponsor.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold Tier */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#EB5F0A] font-mono">GOLD</h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-[#EB5F0A] to-transparent" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                {sponsors.gold.map((sponsor, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#EB5F0A]/50 hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-[150px]"
                  >
                    <div className="text-center">
                      <span className="text-lg font-bold text-gray-700">{sponsor.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Silver Tier */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#EB5F0A] font-mono">SILVER</h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-[#EB5F0A] to-transparent" />
              </div>
              <div className="grid sm:grid-cols-4 gap-4">
                {sponsors.silver.map((sponsor, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-[#EB5F0A]/50 hover:shadow-md transition-all duration-300 flex items-center justify-center min-h-[120px]"
                  >
                    <div className="text-center">
                      <span className="text-sm font-bold text-gray-700">{sponsor.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bronze Tier */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#EB5F0A] font-mono">BRONZE</h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-[#EB5F0A] to-transparent" />
              </div>
              <div className="grid sm:grid-cols-6 gap-3">
                {sponsors.bronze.map((sponsor, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-[#EB5F0A]/50 hover:shadow-md transition-all duration-300 flex items-center justify-center min-h-[100px]"
                  >
                    <div className="text-center">
                      <span className="text-xs font-bold text-gray-700">{sponsor.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
