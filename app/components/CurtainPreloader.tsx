"use client";

import { useEffect, useState } from "react";

const panels = [0, 1, 2, 3];

export default function CurtainPreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const openTimer = window.setTimeout(() => {
      setIsOpening(true);
    }, 900);

    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 1900);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 overflow-hidden ${
        isOpening ? "pointer-events-none" : ""
      }`}
      aria-label="Loading Grow My Therapy"
      aria-live="polite"
    >
      {/* Brand */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-500 ${
          isOpening ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d7e1da]">
            Grow My Therapy
          </p>

          <p className="mt-4 text-sm text-[#d7e1da]/70">
            A moment to begin
          </p>
        </div>
      </div>

      {/* Curtains */}
      <div className="absolute inset-0 flex">
        {panels.map((panel) => (
          <div
            key={panel}
            className={`relative h-full flex-1 bg-[#294a45] transition-transform duration-900 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              isOpening ? "-translate-y-full" : "translate-y-0"
            }`}
            style={{
              transitionDelay: `${panel * 100}ms`,
            }}
          >
            {/* Subtle panel edge */}
            <div className="absolute right-0 top-0 h-full w-px bg-[#294a45]/10" />
          </div>
        ))}
      </div>
    </div>
  );
}