export default function WhoAreWe() {
    const team = [
      { name: "Alex Johnson", role: "CEO & Co-Founder" },
      { name: "Taylor Smith", role: "CTO & Co-Founder" },
      { name: "Jordan Lee", role: "Head of Product" },
      { name: "Morgan Patel", role: "Lead AI Engineer" },
      { name: "Casey Nguyen", role: "Growth & Strategy" },
      { name: "Riley Davis", role: "Design Lead" },
    ]
  
    return (
      <section className="py-24 px-6 md:px-12 bg-[#f9fafb]">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-orbitron text-center mb-8">
          Who We Are
        </h1>
  
        {/* Story */}
        <div className="max-w-3xl mx-auto text-center text-gray-700 font-inter mb-12 space-y-4">
          <p>
            At Ryze, we’re building the first AI that runs paid ads — and actually drives sales.
            Advertising is broken, processing vast budgets with heavy manual optimization and
            inconsistent performance outcomes. Ryze AI reimagines this by automating ad campaigns,
            optimization logic, and signal analysis so businesses can spend smarter and grow faster.  
          </p>
          <p>
            With a focus on continuous learning and performance, Ryze empowers marketers, agencies,
            and brands to unlock better outcomes across platforms like Google, Meta, and beyond.
            Our mission is to make paid media more efficient, transparent, and impact-driven.
          </p>
        </div>
  
        {/* Team */}
        <h2 className="text-3xl font-orbitron text-center mb-8">
          Meet the Team
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border shadow-sm text-center"
            >
              <p className="font-inter font-semibold text-lg">
                {member.name}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  