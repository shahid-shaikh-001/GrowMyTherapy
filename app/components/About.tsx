import Image from "next/image";
import { therapist } from "@/app/data/therapist";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="bg-[#f7f5f0]" id="about">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-[#d7e1da]" />

              <div className="relative aspect-4/5 overflow-hidden rounded-4xl">
                <Image
                  src="/images/maya-portrait.png"
                  alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="md:pl-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#65716e]">
                SANTA MONICA PSYCHOLOGIST
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#294a45] md:text-5xl">
                Therapy that makes room for both insight and change.
              </h2>

              <div className="mt-7 max-w-xl space-y-5 text-base leading-7 text-[#65716e]">
                <p>{therapist.bio.full}</p>

                <p>
                  My goal is not simply symptom relief. Therapy can also help
                  you develop insight, build resilience, and strengthen your
                  relationship with yourself over time.
                </p>

                <p>
                  I work with adults seeking a therapist who can combine
                  practical tools with depth-oriented work while understanding
                  the realities of fast-paced living and working.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-9 inline-flex rounded-full bg-[#294a45] px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#203c38]"
              >
                Work With Me
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}