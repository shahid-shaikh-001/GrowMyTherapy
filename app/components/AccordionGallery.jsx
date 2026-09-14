"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";

const DEFAULT_ITEMS = [
  {
    image: "https://picsum.photos/id/1015/900/1200",
    label: "Market",
  },
  {
    image: "https://picsum.photos/id/1018/900/1200",
    label: "Entry",
  },
  {
    image: "https://picsum.photos/id/1039/900/1200",
    label: "Exit",
  },
  {
    image: "https://picsum.photos/id/1043/900/1200",
    label: "Holding Period",
  },
  {
    image: "https://picsum.photos/id/1044/900/1200",
    label: "Result",
  },
];

export default function AccordionGallery({
  items = DEFAULT_ITEMS,
  defaultIndex = 0,
  accentColor = "#ffffff",
  overlayColor = "#060010",
  height = 460,
  gap = 10,
  radius = 16,
  expandRatio = 0.52,
  duration = 0.6,
  ease = "power3.out",
  parallax = 0.5,
  tilt = 8,
  stagger = 0.06,
  trigger = "hover",
  showLabels = true,
  grayscale = true,
  className = "",
}) {
  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const mediaRefs = useRef([]);
  const barRefs = useRef([]);
  const textRefs = useRef([]);
  const timelineRef = useRef(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(320);

  const count = items.length;

  const [active, setActive] = useState(
    Math.min(Math.max(defaultIndex, 0), count - 1)
  );

  const applyLayout = useCallback(
    (animate = true) => {
      const panels = panelRefs.current;

      if (!panels.length) return;

      const ratio = Math.min(Math.max(expandRatio, 0.2), 0.9);

      const grow =
        count > 1 ? (ratio * (count - 1)) / (1 - ratio) : 1;

      timelineRef.current?.kill();

      const tl = gsap.timeline();

      panels.forEach((panel, index) => {
        if (!panel) return;

        const isActive = index === active;
        const media = mediaRefs.current[index];
        const bar = barRefs.current[index];
        const text = textRefs.current[index];

        const rotation = isActive
          ? 0
          : index < active
          ? tilt
          : -tilt;

        tl.to(
          panel,
          {
            flexGrow: isActive ? grow : 1,
            rotateY: rotation,
            duration: animate ? duration : 0,
            ease,
          },
          0
        );

        if (media) {
          const drift = Math.max(
            -1.5,
            Math.min(1.5, active - index)
          );

          const shift =
            drift * parallax * mediaSizeRef.current * 0.06;

          const gray = grayscale
            ? isActive
              ? 0
              : 1
            : 0;

          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: isActive ? 0 : shift,
              "--ag-gray": gray,
              "--ag-dim": isActive ? 0 : 0.35,
              duration: animate ? duration : 0,
              ease,
            },
            0
          );
        }

        if (showLabels && bar && text) {
          if (isActive) {
            tl.to(
              [bar, text],
              {
                opacity: 1,
                x: 0,
                duration: animate ? duration : 0,
                ease,
                stagger,
              },
              0
            );
          } else {
            tl.to(
              [bar, text],
              {
                opacity: 0,
                x: -14,
                duration: animate ? duration * 0.6 : 0,
                ease,
              },
              0
            );
          }
        }
      });

      timelineRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      grayscale,
      parallax,
      showLabels,
      stagger,
      tilt,
    ]
  );

  useEffect(() => {
    const element = rootRef.current;

    if (!element) return;

    const measure = () => {
      const rect = element.getBoundingClientRect();

      const usable = Math.max(
        rect.width - gap * (count - 1),
        120
      );

      const size = Math.max(
        140,
        usable *
          Math.min(Math.max(expandRatio, 0.2), 0.9) *
          1.22
      );

      mediaSizeRef.current = size;

      element.style.setProperty(
        "--ag-media-size",
        `${size}px`
      );

      applyLayout(!firstRunRef.current);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);

    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, [applyLayout, gap, count, expandRatio]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(() => {
    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (trigger === "hover") {
      setActive(index);
    }
  };

  const handleClick = (index, event) => {
    if (index !== active) {
      event.preventDefault();
      setActive(index);
    }
  };

  const handleKeyDown = (index, event) => {
    if (
      event.key === "ArrowRight" ||
      event.key === "ArrowDown"
    ) {
      event.preventDefault();

      setActive((index + 1) % count);
    }

    if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowUp"
    ) {
      event.preventDefault();

      setActive((index - 1 + count) % count);
    }
  };

  const overlayBackground = `
    linear-gradient(
      180deg,
      transparent 45%,
      color-mix(
        in srgb,
        ${overlayColor} 78%,
        transparent
      ) 100%
    ),
    color-mix(
      in srgb,
      ${overlayColor} calc(var(--ag-dim, 0.35) * 100%),
      transparent
    )
  `;

  return (
    <div
      ref={rootRef}
      className={`
        flex
        w-full
        max-w-full
        perspective-[1400px]
        max-[520px]:flex-col
        max-[520px]:perspective-none
        ${className}
      `}
      style={{
        gap: `${gap}px`,
        height: `${height}px`,
      }}
      role="list"
      aria-label="Trading research experiment"
    >
      {items.map((item, index) => {
        const isActive = index === active;

        return (
          <div
            key={index}
            ref={(element) => {
              panelRefs.current[index] = element;
            }}
            className="
              group
              relative
              block
              min-w-0
              min-h-0
              flex-[1_1_0]
              cursor-pointer
              overflow-hidden
              bg-[#0a0713]
              outline-none
              transform-3d
              origin-center
              focus-visible:ring-2
              max-[520px]:min-h-21
              max-[520px]:transform-none!
            "
            style={{
              borderRadius: `${radius}px`,
              "--ag-accent": accentColor,
              willChange: "flex-grow, transform",
            }}
            onClick={(event) =>
              handleClick(index, event)
            }
            onMouseEnter={() =>
              handleMouseEnter(index)
            }
            onFocus={() => setActive(index)}
            onKeyDown={(event) =>
              handleKeyDown(index, event)
            }
            role="listitem"
            tabIndex={0}
            aria-current={
              isActive ? "true" : undefined
            }
            aria-label={item.label}
          >
            <span className="absolute inset-0 overflow-hidden rounded-[inherit]">
              <span
                ref={(element) => {
                  mediaRefs.current[index] = element;
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  filter-[grayscale(var(--ag-gray,1))]
                "
                style={{
                  width:
                    "var(--ag-media-size, 320px)",
                  height: "100%",
                  willChange:
                    "transform, filter",
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt || item.label || ""}
                  draggable="false"
                  className="
                    block
                    h-full
                    w-full
                    select-none
                    object-cover
                  "
                />
              </span>

              <span
                className="pointer-events-none absolute inset-0"
                style={{
                  background: overlayBackground,
                }}
                aria-hidden="true"
              />
            </span>
          </div>
        );
      })}
    </div>
  );
}