export default function Footer() {
  return (
    <footer className="bg-[#243b38] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <p className="text-xl font-semibold tracking-[-0.02em]">
              Dr. Maya Reynolds
            </p>

            <p className="mt-2 text-sm text-[#d7e1da]">
              PsyD · Licensed Clinical Psychologist
            </p>

            <p className="mt-6 max-w-md text-sm leading-6 text-[#b9c9c3]">
              Grounded, collaborative therapy for adults navigating anxiety,
              trauma, burnout, and the pressures of fast-paced living and
              working.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#c98f72]">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-[#d7e1da]">
              <a href="#about" className="transition-colors hover:text-white">
                About
              </a>

              <a
                href="#approach"
                className="transition-colors hover:text-white"
              >
                Approach
              </a>

              <a
                href="#specialties"
                className="transition-colors hover:text-white"
              >
                Specialties
              </a>

              <a href="#office" className="transition-colors hover:text-white">
                Our Office
              </a>

              <a href="#faq" className="transition-colors hover:text-white">
                FAQ
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#c98f72]">
              Practice
            </p>

            <div className="mt-5 space-y-3 text-sm leading-6 text-[#d7e1da]">
              <p>Santa Monica, California</p>
              <p>In-person therapy</p>
              <p>Secure telehealth across California</p>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#294a45] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-[#9eb1aa]">
          <p>
            © {new Date().getFullYear()} Dr. Maya Reynolds. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}