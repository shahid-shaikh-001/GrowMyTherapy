import Reveal from "./Reveal";
import BorderGlow from "./BorderGlow";

const services = [
  {
    number: "01",
    title: "Anxiety & Panic Therapy",
    description:
      "A space to understand persistent worry, overthinking, panic, physical tension, and the feeling of always needing to be prepared for what might go wrong.",
    link: "Learn about anxiety therapy",
  },
  {
    number: "02",
    title: "Trauma Therapy",
    description:
      "Carefully paced support for adults processing single-incident trauma or longer-standing patterns shaped by childhood, relationships, and chronic stress.",
    link: "Explore trauma therapy",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    description:
      "Therapy for professionals, entrepreneurs, and creatives who feel exhausted or disconnected after years of pushing through pressure and high expectations.",
    link: "Explore burnout support",
  },
];

export default function Specialties() {
  return (
    <section
      className="bg-white"
      id="specialties"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#65716e]">
                SPECIALTIES
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#294a45] md:text-5xl">
                Support for the patterns that keep you stuck.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.number}
              delay={index * 0.1}
            >
              <BorderGlow
                backgroundColor="#f7f5f0"
                borderRadius={28}
                edgeSensitivity={18}
                glowRadius={25}
                glowIntensity={0.65}
                coneSpread={25}
                colors={[
                  "#d7e1da",
                  "#c98f72",
                  "#294a45",
                ]}
                animated={true}
                className="min-h-97.5 w-full"
              >
                <article className="flex min-h-97.5 flex-col p-8 md:p-9">
                  <span className="text-sm font-medium text-[#c98f72]">
                    {service.number}
                  </span>

                  <h3 className="mt-12 text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#294a45]">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-base leading-7 text-[#65716e]">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-auto pt-8 text-sm font-medium text-[#294a45] underline decoration-[#c98f72] decoration-2 underline-offset-4"
                  >
                    {service.link}
                  </a>
                </article>
              </BorderGlow>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}