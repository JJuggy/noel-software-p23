"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DealDetailPanel, { type DealPerson } from "./DealDetailPanel";

// ── Figma assets (node 8787:3319) ──────────────────────────────────────────
const imgPortraitYoungMan    = "/assets/770f1c638d497fa09bdce76e6acef00764c9f930.png";
const imgAiSearch02          = "/assets/1194b259c766c7e2f5480ec205a4f194eb74339e.svg";
const imgPreferenceHorizontal = "/assets/ab85f9ec5bb82181b7a696905a53403943566cb1.svg";
const imgLocation05          = "/assets/534f822779914f5e851bf5fe6bea7b8bc3056c6a.svg";
const imgStar                = "/assets/6ff79375edbc913a162682b9342aca8f6f4bf674.svg";
const imgLine50              = "/assets/354a6b1097a74ed7f1aa7b63becbcd4905d0db2c.svg";

// Figma page coords: outer card top=574. All child tops are relative to that.
// card1 top=653 → 653-574=79  (but we're inside the 291px card, so relative)
// header top=596 → 596-574=22
// card1 top=653 → 79px from card top
// divider top=742 → 168px
// card2 top=748 → 174px

const DEALS: Array<{
  name: string; location: string; rating: string;
  title: string; industry: string;
  avatarBg: string;
}> = [
  {
    name: "Thabo Molefe", location: "Johannesburg, South Africa",
    rating: "4.6", title: "CFO", industry: "Renewable Energy",
    avatarBg: "#fdf7e0",
  },
  {
    name: "Thabo Molefe", location: "Johannesburg, South Africa",
    rating: "4.6", title: "CFO", industry: "Renewable Energy",
    avatarBg: "#b972c4",
  },
];

export default function MobileNextDeal() {
  const [selected, setSelected] = useState<DealPerson | null>(null);

  return (
    <>
      <DealDetailPanel person={selected} onClose={() => setSelected(null)} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.26, duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        // Outer card: 424×291px, bg #0b1727, rounded-[20px]
        // Figma left is centred (calc 50% - 0.5px) inside 440px screen → margin ~8px each side
        className="relative mx-[8px] rounded-[20px] overflow-hidden"
        style={{
          width: "424px",
          height: "291px",
          background: "#0b1727",
          boxShadow: "0px 4px 7px 3px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)",
        }}
      >
        {/* ── Header row: left=60.17-8=52.17 inside card, top=596-574=22 ── */}
        <div
          className="absolute flex gap-[10px] items-start"
          style={{ left: "52.17px", top: "22px", width: "343.566px" }}
        >
          {/* Title: "Let's find your / next deal" */}
          <div
            className="flex flex-col italic justify-center leading-[0] shrink-0 text-white whitespace-pre-wrap"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, width: "73px", height: "30px" }}
          >
            <p className="leading-[24px] mb-0 text-[10px]">{"Let's find your "}</p>
            <p className="font-bold leading-[14px] text-[14px]">next deal</p>
          </div>

          {/* Search bar + filter */}
          <div className="flex gap-[19px] items-center shrink-0">
            {/* Search pill: 202×42px, rgba(211,241,231,0.16) */}
            <div
              className="relative overflow-hidden rounded-[20px]"
              style={{ width: "202px", height: "42px", background: "rgba(211,241,231,0.16)" }}
            >
              <div className="absolute flex gap-[53px] items-center" style={{ left: "21px", top: "9px" }}>
                <div
                  className="italic text-[14px] text-white"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, width: "80px" }}
                >
                  <p className="leading-[25px]">Search</p>
                </div>
                <div className="relative shrink-0 size-[24px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAiSearch02} />
                </div>
              </div>
            </div>

            {/* Filter icon: 30×30px */}
            <div className="relative shrink-0 size-[30px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPreferenceHorizontal} />
            </div>
          </div>
        </div>

        {/* ── Deal card 1: left=36.52-8=28.52, top=653-574=79, 396×76px ── */}
        <div
          className="absolute overflow-hidden rounded-[20px] cursor-pointer"
          style={{ left: "28.52px", top: "79px", width: "396.026px", height: "76px", background: "#0b1727" }}
          onClick={() => setSelected({ name: DEALS[0].name, title: DEALS[0].title, avatar: imgPortraitYoungMan, location: DEALS[0].location, rating: DEALS[0].rating, industry: DEALS[0].industry })}
        >
          {/* Avatar block: left=5, top=6, 83×66px, bg #fdf7e0 */}
          <div
            className="absolute overflow-hidden rounded-bl-[20px] rounded-tl-[20px]"
            style={{ left: "5px", top: "6px", width: "83px", height: "66px", background: DEALS[0].avatarBg }}
          >
            <div className="absolute" style={{ left: "-4px", top: "-14px", width: "91px", height: "136px" }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPortraitYoungMan} />
            </div>
          </div>

          {/* Info: left=106, top=8 */}
          <div className="absolute flex flex-col gap-[7px] items-start" style={{ left: "106px", top: "8px", width: "339px" }}>
            {/* Name + rating */}
            <div className="flex gap-[44px] items-start justify-center">
              <div className="flex flex-col gap-px items-start w-[135px]">
                <div className="flex flex-col font-semibold justify-center leading-[0] text-[#f3f0e9] text-[13px] w-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <p className="leading-[17px]">Thabo Molefe</p>
                </div>
                <div className="flex gap-[6px] items-center w-full">
                  <div className="relative shrink-0 size-[10px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLocation05} />
                  </div>
                  <div className="flex flex-col font-normal h-[15px] justify-center leading-[0] text-[#f3f0e9] text-[8px] w-[158px]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <p className="leading-[25px]">Johannesburg, South Africa</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[6px] items-center shrink-0">
                <div className="flex flex-col font-normal justify-center leading-[0] text-[#f3f0e9] text-[16px] w-[26px]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <p className="leading-[25px]">4.6</p>
                </div>
                <div className="relative shrink-0 size-[19px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                </div>
              </div>
            </div>

            {/* Title + Industry */}
            <div className="flex gap-[54px] items-center leading-[0] text-[8px] w-[334px]">
              <div className="flex flex-col items-start w-[126px]">
                <div className="flex flex-col font-medium h-[15px] justify-center mb-[-6px] text-[#27e6a7] w-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <p className="leading-[25px]">Title</p>
                </div>
                <div className="flex flex-col font-extrabold h-[15px] justify-center text-[#f3f0e9] w-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <p className="leading-[25px]">CFO</p>
                </div>
              </div>
              <div className="flex flex-col items-start w-[126px]">
                <div className="flex flex-col font-medium h-[15px] justify-center mb-[-6px] text-[#27e6a7] w-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <p className="leading-[25px]">Industry</p>
                </div>
                <div className="flex flex-col font-extrabold h-[15px] justify-center text-[#f3f0e9] w-[105px]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <p className="leading-[25px]">Renewable Energy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider: left=35.49-8=27.49, top=742-574=168 ── */}
        <div className="absolute h-0" style={{ left: "27.49px", top: "168px", width: "397.055px" }}>
          <div className="absolute" style={{ inset: "-1px 0 0 0" }}>
            <img alt="" className="block max-w-none size-full" src={imgLine50} />
          </div>
        </div>

        {/* ── Deal card 2: left=34.46-8=26.46, top=748-574=174, 396×76px ── */}
        <div
          className="absolute overflow-hidden rounded-[20px] cursor-pointer"
          style={{ left: "26.46px", top: "174px", width: "396.026px", height: "76px", background: "#0b1727" }}
          onClick={() => setSelected({ name: DEALS[1].name, title: DEALS[1].title, avatar: imgPortraitYoungMan, location: DEALS[1].location, rating: DEALS[1].rating, industry: DEALS[1].industry })}
        >
          {/* Avatar block: bg #b972c4 */}
          <div
            className="absolute overflow-hidden rounded-bl-[20px] rounded-tl-[20px]"
            style={{ left: "5px", top: "6px", width: "83px", height: "66px", background: DEALS[1].avatarBg }}
          >
            <div className="absolute" style={{ left: "-4px", top: "-14px", width: "91px", height: "136px" }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPortraitYoungMan} />
            </div>
          </div>

          {/* Info */}
          <div className="absolute flex flex-col gap-[7px] items-start" style={{ left: "106px", top: "8px", width: "339px" }}>
            <div className="flex gap-[44px] items-start justify-center">
              <div className="flex flex-col gap-px items-start w-[135px]">
                <div className="flex flex-col font-semibold justify-center leading-[0] text-[#f3f0e9] text-[13px] w-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <p className="leading-[17px]">Thabo Molefe</p>
                </div>
                <div className="flex gap-[6px] items-center w-full">
                  <div className="relative shrink-0 size-[10px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLocation05} />
                  </div>
                  <div className="flex flex-col font-normal h-[15px] justify-center leading-[0] text-[#f3f0e9] text-[8px] w-[158px]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <p className="leading-[25px]">Johannesburg, South Africa</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[6px] items-center shrink-0">
                <div className="flex flex-col font-normal justify-center leading-[0] text-[#f3f0e9] text-[16px] w-[26px]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <p className="leading-[25px]">4.6</p>
                </div>
                <div className="relative shrink-0 size-[19px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                </div>
              </div>
            </div>

            <div className="flex gap-[54px] items-center leading-[0] text-[8px] w-[334px]">
              <div className="flex flex-col items-start w-[126px]">
                <div className="flex flex-col font-medium h-[15px] justify-center mb-[-6px] text-[#27e6a7] w-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <p className="leading-[25px]">Title</p>
                </div>
                <div className="flex flex-col font-extrabold h-[15px] justify-center text-[#f3f0e9] w-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <p className="leading-[25px]">CFO</p>
                </div>
              </div>
              <div className="flex flex-col items-start w-[126px]">
                <div className="flex flex-col font-medium h-[15px] justify-center mb-[-6px] text-[#27e6a7] w-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <p className="leading-[25px]">Industry</p>
                </div>
                <div className="flex flex-col font-extrabold h-[15px] justify-center text-[#f3f0e9] w-[105px]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <p className="leading-[25px]">Renewable Energy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
