"use client";

import {
  motion,
  AnimatePresence,
  LayoutGroup,
  LazyMotion,
  MotionConfig,
  domAnimation,
  Reorder,
} from "motion/react";
import { useState } from "react";

export default function MotionComponents() {
  const [isVisible, setIsVisible] = useState(true);
  const [items, setItems] = useState(["One", "Two", "Three"]);

  return (
    <div style={{ padding: "2rem", display: "grid", gap: "3rem" }}>
      <h1>Components</h1>
      {/* 2. AnimatePresence - Animate exit/removal */}
      <div>
        <button
          onClick={() => setIsVisible(!isVisible)}
          style={{
            marginBottom: 12,
            padding: "0.5rem",
            backgroundColor: "#6b7280",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Toggle Box
        </button>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              style={{ width: 100, height: 100, backgroundColor: "#10b981" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Fades in/out when toggled */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. LazyMotion - Loads animation features only when needed */}
      {/* Uses LazyMotion with domAnimation for performance */}
      <LazyMotion features={domAnimation}>
        <motion.div
          style={{ width: 100, height: 100, backgroundColor: "#f59e0b" }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </LazyMotion>

      {/* 5. MotionConfig - Shared config for child animations */}
      <MotionConfig
        transition={{ duration: 0.6, ease: "easeOut" }}
        reducedMotion="user"
      >
        <motion.div
          style={{ width: 100, height: 100, backgroundColor: "#ef4444" }}
          animate={{ x: 50 }}
        />
        <motion.div
          style={{ width: 100, height: 100, backgroundColor: "#3b82f6" }}
          animate={{ x: 50 }}
        />
        {/* All children share transition config from MotionConfig */}
      </MotionConfig>

      {/* 6. Reorder - Drag to reorder a list */}
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
      >
        {items.map((item) => (
          <Reorder.Item
            key={item}
            value={item}
            style={{
              padding: "0.75rem 1rem",
              backgroundColor: "#d1d5db",
              borderRadius: 6,
              cursor: "grab",
            }}
          >
            {/* Draggable item in reorderable list */}
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}
