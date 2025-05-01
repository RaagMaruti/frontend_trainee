"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
  useTime,
  useVelocity,
  useMotionValueEvent,
  useMotionTemplate,
} from "motion/react";
import { useRef, useState } from "react";

export default function MotionValues() {
  const x = useMotionValue(0); // Used in several examples

  return (
    <div style={{ padding: "2rem", display: "grid", gap: "3rem" }}>
      <h1>Values</h1>
      {/* 1. Motion Value (Overview) - Drag updates X */}
      <motion.div
        drag="x"
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#3b82f6",
          x, // binds motion value to x-axis
        }}
      >
        {/* Draggable horizontally using motion value */}
      </motion.div>

      {/* 2. useMotionTemplate - Bind value to style */}
      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: useMotionTemplate`rgb(${x}, 100, 150)`,
        }}
      >
        {/* Background color changes as x changes */}
      </motion.div>

      {/* 3. useMotionValueEvent - Log motion value changes */}
      <Logger motionValue={x} />

      {/* 4. useScroll - Animate based on scroll progress */}
      <ScrollExample />

      {/* 5. useSpring - Smooth motion value updates */}
      <SpringExample baseX={x} />

      {/* 6. useTime - Animate over time */}
      <TimeExample />

      {/* 7. useTransform - Derived motion value */}
      <TransformExample baseX={x} />

      {/* 8. useVelocity - Detect motion speed */}
      <VelocityExample baseX={x} />
    </div>
  );
}

// 3. useMotionValueEvent - logs value changes
function Logger({ motionValue }) {
  useMotionValueEvent(motionValue, "change", (latest) => {
    console.log("x changed to:", latest);
  });

  return (
    <div style={{ fontSize: 12 }}>
      {/* Logs motion value updates in console */}
      Open console and drag the blue box above.
    </div>
  );
}

// 4. useScroll - fade in box based on scroll
function ScrollExample() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <motion.div
      ref={ref}
      style={{
        height: 200,
        backgroundColor: "#10b981",
        opacity: scrollYProgress,
      }}
    >
      {/* Opacity increases as you scroll into view */}
      Scroll-Fade Box
    </motion.div>
  );
}

// 5. useSpring - spring-based smooth motion
function SpringExample({ baseX }) {
  const smoothX = useSpring(baseX, { stiffness: 200, damping: 20 });

  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#f59e0b",
        x: smoothX,
      }}
    >
      {/* Smoothly follows the draggable x */}
    </motion.div>
  );
}

// 6. useTime - animate rotation over time
function TimeExample() {
  const time = useTime();
  const rotate = useTransform(time, (t) => (t / 10) % 360);

  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#8b5cf6",
        rotate,
      }}
    >
      {/* Constant rotation over time */}
    </motion.div>
  );
}

// 7. useTransform - derive one value from another
function TransformExample({ baseX }) {
  const scale = useTransform(baseX, [-200, 0, 200], [0.5, 1, 2]);

  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#ef4444",
        scale,
      }}
    >
      {/* Scale depends on x (transform mapping) */}
    </motion.div>
  );
}

// 8. useVelocity - track speed of motion
function VelocityExample({ baseX }) {
  const velocity = useVelocity(baseX);
  const [text, setText] = useState("");

  useMotionValueEvent(velocity, "change", (v) => {
    setText(`Velocity: ${v.toFixed(2)}`);
  });

  return (
    <div style={{ fontSize: 14, color: "#374151" }}>
      {/* Shows velocity of horizontal drag */}
      {text}
    </div>
  );
}
