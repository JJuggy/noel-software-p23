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
        style={{ backgroundImage: `url('${imgTexture}')`, backgroundSize: "1024px 1024px", opacity: 0.12 }}
      />

      {/* Central content — full width on mobile, capped on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center w-full px-6 gap-10 md:gap-[53px] md:px-0 md:w-[524px]"
      >
        {/* Logo + loader */}
        <div className="flex flex-col items-center w-full gap-5 md:gap-[21px]">
          {/* NOEL wordmark */}
          <div className="w-full max-w-[280px] h-[100px] md:w-[376px] md:h-[140px]">
            <img src={imgLogo} alt="NOEL" className="w-full h-full object-contain" />
          </div>

          {/* Progress bar track */}
          <div
            className="relative overflow-hidden w-full"
            style={{ height: "23px", borderRadius: "20px", background: "#F4F4F4", maxWidth: "524px" }}
          >
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${progress}%`, borderRadius: "20px", transition: "width 0.05s linear" }}
            >
              <img src={imgBarFill} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ borderRadius: "20px" }} />
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.3)", borderRadius: "20px" }} />
            </div>
          </div>

          {/* Percentage */}
          <p className="m-0 text-[13px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#0B1727", letterSpacing: "0.5px" }}>
            {Math.round(progress)}%
          </p>
        </div>

        {/* Text block */}
        <div className="flex flex-col items-center gap-2 w-full max-w-[400px] px-2 md:px-0">
          <p className="m-0 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <span style={{ fontWeight: 700, fontSize: "18px", lineHeight: "1.6", color: "#0B1727" }}>
              {"Preparing Your Dashboard "}
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
