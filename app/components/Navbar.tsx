"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Specialties", href: "#specialties" },
  { label: "Our Office", href: "#office" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#294a45]/10 bg-[#f7f5f0]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="group" onClick={closeMenu}>
            <div className="text-lg font-semibold tracking-[-0.02em] text-[#294a45]">
              Dr. Maya Reynolds
            </div>

            <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#65716e]">
              Licensed Clinical Psychologist
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-[#65716e] transition-colors hover:text-[#294a45]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full bg-[#294a45] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#203c38]"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-full p-2 text-[#294a45] md:hidden"
          >
            {isOpen ? (
              <X size={24} strokeWidth={1.7} />
            ) : (
              <Menu size={24} strokeWidth={1.7} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-105 pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col border-t border-[#294a45]/10 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-[#294a45]/10 py-4 text-sm text-[#65716e] transition-colors hover:text-[#294a45]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 rounded-full bg-[#294a45] px-6 py-3.5 text-center text-sm font-medium text-white"
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}