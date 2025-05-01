"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function GsapText() {
  return (
    <div style={{ padding: "2rem", display: "grid", gap: "3rem" }}>
      <FadeInCharacters text="Hello GSAP" />
      <TypingEffect text="Typing with GSAP" />
      <ClipReveal text="Revealed Text" />
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
      stagger: 0.05,
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

// 3. Clip path reveal animation (like wipe)
function ClipReveal({ text }: { text: string }) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    gsap.to(spanRef.current, {
      clipPath: "inset(0 0% 0 0)",
      duration: 0.8,
    });
  }, []);

  return (
    <span
      ref={spanRef}
      style={{
        display: "inline-block",
        clipPath: "inset(0 100% 0 0)",
        overflow: "hidden",
      }}
    >
      {text}
    </span>
  );
}
