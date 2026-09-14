"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#f7f5f0]">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-20 md:py-20">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#65716e]"
          >
            Therapy for adults in Santa Monica &amp; across California
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#294a45] sm:text-6xl md:text-7xl"
          >
            You don&apos;t have to keep holding everything together.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-xl text-lg leading-8 text-[#65716e] md:text-xl"
          >
            A grounded space to slow down, understand what you&apos;re carrying,
            and reconnect with yourself.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-[#294a45] px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#203c38]"
            >
              Schedule a Consultation
            </a>

            <a
              href="#approach"
              className="rounded-full border border-[#294a45]/25 px-7 py-3.5 text-sm font-medium text-[#294a45] transition-colors duration-200 hover:bg-[#d7e1da]"
            >
              Explore My Approach
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#65716e]"
          >
            <span>In-person in Santa Monica</span>
            <span>Secure telehealth across California</span>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          {/* Decorative circle */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#d7e1da] md:h-40 md:w-40"
          />

          <div className="relative aspect-4/5 overflow-hidden rounded-4xl">
            <Image
              src="/images/office1.jpeg"
              alt="Calm therapy office in Santa Monica"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />

            <div className="absolute inset-0 bg-[#294a45]/5" />
          </div>

          {/* Floating message */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className=""
          >
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}