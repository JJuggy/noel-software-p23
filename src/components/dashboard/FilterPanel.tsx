"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imgCaretDown = "/assets/1924bfbf8bf10c300387f2d721bff950886d883e.svg";

const COUNTRIES  = ["South Africa", "Nigeria", "Kenya", "Ghana", "Senegal", "Egypt"];
const INDUSTRIES = ["Renewable Energy", "Fintech", "Healthtech", "Agritech", "Edtech", "Logistics"];
const POSITIONS  = ["CEO", "CFO", "COO", "CTO", "Director", "Manager"];

interface Props {
  open: boolean;
  onClose: () => void;
}

function Dropdown({ placeholder, options }: { placeholder: string; options: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative" style={{ width: "220px" }}>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex flex-row items-center justify-between"
        style={{
          width: "220px",
          height: "48px",
          background: "#FFFFFF",
          border: "1px solid #E6E6E6",
          borderRadius: "4px",
          paddingLeft: "16px",
          paddingRight: "8px",
          cursor: "pointer",
        }}
      >
        <span
          className="text-[16px] leading-[20px] tracking-[0.16px] truncate"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            color: selected ? "#484848" : "#737373",
          }}
        >
          {selected ?? placeholder}
        </span>
        <img
          src={imgCaretDown}
          alt=""
          style={{
            width: "24px",
            height: "24px",
            flexShrink: 0,
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 z-10 bg-white overflow-y-auto"
            style={{
              width: "220px",
              maxHeight: "180px",
              border: "1px solid #E6E6E6",
              borderRadius: "8px",
              boxShadow: "0px 4px 7px 3px rgba(0,0,0,0.10)",
              marginTop: "4px",
            }}
          >
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => { setSelected(opt); setExpanded(false); }}
                className="w-full text-left"
                style={{
                  padding: "10px 16px",
                  background: selected === opt ? "#F6F2FF" : "#FFFFFF",
                  border: selected === opt ? "1px solid #4918B2" : "none",
                  borderRadius: "8px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: selected === opt ? "#1A1A1A" : "#484848",
                  cursor: "pointer",
                }}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FilterPanel({ open, onClose }: Props) {
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
          {/* Backdrop */}
          <motion.div
            key="filter-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 backdrop-blur-[6px] bg-black/30"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="filter-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring" as const, stiffness: 320, damping: 36 }}
            className="fixed top-0 right-0 h-full z-50 flex items-center justify-center py-[24px] pr-[24px]"
          >
            <div
              className="relative bg-white overflow-hidden"
              style={{
                width: "336px",
                height: "796px",
                borderRadius: "40px",
                boxShadow: "0px 1px 2px 2px rgba(0,0,0,0.15)",
              }}
            >
              {/* Heading */}
              <p
                className="absolute text-[20px] leading-[17px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  color: "#0B1727",
                  left: "51px",
                  top: "55px",
                }}
              >
                Filter By;
              </p>

              {/* Subtitle */}
              <p
                className="absolute text-[13px] leading-[15px] tracking-[0.5px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  color: "#0B1727",
                  left: "51px",
                  top: "87px",
                  width: "251px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>

              {/* Country */}
              <div
                className="absolute flex flex-col gap-[12px]"
                style={{ left: "51px", top: "194px", width: "220px" }}
              >
                <span
                  className="text-[16px] leading-[17px]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#193E47" }}
                >
                  Country
                </span>
                <Dropdown placeholder="Select a category" options={COUNTRIES} />
              </div>

              {/* Industry */}
              <div
                className="absolute flex flex-col gap-[12px]"
                style={{ left: "51px", top: "305px", width: "220px" }}
              >
                <span
                  className="text-[16px] leading-[17px]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#193E47" }}
                >
                  Industry
                </span>
                <Dropdown placeholder="Select a category" options={INDUSTRIES} />
              </div>

              {/* Position */}
              <div
                className="absolute flex flex-col gap-[12px]"
                style={{ left: "51px", top: "416px", width: "220px" }}
              >
                <span
                  className="text-[16px] leading-[17px]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#193E47" }}
                >
                  Position
                </span>
                <Dropdown placeholder="Select a category" options={POSITIONS} />
              </div>

              {/* Search button */}
              <button
                className="absolute flex items-center justify-center"
                style={{
                  left: "51px",
                  top: "538px",
                  width: "212px",
                  height: "42px",
                  background: "#193E47",
                  borderRadius: "20px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0px 4px 7px 3px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)",
                }}
              >
                <span
                  className="text-[16px] leading-[17px]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: "#D7F6EC" }}
                >
                  Search
                </span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
