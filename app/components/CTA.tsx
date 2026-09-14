import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="bg-[#294a45]" id="contact">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d7e1da]">
              GET STARTED
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-6xl">
              You don&apos;t have to figure everything out on your own.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d7e1da]">
              If you&apos;re looking for grounded, collaborative therapy in
              Santa Monica or secure online therapy across California,
              reaching out can be the first step.
            </p>

            <a
              href="#"
              className="mt-9 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#294a45] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Schedule a Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}