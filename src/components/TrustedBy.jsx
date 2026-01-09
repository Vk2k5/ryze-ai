export default function TrustedBy() {
    const logos = [
      {
        name: "Recrely",
        src: "https://logo.clearbit.com/recrely.com",
      },
      {
        name: "HG",
        src: "https://logo.clearbit.com/hg.studio",
      },
      {
        name: "MOS",
        src: "https://logo.clearbit.com/mos.studio",
      },
      {
        name: "Motif Digital",
        src: "https://logo.clearbit.com/motif.digital",
      },
      {
        name: "Pupil",
        src: "https://logo.clearbit.com/pupil.studio",
      },
      {
        name: "Ritma",
        src: "https://logo.clearbit.com/ritma.co",
      },
    ];
  
    return (
      <section className="py-20 bg-white">
        <p className="text-center font-inter text-sm text-gray-400 mb-10">
          COMPANIES THAT TRUSTED US 💖
        </p>
  
        <div className="overflow-hidden">
          <div className="flex items-center gap-24 animate-marquee">
            {logos.map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.name}
                className="h-10 object-contain opacity-40 grayscale"
              />
            ))}
  
            {logos.map((logo, idx) => (
              <img
                key={`dup-${idx}`}
                src={logo.src}
                alt={logo.name}
                className="h-10 object-contain opacity-40 grayscale"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  