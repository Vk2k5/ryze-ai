import CTAButton from './CTAButton'
import ScrollIndicator from './ScrollIndicator'

export default function Hero() {
  return (
    <section className="
      flex flex-col items-center text-center
      mt-24 md:mt-40
      px-4
    ">
      <h1 className="
        font-orbitron
        text-[38px] sm:text-[48px] md:text-[72px]
        leading-tight
      ">
        LET <span className="text-indigo-600">RYZE AI</span> MARKET <br />
        YOUR <span className="text-indigo-600">PRODUCT</span>
      </h1>

      <CTAButton />

      <ScrollIndicator />
    </section>
  )
}
