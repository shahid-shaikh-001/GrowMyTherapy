import Reveal from "./Reveal";
import AccordionGallery from "@/app/components/AccordionGallery";

const researchItems = [
  {
    image: "/images/office1.jpeg",
    label: "",
    alt: "Market research workspace",
  },
  {
    image: "/images/office2.jpeg",
    label: "",
    alt: "Trading entry analysis",
  },
  {
    image: "/images/office1.jpeg",
    label: "",
    alt: "Trading exit analysis",
  },
  {
    image: "/images/office2.jpeg",
    label: "",
    alt: "Holding period analysis",
  },
  {
    image: "/images/office1.jpeg",
    label: "",
    alt: "Trading research result",
  },
];

export default function Office() {
  return (
    <section className="bg-white" id="office">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#65716e]">
                RESEARCH WORKSPACE
              </p>

              <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#294a45] md:text-5xl">
                Turn a market question into a testable experiment.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#65716e] md:ml-auto">
              Ask a question about the market in natural language. The system
              identifies missing information, structures your hypothesis, and
              turns it into a research experiment.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <AccordionGallery
              items={researchItems}
              defaultIndex={0}
              expandRatio={0.52}
              trigger="hover"
              height={500}
              gap={10}
              radius={24}
              duration={0.6}
              ease="power3.out"
              parallax={0.5}
              tilt={6}
              stagger={0.06}
              showLabels
              grayscale
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="rounded-3xl bg-[#f7f5f0] p-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#c98f72]">
                ASK
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#294a45]">
                Start with a question
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#65716e]">
                Ask something like: “Does buying NIFTY after a sharp fall
                work?”
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-[#f7f5f0] p-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#c98f72]">
                CLARIFY
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#294a45]">
                Remove ambiguity
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#65716e]">
                Important missing parameters are identified instead of being
                silently invented.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-3xl bg-[#d7e1da] p-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#65716e]">
                LEARN
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#294a45]">
                Understand the evidence
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#65716e]">
                See what the data actually shows, what can reasonably be
                concluded, and what to investigate next.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}