export default function CTAButton({ text = 'Get Started', onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        group
        mt-8 md:mt-12
        px-6 md:px-8
        py-3
        rounded-xl
        bg-indigo-600 text-white
        font-inter text-xs md:text-sm
        tracking-widest
        flex items-center gap-2
        transition-all duration-300
      "
    >
      <span
        className="
          inline-block
          transition-transform duration-300
          group-hover:translate-x-2
        "
      >
        →
      </span>

      {text.toUpperCase()}
    </button>
  )
}
