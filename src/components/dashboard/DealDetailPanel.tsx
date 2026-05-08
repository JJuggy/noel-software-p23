"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const imgStar =
  "/assets/7090931813735a0021bdd78bd2530e051cef6fcb.svg";
const imgUserList =
  "/assets/4246feb9211f59bf293d7f6a9aa689b9cf8fe08f.svg";
const imgMessage =
  "/assets/aedbff8e387da5e315e773a93be4e301b7920786.svg";
const imgCreditCard =
  "/assets/d3ca76d66f6b52320bcd3b83f98f6bd6664454a5.svg";
const imgAttachmentCircle =
  "/assets/51fd9c91552f66b4b9442e7a26ed38d0b25cd60b.svg";
const imgBookmark =
  "/assets/140c5bc51aef8426c61ed704942c6f9a5f9c79b4.svg";

export interface DealPerson {
  name: string;
  title: string;
  avatar: string;
  location: string;
  rating: string;
  industry: string;
}

interface Props {
  person: DealPerson | null;
  onClose: () => void;
}

export default function DealDetailPanel({ person, onClose }: Props) {
  useEffect(() => {
    if (!person) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [person, onClose]);

  return (
    <AnimatePresence>
      {person && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 backdrop-blur-[6px] bg-black/30"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring" as const,
              stiffness: 320,
              damping: 36,
            }}
            className="fixed top-0 right-0 h-full z-50 flex items-center justify-center py-[24px] pr-[24px]"
          >
            <div
              className="relative overflow-hidden bg-white"
              style={{
                width: "390px",
                height: "801px",
                borderRadius: "40px",
                boxShadow:
                  "0px 4px 7px 3px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)",
              }}
            >
              {/* Hero image */}
              <div
                className="absolute overflow-hidden"
                style={{
                  left: "10px",
                  top: "10px",
                  width: "368px",
                  height: "526px",
                  borderRadius: "35px 20px 20px 20px",
                  boxShadow:
                    "0px 4px 7px 3px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)",
                }}
              >
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="absolute max-w-none"
                  style={{
                    left: "-2.38%",
                    top: 0,
                    width: "104.23%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Name/title overlay */}
                <div
                  className="absolute flex flex-col items-center gap-[2px]"
                  style={{ left: "94px", top: "314px", width: "218px" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "rgba(25,62,71,0.6)",
                      borderRadius: "10px",
                      filter: "blur(2px)",
                      transform: "rotate(0.57deg)",
                      height: "73px",
                    }}
                  />
                  <p
                    className="relative text-center text-[24px] leading-[1.2] m-0"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 800,
                      color: "#F3F0E9",
                      transform: "rotate(0.3deg)",
                    }}
                  >
                    {person.name}
                  </p>
                  <p
                    className="relative text-center text-[16px] leading-[1.2] m-0"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 500,
                      color: "#F3F0E9",
                      transform: "rotate(0.3deg)",
                    }}
                  >
                    {person.title}
                  </p>
                </div>
              </div>

              {/* Dark bottom card */}
              <div
                className="absolute"
                style={{
                  left: "10px",
                  top: "550px",
                  width: "368px",
                  height: "234px",
                  background: "#193E47",
                  borderRadius: "50px 20px 20px 20px",
                  boxShadow:
                    "0px 4px 7px 3px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)",
                }}
              />

              {/* Stats + network badge */}
              <div
                className="absolute flex flex-row items-end gap-[31px]"
                style={{ left: "31px", top: "580px" }}
              >
                {/* Stats grid */}
                <div
                  className="flex flex-wrap gap-[10px]"
                  style={{ width: "195px" }}
                >
                  {[
                    { label: "Experience", value: "8 years" },
                    { label: "Industry", value: person.industry },
                    { label: "Interest", value: "Strategy & Finance" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col">
                      <span
                        className="text-[12px] leading-[17px]"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 700,
                          color: "#F3F0E9",
                        }}
                      >
                        {stat.label}
                      </span>
                      <span
                        className="text-[11px] leading-[25px]"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 400,
                          color: "#F3F0E9",
                        }}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center w-full ">
                    <div className="flex flex-row items-center gap-[7px]">
                      <span
                        className="text-[16px]"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 700,
                          color: "#F3F0E9",
                          width: "108px",
                        }}
                      >
                        20+ Network
                      </span>
                      <img
                        src={imgStar}
                        alt=""
                        style={{ width: "23px", height: "23px" }}
                      />
                    </div>
                    
                  </div>
                </div>

                {/* Network badge */}
              </div>

              {/* Action icon buttons */}
              <div
                className="absolute flex flex-col items-start justify-end gap-[8px]"
                style={{ right: "24px", top: "570px" }}
              >
                {[imgUserList, imgMessage, imgCreditCard].map((icon, i) => (
                  <button
                    key={i}
                    className="flex items-center justify-center overflow-hidden"
                    style={{
                      width: "45px",
                      height: "42px",
                      background: "#D7F6EC",
                      borderRadius: "20px",
                      boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.25)",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={icon}
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />
                  </button>
                ))}
              </div>

              {/* CTA buttons */}
              <div
                className="absolute flex flex-row items-center "
                style={{ left: "31px", top: "735px", gap: "16px" }}
              >
                {/* Connect Now */}
                <button
                  className="flex items-center gap-[9px] cursor-pointer"
                  style={{
                    padding: "8px 13px",
                    borderRadius: "10px",
                    background:
                      "linear-gradient(66.41deg, rgb(164,122,240) 10%, rgb(204,166,255) 89%)",
                    border: "none",
                  }}
                >
                  <img
                    src={imgAttachmentCircle}
                    alt=""
                    style={{ width: "23px", height: "23px" }}
                  />
                  <span
                    className="text-[14px]"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      color: "#F3F0E9",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Connect Now
                  </span>
                </button>

                {/* Save for later */}
                <button
                  className="flex items-center gap-[9px] cursor-pointer"
                  style={{
                    padding: "8px 13px",
                    borderRadius: "10px",
                    background: "transparent",
                    border: "none",
                  }}
                >
                  <img
                    src={imgBookmark}
                    alt=""
                    style={{ width: "23px", height: "23px" }}
                  />
                  <span
                    className="text-[14px]"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 400,
                      color: "#EDEFEF",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Save for later
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
