import ReviewCard from './ReviewCard'

export default function WallOfLove() {
  return (
    <section
      id="wall-of-love"
      className="
        mt-40
        px-4 md:px-10
        py-24
        bg-gradient-to-b
        from-indigo-50
        via-white
        to-indigo-50
      "
    >
      <h2 className="font-orbitron text-3xl md:text-5xl text-center">
        WALL OF LOVE ❤️
      </h2>

      <p className="mt-4 text-center font-inter text-gray-600">
        What people are saying about RYZE AI
      </p>

      {/* Bento Grid */}
      <div
        className="
          mt-16
          grid gap-8
          grid-cols-1
          md:grid-cols-3
          auto-rows-[minmax(140px,auto)]
        "
      >
        <ReviewCard
          name="Aarav Mehta"
          username="aaravm"
          content="RYZE AI literally transformed our product marketing overnight."
          highlight
        />

        <ReviewCard
          name="Sneha Kapoor"
          username="snehak"
          content="The AI understands our brand voice better than interns."
        />

        <ReviewCard
          name="Rohit Verma"
          username="rohitv"
          content="Super clean UI, insane results. This feels next-gen."
        />

        <ReviewCard
          name="Neha Singh"
          username="nehas"
          content="Our conversions jumped within the first week itself."
        />

        <ReviewCard
          name="Kunal Shah"
          username="kunals"
          content="RYZE AI feels like having a full-time growth team."
        />
      </div>
    </section>
  )
}
