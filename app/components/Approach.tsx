import Reveal from "./Reveal";

const approachPoints = [
  {
    number: "01",
    title: "Warm & collaborative",
    description:
      "Therapy works best when you feel respected, understood, and actively involved. Sessions are collaborative rather than one-directional.",
  },
  {
    number: "02",
    title: "Structured, but not rigid",
    description:
      "Sessions have enough structure to feel supportive while leaving room for reflection, curiosity, and deeper work.",
  },
  {
    number: "03",
    title: "Paced around safety",
    description:
      "Trauma work is approached carefully, with attention to safety, stabilization, and regulation before moving deeper.",
  },
];

export default function Approach() {
  return (
    <section className="bg-[#f7f5f0]" id="approach">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <Reveal>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#65716e]">
                MY APPROACH
              </p>

              <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#294a45] md:text-5xl">
                Warm, collaborative, and grounded.
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-[#65716e]">
                Therapy can be both practical and meaningful. My approach
                combines evidence-based tools with space for reflection and
                deeper understanding.
              </p>

              <p className="mt-5 max-w-lg text-base leading-7 text-[#65716e]">
                Together, we can explore the patterns beneath what you&apos;re
                experiencing while developing tools that support you in
                everyday life.
              </p>
            </div>
          </Reveal>

          <div className="divide-y divide-[#294a45]/15 border-y border-[#294a45]/15">
            {approachPoints.map((point, index) => (
              <Reveal key={point.number} delay={index * 0.1}>
                <article className="grid gap-5 py-8 md:grid-cols-[60px_1fr]">
                  <span className="text-sm font-medium text-[#c98f72]">
                    {point.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#294a45]">
                      {point.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-base leading-7 text-[#65716e]">
                      {point.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}