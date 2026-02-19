import Image from "next/image";

interface Sponsor {
  name: string;
  logo?: string;
  url?: string;
}

interface SponsorsProps {
  mainSponsors?: Sponsor[];
  exhibitionSponsors?: Sponsor[];
}

export default function Sponsors({
  mainSponsors = [],
  exhibitionSponsors = [],
}: SponsorsProps) {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Patrocinadores Principais */}
        {mainSponsors.length > 0 && (
          <div className="mb-16">
            <h2 className="text-[#EB5F0A] font-mono text-sm mb-8">
              Patrocinadores principais
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-16 items-center">
              {mainSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  style={{
                    minWidth: "120px",
                    maxWidth: "220px",
                    flex: "1 1 auto",
                  }}
                >
                  {sponsor.logo ? (
                    // Tem logo - mostra logo
                    <div className="h-[80px] flex items-center justify-center">
                      {sponsor.url ? (
                        <a
                          href={sponsor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full flex items-center justify-center"
                        >
                          <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            width={180}
                            height={60}
                            className="object-contain"
                          />
                        </a>
                      ) : (
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          width={180}
                          height={60}
                          className="object-contain"
                        />
                      )}
                    </div>
                  ) : (
                    // Não tem logo - mostra nome da empresa
                    <div className="h-[80px] flex items-center justify-center px-4">
                      {sponsor.url ? (
                        <a
                          href={sponsor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#EB5F0A] font-mono text-sm text-center hover:underline"
                        >
                          {sponsor.name}
                        </a>
                      ) : (
                        <span className="text-[#EB5F0A] font-mono text-sm text-center">
                          {sponsor.name}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Patrocinadores da Exposição */}
        {exhibitionSponsors.length > 0 && (
          <div>
            <h2 className="text-[#EB5F0A] font-mono text-sm mb-8">
              Patrocinadores da exposição
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-16 items-center">
              {exhibitionSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  style={{
                    minWidth: "120px",
                    maxWidth: "200px",
                    flex: "1 1 auto",
                  }}
                >
                  {sponsor.logo ? (
                    // Tem logo - mostra logo
                    <div className="h-[80px] flex items-center justify-center">
                      {sponsor.url ? (
                        <a
                          href={sponsor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full flex items-center justify-center"
                        >
                          <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            width={160}
                            height={60}
                            className="object-contain"
                          />
                        </a>
                      ) : (
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          width={160}
                          height={60}
                          className="object-contain"
                        />
                      )}
                    </div>
                  ) : (
                    // Não tem logo - mostra nome da empresa
                    <div className="h-[80px] flex items-center justify-center px-4">
                      {sponsor.url ? (
                        <a
                          href={sponsor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#EB5F0A] font-mono text-sm text-center hover:underline"
                        >
                          {sponsor.name}
                        </a>
                      ) : (
                        <span className="text-[#EB5F0A] font-mono text-sm text-center">
                          {sponsor.name}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
