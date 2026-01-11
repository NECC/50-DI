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
      <main className="min-h-screen bg-vibrant-orange pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 text-balance">Patrocinadores</h1>
            <p className="text-white/90 text-xl font-mono">Apoiantes das Comemorações dos 50 Anos</p>
          </div>

          <div className="space-y-16 pb-24">
            {/* Platinum Tier */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-4xl font-bold text-white font-mono">PLATINUM</h2>
                <div className="h-1 flex-1 bg-white/30" />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {sponsors.platinum.map((sponsor, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-12 flex items-center justify-center hover:shadow-2xl transition-shadow min-h-[200px]"
                  >
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto mb-4 bg-dark-bg/5 rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold text-dark-bg">{sponsor.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold Tier */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-white font-mono">GOLD</h2>
                <div className="h-1 flex-1 bg-white/30" />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {sponsors.gold.map((sponsor, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-8 flex items-center justify-center hover:shadow-xl transition-shadow min-h-[150px]"
                  >
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto bg-dark-bg/5 rounded-lg flex items-center justify-center">
                        <span className="text-lg font-bold text-dark-bg">{sponsor.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Silver Tier */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-white font-mono">SILVER</h2>
                <div className="h-1 flex-1 bg-white/30" />
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {sponsors.silver.map((sponsor, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow min-h-[120px]"
                  >
                    <div className="text-center">
                      <span className="text-sm font-bold text-dark-bg">{sponsor.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bronze Tier */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-xl font-bold text-white font-mono">BRONZE</h2>
                <div className="h-1 flex-1 bg-white/30" />
              </div>
              <div className="grid md:grid-cols-6 gap-3">
                {sponsors.bronze.map((sponsor, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition-shadow min-h-[100px]"
                  >
                    <div className="text-center">
                      <span className="text-xs font-bold text-dark-bg">{sponsor.name}</span>
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
