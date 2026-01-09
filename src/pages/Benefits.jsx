import FeatureCard from '../components/FeatureCard'

export default function Benefits() {
  const capabilities = [
    {
      title: "24/7 Autonomous Ad Management",
      desc: "AI runs, monitors, and optimizes campaigns continuously without manual intervention.",
    },
    {
      title: "Real-Time Budget & Bid Optimization",
      desc: "Automatically reallocates budgets and adjusts bids in real time for peak performance.",
    },
    {
      title: "Creative Rotation & Insights",
      desc: "Detects underperforming creatives and surfaces high-impact creatives faster.",
    },
    {
      title: "Real-Time Signal Analysis",
      desc: "Distinguishes genuine performance trends from noise to optimize delivery and pacing.",
    },
  ]

  const caseStudies = [
    {
      title: "Sanar AI",
      result: "Increased Google Search ROAS to 4.3× in 8 weeks.",
      link: "https://www.get-ryze.ai/case-studies#sanar-ai",
    },
    {
      title: "MotifDigital",
      result: "Achieved stronger performance outcomes using AI-driven automation.",
      link: "https://www.get-ryze.ai/case-studies#motifdigital",
    },
    {
      title: "Ashley Furniture",
      result: "Automated Google + Meta optimization with weekly cycles.",
      link: "https://www.get-ryze.ai/case-studies#ashley-furniture",
    },
    {
      title: "Agency Audit Automation",
      result: "Turned audits into repeatable sales assets for agencies.",
      link: "https://www.get-ryze.ai/case-studies#agency-audits",
    },
  ]

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      {/* Features Grid */}
      <h1 className="font-orbitron text-4xl text-center mb-12">
        Benefits & Real-World AI Impact
      </h1>

      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 mb-16">
        {capabilities.map((feature, i) => (
          <FeatureCard
            key={i}
            title={feature.title}
            desc={feature.desc}
          />
        ))}
      </div>

      {/* Case Studies Section */}
      <h2 className="font-orbitron text-3xl text-center mb-8">
        Real World Results — Official Case Studies
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2">
        {caseStudies.map((caseItem, i) => (
          <a
            key={i}
            href={caseItem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-2xl border bg-gray-50 hover:shadow-lg transition"
          >
            <h3 className="font-inter font-semibold text-lg">
              {caseItem.title}
            </h3>
            <p className="text-sm text-gray-700 mt-2">
              {caseItem.result}
            </p>
            <p className="mt-2 text-indigo-600 text-sm font-medium">
              View Case Study →
            </p>
          </a>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-12">
        More case studies available at&nbsp;
        <a
          className="text-indigo-600 underline"
          href="https://www.get-ryze.ai/case-studies"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official Ryze Case Studies
        </a>
      </p>
    </section>
  )
}
