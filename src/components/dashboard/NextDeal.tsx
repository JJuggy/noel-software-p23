"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DealDetailPanel, { type DealPerson } from "./DealDetailPanel";
import FilterPanel from "./FilterPanel";

const imgSubtract        = "/assets/5f1773fb0d2599a66f8a1339c25195287c5bd71d.svg";
const imgAiSearch        = "/assets/fefdce0d9d1421c248ed7ba7b14c0b8eed001d17.svg";
const imgPreference      = "/assets/6d5c6b10b9e9230c715853ecedc7a3be63a971d2.svg";
const imgLocation        = "/assets/d5467f78a642247698cef5f8c80453d4a1ebc50b.svg";
const imgStar            = "/assets/6ff79375edbc913a162682b9342aca8f6f4bf674.svg";
const imgDivider         = "/assets/1fbab676ed51c5c64e1f8e867b36216e24789631.svg";
const imgHeaderDivider   = "/assets/db0648352a78bc015ae8afea33baf32b835780f7.svg";

const DEALS = [
  {
    name: "Jamal Agoro",
    location: "Johannesburg, South Africa",
    rating: "4.6",
    title: "CFO",
    industry: "Renewable Energy",
    avatar: "/assets/9c2327947617943b662d0ff6f39827be58337426.png",
    avatarBg: "#fdf7e0",
    avatarStyle: { top: "-5px", left: "-4px", height: "169px", width: "113px" },
  },
  {
    name: "Thabo Molefe",
    location: "Johannesburg, South Africa",
    rating: "4.6",
    title: "CFO",
    industry: "Renewable Energy",
    avatar: "/assets/770f1c638d497fa09bdce76e6acef00764c9f930.png",
    avatarBg: "#fdf7e0",
    avatarStyle: { top: "-8px", left: "-4px", height: "151px", width: "101px" },
  },
  {
    name: "Amina Diop",
    location: "Dakar, Senegal",
    rating: "4.6",
    title: "COO",
    industry: "Francophone Africa Startups",
    avatar: "/assets/21a425451e1e140fd362223855aa33b6a82eb76b.png",
    avatarBg: "#b972c4",
    avatarStyle: { top: "-8px", left: "-4px", height: "151px", width: "101px" },
  },
];

export default function NextDeal() {
  const [selected, setSelected] = useState<DealPerson | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <>
    <DealDetailPanel person={selected} onClose={() => setSelected(null)} />
    <FilterPanel open={filterOpen} onClose={() => setFilterOpen(false)} />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="relative w-[661px] h-[353px] shrink-0 overflow-hidden"
      style={{ filter: "drop-shadow(0px 4px 3.5px rgba(0,0,0,0.15)) drop-shadow(0px 1px 1px rgba(0,0,0,0.3))" }}
    >
      {/* Perforated ticket background — white card with semicircle notches on both sides */}
      <img
        src={imgSubtract}
        alt=""
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Content: px-[52px] py-[16px] */}
      <div className="absolute inset-0 px-[52px] py-[16px] flex flex-col gap-[8px]">
        {/* Header row */}
        <div className="flex gap-[2px] items-center">
          {/* Title: italic "Let's find your" + bold italic "next deal" */}
          <div className="shrink-0 w-[126px] h-[68px] flex flex-col justify-center">
            <p
              className="text-[#0b1727] text-[16px] leading-[24px] italic m-0"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
            >
              {"Let's find your "}
            </p>
            <p
              className="text-[#0b1727] text-[24px] leading-[24px] italic m-0"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
            >
              next deal
            </p>
          </div>

          {/* Search bar + filter */}
          <div className="flex gap-[65px] items-center shrink-0">
            {/* Search pill */}
            <div className="relative w-[320px] h-[42px] rounded-[20px] bg-[rgba(39,230,167,0.16)] overflow-hidden">
              <div className="absolute left-[21px] top-[9px] flex gap-[174px] items-center">
                <span
                  className="text-[#193e47] text-[14px] italic w-[80px]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
                >
                  Search
                </span>
                <img src={imgAiSearch} alt="Search" className="size-[24px] shrink-0" />
              </div>
            </div>
            {/* Filter icon */}
            <img
              src={imgPreference}
              alt="Filter"
              className="size-[40px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setFilterOpen(true)}
            />
          </div>
        </div>

        {/* Header divider line (at y≈86 from top = ~54px from content top) */}
        <div className="relative h-0 w-[553px] shrink-0">
          <div className="absolute inset-[-1px_0_0_0]">
            <img src={imgHeaderDivider} alt="" className="block w-full h-full" />
          </div>
        </div>

        {/* Deal rows — scrollable list */}
        <div className="flex flex-col gap-[17px] h-[260px] overflow-y-auto overflow-x-hidden shrink-0 w-[521px]">
          {DEALS.map((deal, i) => (
            <div key={deal.name + i}>
              {/* Deal card */}
              <div
                className="relative w-[521px] h-[113px] bg-white rounded-[20px] overflow-hidden shrink-0 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelected({ name: deal.name, title: deal.title, avatar: deal.avatar, location: deal.location, rating: deal.rating, industry: deal.industry })}
              >
                {/* Avatar block — left side colored bg with photo */}
                <div
                  className="absolute left-[5px] top-[50%] -translate-y-1/2 w-[107px] h-[102px] rounded-bl-[20px] rounded-tl-[20px] overflow-hidden"
                  style={{ background: deal.avatarBg }}
                >
                  <img
                    src={deal.avatar}
                    alt={deal.name}
                    className="absolute max-w-none object-cover pointer-events-none"
                    style={deal.avatarStyle}
                  />
                </div>

                {/* Content — right of avatar */}
                <div className="absolute left-[138px] top-[18px] w-[339px] flex flex-col gap-[11px]">
                  {/* Name + rating row */}
                  <div className="flex gap-[111px] items-start justify-center">
                    <div className="flex flex-col gap-[5px] w-[175px]">
                      <p
                        className="text-[#193e47] text-[16px] leading-[17px] m-0"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
                      >
                        {deal.name}
                      </p>
                      <div className="flex gap-[6px] items-center">
                        <img src={imgLocation} alt="" className="size-[11px] shrink-0" />
                        <span
                          className="text-[#193e47] text-[10px] leading-[25px]"
                          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
                        >
                          {deal.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-[6px] items-center shrink-0">
                      <span
                        className="text-[#193e47] text-[16px] leading-[25px] w-[26px]"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
                      >
                        {deal.rating}
                      </span>
                      <img src={imgStar} alt="rating" className="size-[19px] shrink-0" />
                    </div>
                  </div>

                  {/* Title + Industry labels */}
                  <div className="flex gap-[108px] items-center">
                    <div className="flex flex-col w-[126px]">
                      <span
                        className="text-[#27e6a7] text-[10px] leading-[25px] h-[15px]"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
                      >
                        Title
                      </span>
                      <span
                        className="text-[#193e47] text-[10px] leading-[25px] h-[15px]"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
                      >
                        {deal.title}
                      </span>
                    </div>
                    <div className="flex flex-col w-[126px]">
                      <span
                        className="text-[#27e6a7] text-[10px] leading-[25px] h-[15px]"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
                      >
                        Industry
                      </span>
                      <span
                        className="text-[#193e47] text-[10px] leading-[25px] h-[15px] whitespace-nowrap"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
                      >
                        {deal.industry}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row divider (except after last item) */}
              {i < DEALS.length - 1 && (
                <div className="relative h-0 w-[553px] shrink-0 mt-[17px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img src={imgDivider} alt="" className="block w-full h-full" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
    </>
  );
}
