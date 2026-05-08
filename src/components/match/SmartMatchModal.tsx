"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imgLeft   = "/assets/1d9f3b5196fbac4d3d93262254d5589221d38d21.png";
const imgCenter = "/assets/68e7ede910822dce1cd5fa6e99f8ba6c3b2fcd30.png";
const imgRight  = "/assets/5d07d6654282d978d80c4f9abe7f0a4d4e399b92.png";
const imgClose  = "/assets/2fc38d03b034de713471b610effdc95796594779.svg";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SmartMatchModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Blurred backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 backdrop-blur-[8px] bg-black/40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring" as const, stiffness: 340, damping: 32 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div
              className="relative overflow-hidden bg-white pointer-events-auto"
              style={{
                width: "683px",
                height: "498px",
                borderRadius: "20px",
                boxShadow: "0px 4px 4px -1px rgba(12,12,13,0.10), 0px 4px 4px -1px rgba(12,12,13,0.05)",
              }}
            >
              {/* Purple gradient hero banner — overflows top by 59px */}
              <div
                className="absolute overflow-hidden"
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: "-59px",
                  width: "687px",
                  height: "348px",
                  background: "linear-gradient(90deg, #321c84 0%, #533188 49.4%, #be51ea 92.79%)",
                  boxShadow: "inset 0px 100.48px 104.667px 0px rgba(255,255,255,0.25)",
                }}
              >
                {/* Three overlapping profile photos */}
                <div
                  className="absolute flex items-center"
                  style={{ left: "50%", transform: "translateX(-50%)", top: "79px" }}
                >
                  {/* Left */}
                  <div className="relative shrink-0 overflow-hidden" style={{ width: "149px", height: "219px", marginRight: "-9px", zIndex: 1 }}>
                    <img src={imgLeft} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  {/* Center — tallest, on top */}
                  <div className="relative shrink-0 overflow-hidden" style={{ width: "179px", height: "263px", marginRight: "-9px", zIndex: 2 }}>
                    <img src={imgCenter} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  {/* Right */}
                  <div className="relative shrink-0 overflow-hidden" style={{ width: "149px", height: "219px", zIndex: 1 }}>
                    <img src={imgRight} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute flex items-center justify-center"
                style={{ left: "622px", top: "23px", width: "24px", height: "24px", background: "none", border: "none", cursor: "pointer", zIndex: 10 }}
              >
                <img src={imgClose} alt="Close" className="w-full h-full" />
              </button>

              {/* Title */}
              <div
                className="absolute flex flex-col justify-center"
                style={{ left: "50%", transform: "translateX(-50%)", top: "313.5px", width: "285px", height: "23px" }}
              >
                <p
                  className="m-0 text-center text-[20px] leading-[24px] whitespace-nowrap"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#0b1727" }}
                >
                  Smart Match Profile Setup
                </p>
              </div>

              {/* CTA section */}
              <div
                className="absolute flex flex-col items-center gap-[8px]"
                style={{ left: "162px", top: "358px", width: "359px" }}
              >
                {/* Subtitle + body */}
                <div className="flex flex-col items-center gap-[6px] text-center">
                  <p
                    className="m-0 text-[16px] leading-[24px]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#0b1727" }}
                  >
                    Optimize Your Connections
                  </p>
                  <p
                    className="m-0 text-[10px] leading-[14px] text-center"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: "#0b1727", width: "359px" }}
                  >
                    Your Smart Match Profile ensures you're connected with the right people for the right opportunities. Just 2 minutes of setup can save you hours of irrelevant networking.
                  </p>
                </div>

                {/* CTA button */}
                <button
                  onClick={onClose}
                  className="flex items-center justify-center"
                  style={{
                    width: "188px",
                    padding: "12px 14px",
                    background: "#193e47",
                    borderRadius: "20px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0px 4px 7px 3px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)",
                  }}
                >
                  <span
                    className="text-[10px] leading-[17px] whitespace-nowrap"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: "#d7f6ec" }}
                  >
                    Try it Now
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
