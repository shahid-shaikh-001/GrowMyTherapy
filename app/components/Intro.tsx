import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="bg-[#f7f5f0]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
        <Reveal>
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#65716e]">
              YOU DON&apos;T HAVE TO DO THIS ALONE
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#294a45] md:text-5xl">
              You&apos;re holding onto hope that life can be better than it is
              right now.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="max-w-xl text-lg leading-8 text-[#65716e]">
            Therapy can give you a place to slow down, feel understood, and
            begin making meaningful changes. With the right support, you can
            better understand what you&apos;re experiencing and move toward a
            life that feels more grounded and fulfilling.
          </p>
        </Reveal>
      </div>
    </section>
  );
}