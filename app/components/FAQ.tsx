import Reveal from "./Reveal";

const faqs = [
  {
    question: "Where is your therapy practice located?",
    answer:
      "Dr. Maya Reynolds offers in-person therapy from her private office in Santa Monica, California.",
  },
  {
    question: "Do you offer online therapy?",
    answer:
      "Yes. Secure telehealth sessions are available for clients located throughout California.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Maya works with adults who are navigating anxiety, panic, trauma, burnout, perfectionism, or the effects of prolonged stress.",
  },
  {
    question: "What therapeutic approaches do you use?",
    answer:
      "Her approach may incorporate CBT, EMDR, mindfulness-based practices, and body-oriented techniques, depending on your needs and goals.",
  },
  {
    question: "What is trauma therapy like?",
    answer:
      "Trauma work is approached carefully and at a pace that supports safety, stabilization, and regulation. Sessions may address both single-incident trauma and longer-standing patterns.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white" id="faq">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#65716e]">
              FAQ
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-[#294a45] md:text-5xl">
              Questions you may have.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#65716e]">
              A few answers about therapy with Dr. Maya Reynolds in Santa
              Monica and throughout California.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 divide-y divide-[#294a45]/15 border-y border-[#294a45]/15">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-medium text-[#294a45]">
                  {faq.question}

                  <span className="shrink-0 text-2xl font-light text-[#c98f72] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-2xl pr-10 text-base leading-7 text-[#65716e]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}