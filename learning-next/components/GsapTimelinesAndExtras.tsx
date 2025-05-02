"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function GsapTimelinesAndExtras() {
  return (
    <div style={{ padding: "2rem", display: "grid", gap: "3rem" }}>
      <GsapTimeline />
      <GsapStagger />
      <GsapRepeatDelay />
      <GsapEasing />
    </div>
  );
}

// 1. Timeline — sequence multiple animations
function GsapTimeline() {
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to(boxRef1.current, {
      x: 100,
      duration: 0.5,
    }).to(boxRef2.current, {
      x: 100,
      duration: 0.5,
    });
  }, []);

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div
        ref={boxRef1}
        style={{ width: 60, height: 60, backgroundColor: "#ec4899" }}
      />
      <div
        ref={boxRef2}
        style={{ width: 60, height: 60, backgroundColor: "#6366f1" }}
      />
      {/* Sequential motion using timeline */}
    </div>
  );
}

// 2. Stagger — animate list of elements with delays between them
function GsapStagger() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.from(containerRef.current?.children, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
    });
  }, []);

  return (
    <div ref={containerRef} style={{ display: "flex", gap: "1rem" }}>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          style={{ width: 40, height: 40, backgroundColor: "#34d399" }}
        />
      ))}
      {/* Bouncy staggered entrance */}
    </div>
  );
}

// 3. Repeat & Delay — infinite repeat animation with delay
function GsapRepeatDelay() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.to(ref.current, {
      rotate: 360,
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 0.5,
    });
  }, []);

  return (
    <div
      ref={ref}
      style={{ width: 80, height: 80, backgroundColor: "#f97316" }}
    ></div>
  );
}

// 4. Easing — apply custom ease functions
function GsapEasing() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.to(ref.current, {
      x: 150,
      duration: 1,
      ease: "bounce.out",
    });
  }, []);

  return (
    <div
      ref={ref}
      style={{ width: 100, height: 100, backgroundColor: "#a855f7" }}
    >
      {/* Bounces at end of movement */}
    </div>
  );
}
