export default function ReviewCard({
    name,
    username,
    content,
    highlight = false,
  }) {
    return (
      <div
        className={`
          glass
          rounded-3xl
          p-6
          flex flex-col gap-4
  
          shadow-[0_20px_40px_rgba(0,0,0,0.12)]
          ${highlight ? 'md:col-span-2 md:row-span-2' : ''}
        `}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="font-inter font-medium text-sm">
              {name}
            </p>
            <p className="text-xs text-gray-600">
              @{username}
            </p>
          </div>
  
          <span className="text-gray-400 text-lg leading-none">
            ×
          </span>
        </div>
  
        {/* Content */}
        <p className="
          font-inter
          text-sm
          leading-relaxed
          text-gray-900
        ">
          {content}
        </p>
      </div>
    )
  }
  