"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function MotionAnimations() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ padding: "2rem", display: "grid", gap: "3rem" }}>
      <h1>Animations</h1>
      {/* 1. Animation (Overview) */}
      <motion.div
        style={{
          width: 128,
          height: 128,
          backgroundColor: "#3b82f6",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
      >
        {/* Rotates 360 degrees over 2 seconds */}
      </motion.div>

      {/* 2. Gestures */}
      <motion.button
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#10b981",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Scales up on hover, down on tap */}
        Tap or Hover Me
      </motion.button>

      {/* 3. Layout Animation */}
      <motion.div
        layout
        onClick={() => setExpanded(!expanded)}
        style={{
          height: 128,
          backgroundColor: "#8b5cf6",
          width: expanded ? 256 : 128,
          cursor: "pointer",
          transition: "width 0.3s",
        }}
      >
        {/* Width animates when toggled via layout prop */}
        Click to Expand
      </motion.div>

      {/* 4. Scroll-based Animation */}
      <motion.div
        style={{
          width: 128,
          height: 128,
          backgroundColor: "#facc15",
        }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Fades and slides in when it enters the viewport */}
        Scroll into View
      </motion.div>

      {/* 5. Transitions */}
      <motion.div
        style={{
          width: 128,
          height: 128,
          backgroundColor: "#ef4444",
        }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {/* Bounces in scale infinitely with custom easing */}
      </motion.div>
    </div>
  );
}
