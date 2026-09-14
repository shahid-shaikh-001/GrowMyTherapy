import Reveal from "./Reveal";

const specialties = [
  {
    title: "Anxiety & Panic",
    description:
      "Work through persistent worry, overthinking, physical tension, panic, and the feeling of always needing to be prepared for what might go wrong.",
  },
  {
    title: "Trauma",
    description:
      "Carefully paced trauma therapy for both single-incident experiences and longer-standing patterns shaped by childhood, relationships, or chronic stress.",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "Explore the pressure to keep performing, the exhaustion that can follow years of pushing through, and more sustainable ways of living and working.",
  },
];

const modalities = [
  "CBT",
  "EMDR",
  "Mindfulness",
  "Body-oriented techniques",
];

export default function Expertise() {
  return (
    <section className="bg-[#294a45]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d7e1da]">
                AREAS OF FOCUS
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
                Practical support with room for deeper work.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-[#d7e1da]">
                Maya works with adults navigating anxiety, panic, trauma,
                burnout, and the pressure that can come with always expecting
                more from yourself.
              </p>
            </div>
          </Reveal>

          <div>
            <div className="grid gap-px overflow-hidden rounded-3xl bg-white/15 md:grid-cols-3">
              {specialties.map((specialty, index) => (
                <Reveal key={specialty.title} delay={index * 0.1}>
                  <article className="h-full bg-[#294a45] p-7 md:p-8">
                    <h3 className="text-xl font-semibold text-white">
                      {specialty.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[#d7e1da]">
                      {specialty.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-10">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#c98f72]">
                  THERAPEUTIC METHODS
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {modalities.map((modality) => (
                    <span
                      key={modality}
                      className="rounded-full border border-white/20 px-5 py-3 text-sm text-white"
                    >
                      {modality}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}