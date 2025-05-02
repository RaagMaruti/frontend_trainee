"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapScrollAndContext() {
  return (
    <div style={{ padding: "2rem", display: "grid", gap: "3rem" }}>
      <ContextScopedAnimation />
      <StateDrivenGsap />
      <HorizontalScroll />
    </div>
  );
}

gsap.registerPlugin(ScrollTrigger);

function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel") as HTMLElement[];

      gsap.to(scrollerRef.current, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${sections.length * 100}%`,
          pin: true,
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ height: "100vh", overflow: "hidden" }}>
      <div
        ref={scrollerRef}
        style={{
          display: "flex",
          height: "100%",
          width: "max-content",
        }}
      >
        {["#f87171", "#34d399", "#60a5fa", "#facc15"].map((color, i) => (
          <div
            key={i}
            className="panel"
            style={{
              width: "100vw",
              height: "50vh",
              backgroundColor: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              color: "white",
            }}
          >
            Panel {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. gsap.context() — scoped animations + auto-cleanup
function ContextScopedAnimation() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".dot", {
        x: 100,
        duration: 1,
      });
    }, scopeRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div ref={scopeRef}>
      <div
        className="dot"
        style={{
          width: 60,
          height: 60,
          backgroundColor: "#ef4444",
        }}
      >
        {/* Animated via .dot inside context */}
      </div>
      <br />
      <div
        className="dot"
        style={{
          width: 60,
          height: 60,
          backgroundColor: "#ef4444",
        }}
      >
        {/* Animated via .dot inside context */}
      </div>
    </div>
  );
}

// 3. State-driven GSAP animation (on toggle)
function StateDrivenGsap() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        x: open ? 120 : 0,
        backgroundColor: open ? "#84cc16" : "#eab308",
        duration: 0.5,
      });
    }
  }, [open]);

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        Toggle Move
      </button>
      <div
        ref={boxRef}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#eab308",
        }}
      >
        {/* Moves and color-changes on toggle */}
      </div>
    </div>
  );
}
