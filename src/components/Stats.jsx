export default function Stats() {
    return (
      <section className="py-20 bg-indigo-50 text-center">
        <h2 className="font-orbitron text-4xl mb-8">
          Our Growth So Far
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="stat">
            <p className="font-orbitron text-5xl text-indigo-600">
              2000+
            </p>
            <p className="text-sm text-gray-600">Clients Worldwide</p>
          </div>
  
          <div className="stat">
            <p className="font-orbitron text-5xl text-indigo-600">
              700+
            </p>
            <p className="text-sm text-gray-600">Agencies</p>
          </div>
  
          <div className="stat">
            <p className="font-orbitron text-5xl text-indigo-600">
              23+
            </p>
            <p className="text-sm text-gray-600">Countries Covered</p>
          </div>
  
          <div className="stat">
            <p className="font-orbitron text-5xl text-indigo-600">
              $500M+
            </p>
            <p className="text-sm text-gray-600">Ad Spend Managed</p>
          </div>
        </div>
      </section>
    )
  }
  