"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const imgTexture  = "/assets/80c94f9fec1dcc78be1c4a2471fb0c1e176bba42.png";
const imgLogo     = "/assets/dd03311536e6181eabeb9d4cc23583ac2be19fb4.svg";
const imgBarFill  = "/assets/b3554cba42616e8b23dbd13271c7ea01be370568.png";

const DURATION_MS = 3000;

export default function LoadingPage() {
  const router  = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();

    function tick() {
      const elapsed = performance.now() - start;
      const pct = Math.min((elapsed / DURATION_MS) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        router.push("/dashboard");
      }
    }

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [router]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white flex items-center justify-center">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('${imgTexture}')`,
          backgroundSize: "1024px 1024px",
          opacity: 0.12,
        }}
      />

      {/* Central content column — 524×325 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center"
        style={{ width: "524px", gap: "53px" }}
      >
        {/* Logo + loader group */}
        <div className="flex flex-col items-center" style={{ gap: "21px", width: "524px" }}>
          {/* NOEL wordmark */}
          <div style={{ width: "376px", height: "140px" }}>
            <img src={imgLogo} alt="NOEL" className="w-full h-full object-contain" />
          </div>

          {/* Progress bar track */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "524px",
              height: "23px",
              borderRadius: "20px",
              background: "#F4F4F4",
            }}
          >
            {/* Animated fill */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{
                width: `${progress}%`,
                borderRadius: "20px",
                transition: "width 0.05s linear",
              }}
            >
              <img
                src={imgBarFill}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ borderRadius: "20px" }}
              />
              {/* Dark overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "rgba(0,0,0,0.3)", borderRadius: "20px" }}
              />
            </div>
          </div>

          {/* Percentage label */}
          <p
            className="m-0 text-[13px]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              color: "#0B1727",
              letterSpacing: "0.5px",
            }}
          >
            {Math.round(progress)}%
          </p>
        </div>

        {/* Text block */}
        <div className="flex flex-col items-center" style={{ gap: "8px", width: "400px" }}>
          <p className="m-0 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <span style={{ fontWeight: 700, fontSize: "20px", lineHeight: "1.6", color: "#0B1727" }}>
              Preparing Your Dashboard{" "}
            </span>
            <span style={{ fontWeight: 300, fontSize: "13px", lineHeight: "1.6", color: "#0B1727" }}>
              (This will take few seconds)
            </span>
          </p>
          <p
            className="m-0 text-center text-[13px] leading-[15px] tracking-[0.5px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727" }}
          >
            An exclusive ecosystem of leaders creating partnerships, deals, and growth opportunities across Africa.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
