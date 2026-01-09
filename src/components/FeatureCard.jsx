export default function FeatureCard({ title, desc }) {
    return (
      <div className="p-6 rounded-2xl bg-white">
        <h3 className="font-inter font-semibold text-lg mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600">
          {desc}
        </p>
      </div>
    )
  }
  