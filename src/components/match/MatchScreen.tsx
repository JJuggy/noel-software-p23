"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// ─── Assets ────────────────────────────────────────────────────────────────
const imgAiSearch = "/assets/fefdce0d9d1421c248ed7ba7b14c0b8eed001d17.svg";
const imgStar = "/assets/6ff79375edbc913a162682b9342aca8f6f4bf674.svg";
const imgLocation = "/assets/d5467f78a642247698cef5f8c80453d4a1ebc50b.svg";

// Profile photos (reusing existing assets)
const imgJamal = "/assets/9c2327947617943b662d0ff6f39827be58337426.png";
const imgThabo = "/assets/770f1c638d497fa09bdce76e6acef00764c9f930.png";
const imgAmina = "/assets/21a425451e1e140fd362223855aa33b6a82eb76b.png";
const imgChidi = "/assets/3466501674ba2031c153e407416b1140814e91a7.png";
const imgStephan = "/assets/ea59ff2b833358666c9e02e096ecb3011975361d.png";

// ─── Profile card data ──────────────────────────────────────────────────────
// All cards same width; height increases toward center
const CARD_W = 148;
const CARD_HEIGHTS = [220, 260, 310, 260, 220]; // sm, md, lg(center), md, sm

const CARDS = [
  {
    id: 0,
    name: "Chidi Nwonsu",
    role: "COO EasyAccount",
    photo: imgChidi,
    isCenter: false,
  },
  {
    id: 1,
    name: "Thabo Molefe",
    role: "CFO RenewAfrica",
    photo: imgThabo,
    isCenter: false,
  },
  {
    id: 2,
    name: "Jamal Agoro",
    role: "CTO AfriLaw",
    photo: imgJamal,
    isCenter: true,
  },
  {
    id: 3,
    name: "Amina Diop",
    role: "COO Dakar Ventures",
    photo: imgAmina,
    isCenter: false,
  },
  {
    id: 4,
    name: "Stephan Odili",
    role: "CTO Afrilaw",
    photo: imgStephan,
    isCenter: false,
  },
];

// ─── Recent network data ────────────────────────────────────────────────────
const RECENT = [
  {
    name: "Thabo Molefe",
    location: "Johannesburg, South Africa",
    title: "CFO",
    industry: "Renewable Energy",
    rating: "4.6",
    photo: imgThabo,
    photoBg: "#fdf7e0",
    avatarStyle: { top: "-8px", left: "-4px", height: "151px", width: "101px" },
  },
  {
    name: "Amina Diop",
    location: "Dakar, Senegal",
    title: "COO",
    industry: "Fintech",
    rating: "4.6",
    photo: imgAmina,
    photoBg: "#b972c4",
    avatarStyle: { top: "-8px", left: "-4px", height: "151px", width: "101px" },
  },
];

// Dot colors per card position
const DOT_COLORS = ["#a855f7", "#a855f7", "#a855f7", "#a855f7", "#a855f7"];

// ─── Sub-components ─────────────────────────────────────────────────────────

function ProfileCard({
  card,
  index,
}: {
  card: (typeof CARDS)[0];
  index: number;
}) {
  const { isCenter } = card;
  const cardH = CARD_HEIGHTS[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.15 + index * 0.07,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col items-center shrink-0 cursor-pointer"
      style={{ alignSelf: "flex-end", gap: "8px" }}
      whileHover={{ scale: 1.02 }}
    >
      {/* White card with photo inside */}
      <div
        className="relative overflow-hidden"
        style={{
          width: CARD_W,
          height: cardH,
          borderRadius: "16px",
          background: "#ffffff",
          border: isCenter
            ? "2.5px solid #4a9eff"
            : "2px solid rgba(255,255,255,0.15)",
          boxShadow: isCenter
            ? "0px 8px 28px rgba(0,0,0,0.4)"
            : "0px 4px 16px rgba(0,0,0,0.25)",
        }}
      >
        {/* Photo — fills card, no overflow */}
        <img
          src={card.photo}
          alt={card.name}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Name + role overlay on center card only */}
        {isCenter && (
          <>
            {/* Gradient */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: "110px",
                background:
                  "linear-gradient(to top, rgba(11,23,39,0.92) 0%, transparent 100%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 flex flex-col"
              style={{ padding: "0 12px 14px", gap: "3px" }}
            >
              <span
                className="text-white"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  lineHeight: "1.3",
                }}
              >
                {card.name}
              </span>
              {/* Flag + company row */}
              <div className="flex items-center gap-1.5">
                {/* Nigerian flag emoji as inline colored bar */}
                <span style={{ fontSize: "13px", lineHeight: 1 }}>🇳🇬</span>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  AfriLaw
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Dot below card */}
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: DOT_COLORS[index],
          marginBottom: "12px",
          flexShrink: 0,
        }}
      />
    </motion.div>
  );
}

function RecentCard({
  person,
  index,
}: {
  person: (typeof RECENT)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 + index * 0.08, duration: 0.35 }}
      className="relative overflow-hidden cursor-pointer"
      style={{
        width: "100%",
        height: "90px",
        background: "#ffffff",
        borderRadius: "14px",
        boxShadow: "0px 1px 4px rgba(0,0,0,0.06)",
      }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Colored avatar block — left side */}
      <div
        className="absolute left-0 top-0 bottom-0 overflow-hidden"
        style={{ width: "80px", background: person.photoBg, borderRadius: "16px 0 0 16px" }}
      >
        <img
          src={person.photo}
          alt={person.name}
          className="absolute max-w-none object-cover pointer-events-none"
          style={person.avatarStyle}
        />
      </div>

      {/* Content — right of avatar */}
      <div
        className="absolute flex flex-col justify-center"
        style={{ left: "92px", top: 0, bottom: 0, right: "10px", gap: "3px" }}
      >
        {/* Name + rating row */}
        <div className="flex items-center justify-between">
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: "12px",
              color: "#193e47",
              lineHeight: "1.3",
            }}
          >
            {person.name}
          </span>
          <div className="flex items-center gap-1 shrink-0">
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                color: "#193e47",
              }}
            >
              {person.rating}
            </span>
            <img src={imgStar} alt="" style={{ width: "14px", height: "14px" }} />
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-[4px]">
          <img src={imgLocation} alt="" style={{ width: "10px", height: "10px", flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              fontSize: "9px",
              color: "#8c9aa6",
            }}
          >
            {person.location}
          </span>
        </div>

        {/* Title + Industry row */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col" style={{ gap: "1px" }}>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: "8px",
                color: "#8c9aa6",
                textTransform: "uppercase",
                letterSpacing: "0.3px",
              }}
            >
              Title
            </span>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                color: "#193e47",
              }}
            >
              {person.title}
            </span>
          </div>
          <div className="flex flex-col items-end" style={{ gap: "1px" }}>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: "8px",
                color: "#27e6a7",
                textTransform: "uppercase",
                letterSpacing: "0.3px",
              }}
            >
              Industry
            </span>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                color: "#193e47",
                textAlign: "right",
              }}
            >
              {person.industry}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function MatchScreen() {
  const [search, setSearch] = useState("");

  return (
    <div
      className="relative w-full h-full min-h-screen overflow-y-auto"
      style={{ background: "#f4f5f7", padding: "28px 24px" }}
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-[16px] mb-[24px]"
      >
        {/* Title */}
        <div className="flex flex-col italic text-[#0b1727] shrink-0">
          <span
            className="text-[13px] tracking-[3px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            Your Smart
          </span>
          <span
            className="text-[24px] leading-[24px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
          >
            Matches
          </span>
        </div>

        {/* Search bar */}
        <div
          className="flex items-center gap-[10px] flex-1"
          style={{
            height: "42px",
            background: "#ffffff",
            borderRadius: "20px",
            border: "1.5px solid #193e47",
            padding: "0 14px",
          }}
        >
          <img
            src={imgAiSearch}
            alt=""
            style={{ width: "20px", height: "20px", flexShrink: 0 }}
          />
          <input
            type="text"
            placeholder="AI-powered search…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none text-[13px]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              color: "#0b1727",
            }}
          />
        </div>

        {/* Refresh / action button */}
        <button
          className="shrink-0 flex items-center justify-center"
          style={{
            width: "42px",
            height: "42px",
            background: "#d6f955",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
          }}
          title="Refresh matches"
        >
          ↻
        </button>
      </motion.div>

      {/* ── Main content row ── */}
      <div className="flex flex-col gap-[16px] w-full">
        {/* ── Left stats column ── */}

        {/* ── Profile cards on dark teal banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-1 flex flex-col overflow-hidden"
          style={{
            background: "#193e47",
            borderRadius: "20px",
            minHeight: "420px",
          }}
        >
          {/* Cards row */}
          <div
            className="flex items-end justify-center flex-1"
            style={{ padding: "24px 12px 0", gap: "8px" }}
          >
            {CARDS.map((card, i) => (
              <ProfileCard key={card.id} card={card} index={i} />
            ))}
          </div>

          {/* Compatibility + Match Us row — below cards, on the banner */}
          <div
            className="flex items-center justify-center"
            style={{ padding: "10px 20px 16px", gap: "12px" }}
          >
            <div className="flex items-center" style={{ gap: "6px" }}>
              {/* Small circular icon */}
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Smart Matching Compatibility
              </span>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: "13px",
                  color: "#ffffff",
                }}
              >
                92%
              </span>
            </div>
            <button
              style={{
                background: "#0b1727",
                border: "none",
                borderRadius: "20px",
                padding: "7px 18px",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "#ffffff",
                }}
              >
                Match Us!
              </span>
            </button>
          </div>
        </motion.div>

        {/* ── Left stats group ── */}
        <div className="flex justify-between">

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative shrink-0 flex gap-2.5"
          style={{ width: "220px", alignSelf: "stretch" }}
        >
          {/* Tall dark navy connections pill */}
          <div
            className="flex flex-col items-center justify-between shrink-0"
            style={{
              width: "52px",
              background: "#0b1727",
              borderRadius: "40px",
              padding: "18px 10px 14px",
              height: "100%",
              minHeight: "220px",
            }}
          >
            {/* 1000+ rotated */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: "20px",
                  color: "#ffffff",
                  lineHeight: "1",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  letterSpacing: "1px",
                }}
              >
                1000+
              </span>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: "9px",
                  color: "rgba(255,255,255,0.6)",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Connections
              </span>
            </div>
            {/* Bottom icon */}
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Right side: lavender chart card + lime badge overlay */}
          <div className="relative flex-1" style={{ minHeight: "220px",  }}>
            {/* Lavender Smart Matches card */}
            <div
              className="absolute w-[300px] inset-0 flex flex-col justify-end overflow-hidden"
              style={{
                background: "#cfc8e8",
                borderRadius: "20px",
                padding: "14px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: "28px",
                  color: "#ffffff",
                  lineHeight: "1",
                }}
              >
                800+
              </span>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.85)",
                  marginTop: "3px",
                }}
              >
                Smart Matches
              </span>

              {/* SVG line chart */}
              <div style={{ position: "relative", height: "60px", marginTop: "10px" }}>
                <svg width="100%" height="60" viewBox="0 0 150 60" preserveAspectRatio="none">
                  <path
                    d="M0 50 C20 50, 30 40, 50 35 C70 30, 75 20, 90 22 C105 24, 110 38, 130 35 C140 33, 145 36, 150 34"
                    fill="none"
                    stroke="#0b1727"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Dot on curve */}
                  <circle cx="90" cy="22" r="4" fill="#0b1727" />
                </svg>
                {/* Tooltip bubble */}
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "52%",
                    transform: "translateX(-50%)",
                    background: "#0b1727",
                    borderRadius: "8px",
                    padding: "3px 7px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      fontSize: "8px",
                      color: "#ffffff",
                    }}
                  >
                    12 Aug
                  </span>
                  {/* Tooltip arrow */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 0,
                      height: 0,
                      borderLeft: "4px solid transparent",
                      borderRight: "4px solid transparent",
                      borderTop: "4px solid #0b1727",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Lime Profile Set-up badge — floats top-right, overlapping */}
            <div
              className="absolute flex items-center gap-2"
              style={{
                top: "-14px",
                right: "-204px",
                background: "#d6f955",
                borderRadius: "16px",
                padding: "8px 12px",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                zIndex: 2,
                maxWidth: "160px",
              }}
            >
              {/* AI icon circle */}
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  background: "rgba(11,23,39,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L13.09 8.26L19 7L15.45 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L8.55 12L5 7L10.91 8.26L12 2Z" fill="#0b1727"/>
                </svg>
              </div>
              <div className="flex flex-col" style={{ gap: "1px" }}>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "9px",
                    color: "#0b1727",
                    opacity: 0.7,
                    lineHeight: "1.2",
                  }}
                >
                  Smart Matching
                </span>
                <div className="flex items-baseline gap-[6px]">
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      fontSize: "11px",
                      color: "#0b1727",
                      lineHeight: "1.2",
                    }}
                  >
                    Profile Set-up
                  </span>
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 800,
                      fontSize: "16px",
                      color: "#0b1727",
                      lineHeight: "1",
                    }}
                  >
                    97%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* ── Recent Network — perforated ticket card ── */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative shrink-0"
          style={{
            width: "540px",
            filter: "drop-shadow(0px 4px 3.5px rgba(0,0,0,0.12)) drop-shadow(0px 1px 1px rgba(0,0,0,0.08))",
          }}
        >
          {/* Perforated ticket background */}
          <img
            src="/assets/5f1773fb0d2599a66f8a1339c25195287c5bd71d.svg"
            alt=""
            className="absolute inset-0 w-full h-full pointer-events-none"
          />

          {/* Content inside ticket */}
          <div className="relative flex flex-col" style={{ padding: "18px 36px 18px 28px", gap: "12px" }}>
            {/* Title */}
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "#0b1727",
              }}
            >
              Recent Network
            </span>

            {/* Person rows */}
            {RECENT.map((p, i) => (
              <RecentCard key={p.name} person={p} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── Far-right column: Matching History + Set-up Card ── */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3 shrink-0"
          style={{ width: "180px" }}
        >
          {/* Matching History card */}
          <div
            className="relative flex flex-col overflow-hidden"
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "14px 14px 10px",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            {/* Title row */}
            <div className="flex items-center justify-between mb-2.5">
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "#0b1727",
                }}
              >
                Matching History
              </span>
              {/* Red notification dot */}
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#ef4444",
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Area chart */}
            <div style={{ height: "70px", width: "100%" }}>
              <svg width="100%" height="70" viewBox="0 0 152 70" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                {/* Filled area */}
                <path
                  d="M0 55 C10 55, 15 48, 25 44 C35 40, 38 50, 48 46 C58 42, 60 30, 72 22 C84 14, 88 28, 98 24 C108 20, 112 38, 122 34 C132 30, 140 40, 152 36 L152 70 L0 70 Z"
                  fill="url(#areaGrad)"
                />
                {/* Line on top */}
                <path
                  d="M0 55 C10 55, 15 48, 25 44 C35 40, 38 50, 48 46 C58 42, 60 30, 72 22 C84 14, 88 28, 98 24 C108 20, 112 38, 122 34 C132 30, 140 40, 152 36"
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Highlight dot at peak (Aug) */}
                <circle cx="72" cy="22" r="3.5" fill="#7c3aed" />
              </svg>
            </div>

            {/* Month labels */}
            <div className="flex items-center justify-between mt-1.5">
              {["June", "July", "Aug", "Sept", "Oct"].map((m) => (
                <span
                  key={m}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: m === "Aug" ? 700 : 400,
                    fontSize: "8px",
                    color: m === "Aug" ? "#ffffff" : "#8c9aa6",
                    background: m === "Aug" ? "#7c3aed" : "transparent",
                    borderRadius: m === "Aug" ? "20px" : "0",
                    padding: m === "Aug" ? "2px 5px" : "0",
                    lineHeight: "1.4",
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Set-up New Match Profile card */}
          <div
            className="relative flex flex-col justify-between overflow-hidden cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #f472b6 0%, #a855f7 100%)",
              borderRadius: "16px",
              padding: "16px",
              minHeight: "130px",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M9.5 2C9.5 2 9 4.5 7 6.5C5 8.5 2.5 9 2.5 9C2.5 9 5 9.5 7 11.5C9 13.5 9.5 16 9.5 16C9.5 16 10 13.5 12 11.5C14 9.5 16.5 9 16.5 9C16.5 9 14 8.5 12 6.5C10 4.5 9.5 2 9.5 2Z" fill="#a855f7"/>
                <path d="M17 14C17 14 16.7 15.3 15.7 16.3C14.7 17.3 13.5 17.5 13.5 17.5C13.5 17.5 14.7 17.7 15.7 18.7C16.7 19.7 17 21 17 21C17 21 17.3 19.7 18.3 18.7C19.3 17.7 20.5 17.5 20.5 17.5C20.5 17.5 19.3 17.3 18.3 16.3C17.3 15.3 17 14 17 14Z" fill="#a855f7"/>
              </svg>
            </div>

            {/* Text */}
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: "16px",
                color: "#ffffff",
                lineHeight: "1.25",
                fontStyle: "italic",
                marginTop: "12px",
              }}
            >
              Set-up New Match Profile
            </span>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
