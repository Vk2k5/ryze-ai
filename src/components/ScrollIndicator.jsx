export default function ScrollIndicator() {
  const scrollToReviews = () => {
    document
      .getElementById('wall-of-love')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className="mt-16 md:mt-24 flex flex-col items-center gap-3 cursor-pointer"
      onClick={scrollToReviews}
    >
      <div className="w-8 h-8 md:w-10 md:h-10  flex items-center justify-center animate-float">
        ↓
      </div>

      <p className="font-orbitron text-[10px] md:text-xs tracking-widest text-gray-600">
        SEE THE MAGIC OF OUR AI
      </p>
    </div>
  )
}
