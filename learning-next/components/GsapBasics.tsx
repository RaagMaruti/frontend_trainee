"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function GsapBasics() {
  return (
    <div style={{ padding: "2rem", display: "grid", gap: "3rem" }}>
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
    </div>
  );
}

// 1. Basic gsap.to — animates properties to target values
function GsapTo() {
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.to(boxRef.current, {
      x: 150,
      duration: 1,
      backgroundColor: "#3b82f6",
    });
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#f87171",
      }}
    >
      {/* Moves right + color transition */}
    </div>
  );
}

// 2. gsap.from — animates *from* values to current
function GsapFrom() {
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
    });
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#10b981",
      }}
    >
      {/* Fades + drops in */}
    </div>
  );
}

// 3. gsap.fromTo — animate between specific start and end
function GsapFromTo() {
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { scale: 0.5, rotate: 0 },
      { scale: 1.2, rotate: 180, duration: 1 }
    );
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#facc15",
      }}
    >
      {/* Scales up + rotates */}
    </div>
  );
}
