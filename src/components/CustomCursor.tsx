"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [visible, setVisible] = useState<boolean>(true);
  const [isMouseConnected, setIsMouseConnected] = useState<boolean>(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (e.movementX === 0 && e.movementY === 0) return;

    setIsMouseConnected(true);
    if (!visible) setVisible(true);

    const newPosition = { x: e.clientX, y: e.clientY };
    setPosition(newPosition);
    var arr = [1, 0.9, 0.8, 0.5, 0.2];

    arr.forEach(function (i) {
      var x = (1 - i) * 75;
      var star = document.createElement("div");

      star.className = "star";
      star.style.top = e.clientY + Math.round(Math.random() * x - x / 2) + 20 + "px";
      star.style.left =
        e.clientX + Math.round(Math.random() * x - x / 2) + "px";

      document.body.appendChild(star);

      window.setTimeout(function () {
        document.body.removeChild(star);
      }, Math.round(Math.random() * i * 600));
    });
  };

  const handleMouseOut = (e: MouseEvent) => {
    if (!e.relatedTarget) {
      setVisible(false);
    }
  };
  const handleMouseEnter = (e: MouseEvent) => {
    if (!e.relatedTarget) {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseMove]);

  if (!isMouseConnected) {
    return null;
  }

  return (
    <div
      style={{
        top: position.y - 5,
        left: position.x - 5,
        backgroundImage: `url(/assets/cursor/animal.gif)`,
        width: "100px",
        height: "100px",
        display: visible ? "block" : "none",
      }}
      ref={cursorRef}
      className="fixed pointer-events-none bg-cover bg-center transition-transform -translate-x-1/2 -translate-y-1/2 z-50"
    />
  );
};

export default CustomCursor;
