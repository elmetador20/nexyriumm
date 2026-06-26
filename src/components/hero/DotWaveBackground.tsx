"use client";

import React, { useEffect, useRef } from "react";

export default function DotWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const spacing = 22; // Tight spacing for high definition dot matrix
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      time += 0.015;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * spacing;
          const y = r * spacing;

          // Main diagonal wave path
          const centerY = height * 0.5 + Math.sin(x * 0.002 - time * 1.5 + y * 0.001) * (height * 0.28);
          
          // Distance from this dot to the center of the wave path
          const distY = Math.abs(y - centerY);
          const bandWidth = height * 0.32; // Width of the path band

          if (distY > bandWidth) continue;

          // Calculate fading intensity based on distance from center path
          const bandFactor = Math.pow(1 - distY / bandWidth, 1.8);

          // Sub-wave frequency movement for organic particle wave effect
          const wave = Math.sin(x * 0.006 - time * 2.2 + y * 0.004);
          
          // Opacity mapping (white color scale)
          const opacity = bandFactor * ((wave + 1.2) / 2.2) * 0.55;

          if (opacity < 0.02) continue;

          // Radius pulsing slightly with the wave intensity
          const radius = 1.2 + (wave + 1) * 0.4;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
