import Reveal from "./Reveal";

const clients = [
  {
    number: "01",
    title: "Adults navigating anxiety",
    description:
      "For adults living with persistent worry, overthinking, panic, physical tension, or the feeling that they always need to be prepared for something to go wrong.",
  },
  {
    number: "02",
    title: "High-achieving professionals",
    description:
      "Support for professionals, entrepreneurs, and creatives who have spent years pushing through stress and are beginning to feel exhausted, disconnected, or stuck.",
  },
  {
    number: "03",
    title: "People healing from difficult experiences",
    description:
      "A carefully paced space for adults working through the effects of trauma, including experiences that continue to shape relationships, confidence, safety, or everyday life.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="bg-white" id="services">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#65716e]">
                WHO I WORK WITH
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#294a45] md:text-5xl">
                When everything looks fine, but inside it doesn&apos;t feel
                that way.
              </h2>
            </div>
          </Reveal>

          <div className="divide-y divide-[#294a45]/15">
            {clients.map((client, index) => (
              <Reveal key={client.number} delay={index * 0.1}>
                <article className="grid gap-5 py-8 first:pt-5 last:pb-4 md:grid-cols-[30px_1fr]">
                  <span className="text-sm font-medium text-[#c98f72]">
                    {client.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#294a45]">
                      {client.title}
                    </h3>

                    <p className="mt-10 max-w-3xl text-base leading-7 text-[#65716e]">
                      {client.description}
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