"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/constants/navigation";

const LOGO_SRC      = "/assets/25970f5345442ddfdde11d88942e4184ad0ebbd6.svg";
const SIDEBAR_BG    = "/assets/140710c7c387b494f7eb2868018564f683df727d.png";
// Dark gradient SVG with a notch cutout — the notch reveals the white base (#f9f9f9)
// creating the white pill highlight around the active item
const NOTCH_SVG     = "/assets/3d1c7983ec33be67142466c254362b2335b87e30.svg";
const USER_AVATAR   = "/assets/e6d350d94c71fd9f04cd376ee7c24ce7a8211d62.png";
const NOTIF_ICON    = "/assets/71e5870f83b71bd724358f62e01317b0f9f399da.svg";
const SETTINGS_ICON = "/assets/19f5b17bf4eb3030185c0a9270dc9e8df1785482.svg";

// The notch in the SVG sits at y≈210–271 (61px tall), centred on item 0.
// Each item is 35px tall with 24px gap = 59px stride.
// We translate the SVG down by activeIndex × 59 to move the notch to the active item.
const ITEM_STRIDE = 59;

export default function Sidebar() {
  const pathname = usePathname();

  const activeIndex = NAV_ITEMS.findIndex(
    (item) => pathname === item.href || pathname.startsWith(item.href + "/")
  );
  const notchY = activeIndex >= 0 ? activeIndex * ITEM_STRIDE : 0;

  return (
    <motion.aside
      initial={{ x: -206, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring" as const, stiffness: 260, damping: 28 }}
      className="relative w-[206px] min-h-screen shrink-0 overflow-hidden"
    >
      {/* White base — shows through the SVG notch to create the active pill */}
      <div className="absolute  inset-0 bg-[#f9f9f9]" />

      {/* 5% texture on the white base */}
      <div
        className="absolute  inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: `url('${SIDEBAR_BG}')`, backgroundSize: "1024px 1024px" }}
      />

      {/* Dark gradient SVG with notch — slides vertically to track active item */}
      <motion.img
        src={NOTCH_SVG}
        alt=""
        className="absolute left-0 w-[206px] h-[869px] pointer-events-none"
        style={{ top: 0 }}
        animate={{ y: notchY }}
        transition={{ type: "spring" as const, stiffness: 400, damping: 35 }}
      />

      {/* Logo: absolute left-[32px] top-[55px] */}
      <div className="absolute left-8 top-[55px] z-10">
        <img src={LOGO_SRC} alt="NOEL" className="h-[31px] w-[109px] object-contain" />
      </div>

      {/* Nav: absolute left-[17px] top-[224px] px-[12px] gap-[24px] */}
      <nav className="absolute left-[17px] top-[224px] z-10 flex flex-col gap-[24px] px-[12px]">
        {NAV_ITEMS.map((item, i) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <motion.div
              key={item.href}
              initial={{ x: -16, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.08 + i * 0.06,
                type: "spring" as const,
                stiffness: 300,
                damping: 30,
              }}
            >
              <Link href={item.href} className="flex items-center gap-[12px]">
                {/* Icon bubble: #0b1727 active, rgba(38,61,92,0.56) inactive */}
                <div
                  className="flex items-center justify-center rounded-[17.5px] size-[35px] shrink-0 p-[7px]"
                  style={{
                    background: isActive ? "#0b1727" : "rgba(38,61,92,0.56)",
                  }}
                >
                  <img src={item.iconSrc} alt="" className="size-[20px] object-contain" />
                </div>

                {/* Label: #0b1727 semibold active, #f3f0e9 normal inactive */}
                <span
                  className="text-[16px] tracking-[0.32px] leading-[1.2] whitespace-nowrap"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#0b1727" : "#f3f0e9",
                  }}
                >
                  {item.label}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* User Account: absolute left-[29px] top-[606px] */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.4 }}
        className="absolute left-[29px] top-[606px] z-10 flex flex-col gap-[11px] w-[191px]"
      >
        <p
          className="text-[#f3f0e9] text-[10px] tracking-[3px] leading-[25px] uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 200 }}
        >
          User Account
        </p>

        <div className="relative h-[51px] w-[191px]">
          <div className="absolute left-[5px] top-[4px] h-[44px] w-[46px] overflow-hidden rounded-[30px] bg-[#d6e264]">
            <img
              src={USER_AVATAR}
              alt="Kwame Williams"
              className="absolute left-[-2px] top-[6px] h-[38px] w-[57px] object-cover"
            />
          </div>
          <div className="absolute left-[58px] top-[12px] flex flex-col w-[94px]">
            <span
              className="text-[#d8e2fd] text-[10px] leading-[25px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
            >
              Kwame Williams
            </span>
            <span
              className="text-[#d8e2fd] text-[10px] leading-[25px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
            >
              CEO SuperBiz
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[15px]">
          <Link href="/notifications" className="flex items-center gap-4.25 hover:opacity-80 transition-opacity">
            <img src={NOTIF_ICON} alt="" className="size-[24px] shrink-0" />
            <span className="text-white text-[12px] whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
              Notifications
            </span>
          </Link>
          <Link href="/settings" className="flex items-center gap-[23px] hover:opacity-80 transition-opacity">
            <img src={SETTINGS_ICON} alt="" className="size-[20px] shrink-0" />
            <span className="text-white text-[12px] whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
              Settings
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.aside>
  );
}
