"use client";

import {
  motion,
  useAnimate,
  useAnimationFrame,
  useDragControls,
  useInView,
  useReducedMotion,
} from "motion/react";
import { useRef, useState } from "react";

export default function MotionHooks() {
  return (
    <div style={{ padding: "2rem", display: "grid", gap: "3rem" }}>
      <h1>Hooks</h1>
      {/* 1. useAnimate - trigger animation via imperative API */}
      <AnimateBox />

      {/* 2. useAnimationFrame - rotate using time-based updates */}
      <AnimationFrameBox />

      {/* 3. useDragControls - drag programmatically controlled */}
      <DragControlsBox />

      {/* 4. useInView - fade in only when visible */}
      <InViewBox />

      {/* 5. useReducedMotion - respect user motion preferences */}
      <ReducedMotionBox />
    </div>
  );
}

// 1. useAnimate - animate imperatively with controls
function AnimateBox() {
  const [scope, animate] = useAnimate();

  return (
    <div>
      <button
        onClick={() =>
          animate(scope.current, { scale: 1.5 }, { duration: 0.5 })
        }
        style={{
          marginBottom: 12,
          padding: "0.5rem 1rem",
          backgroundColor: "#6b7280",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Animate
      </button>
      <motion.div
        ref={scope}
        style={{ width: 100, height: 100, backgroundColor: "#3b82f6" }}
      >
        {/* Imperatively animates scale on click, scoped (ref) to the perticular component */}
      </motion.div>
    </div>
  );
}

// 2. useAnimationFrame - rotate continuously
function AnimationFrameBox() {
  const ref = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);

  // delta = 1000ms / fps (60 normally) ~ 16.67
  // t is elapsed time, generally same as the value of delta

  useAnimationFrame((t, delta) => {
    setAngle((prev) => (prev + delta * 0.1) % 360);
  });

  return (
    <motion.div
      ref={ref}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#10b981",
        rotate: angle,
      }}
    >
      {/* Rotates smoothly with frame updates */}
    </motion.div>
  );
}

// 3. useDragControls - manual drag start
function DragControlsBox() {
  const dragControls = useDragControls();

  return (
    <div>
      <button
        onPointerDown={(e) => dragControls.start(e)}
        style={{
          marginBottom: 12,
          padding: "0.5rem 1rem",
          backgroundColor: "#f59e0b",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Drag me manually from this button
      </button>
      <motion.div
        drag
        dragControls={dragControls}
        dragListener={false}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#8b5cf6",
          cursor: "grab",
        }}
      >
        {/* Drag starts only via external button */}
      </motion.div>
    </div>
  );
}

// 4. useInView - fades in when entering viewport
function InViewBox() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={{
        marginTop: "25rem",
        width: 100,
        height: 100,
        backgroundColor: "#ef4444",
        opacity: isInView ? 1 : 0,
        transition: "opacity 0.6s",
      }}
    >
      {/* Fades in once when scrolled into view */}
    </motion.div>
  );
}

// 5. useReducedMotion - disable motion if user prefers from their system
function ReducedMotionBox() {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#0ea5e9",
      }}
      animate={{ scale: shouldReduce ? 1 : [1, 1.4, 1] }}
      transition={{
        duration: 2,
        repeat: shouldReduce ? 0 : Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Respects OS "reduce motion" setting */}
    </motion.div>
  );
}
