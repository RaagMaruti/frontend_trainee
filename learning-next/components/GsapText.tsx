"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function GsapText() {
  return (
    <div style={{ padding: "2rem", display: "grid", gap: "3rem" }}>
      <FadeInCharacters text="Hello GSAP" />
      <TypingEffect text="Typing with GSAP" />
    </div>
  );
}

// 1. Fade in each character with stagger
function FadeInCharacters({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.from(containerRef.current?.children, {
      opacity: 0,
      y: 10,
      stagger: 0.1,
      duration: 0.4,
    });
  }, []);

  return (
    <div ref={containerRef} style={{ display: "flex", gap: "2px" }}>
      {text.split("").map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </div>
  );
}

// 2. Fake typing by updating textContent via timeline
function TypingEffect({ text }: { text: string }) {
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    text.split("").forEach((_, i) => {
      tl.set(
        textRef.current,
        {
          textContent: text.slice(0, i + 1),
        },
        i * 0.05
      );
    });
  }, [text]);

  return (
    <div ref={textRef} style={{ fontFamily: "monospace", whiteSpace: "pre" }} />
  );
}
