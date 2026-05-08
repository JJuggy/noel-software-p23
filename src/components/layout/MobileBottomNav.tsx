"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// ── Figma assets (node 8796:90886) ─────────────────────────────────────────
const imgUnion          = "/assets/8efad3c9d1a2dd3d06afa0603ddf62c92bc262c6.svg";
const imgEllipse270     = "/assets/147bea91bcfa50d3c31588b435714f8875b051ae.svg";  // FAB bg circle 82×82
const imgEllipse272     = "/assets/9cb556680eb6d22995e26fe3c1c1afe3ff2e26fa.svg";  // small dot 51×51
const imgVector         = "/assets/fc1f42fdeef42f796b0e34254f0b9bfb6b5ef1a3.svg";
const imgVector1        = "/assets/b1c96626b904e2145ccea3001e0644388dcd713e.svg";
const imgDashboard      = "/assets/0250c0a9eaa5f372ce8ee928e540ed95491fbc5e.svg";  // x=0
const imgBubbleChat     = "/assets/c8e0ea28b60ba248f53012cb24767194721c87dc.svg";  // x=74
const imgSearchList02   = "/assets/9bb980a591a15842d7c83fe60301a550a4097e43.svg";  // x=222
const imgShareKnowledge = "/assets/43e23faeb8c2a64c04225558cfd3f10ca10bd1f4.svg";  // x=296

export default function MobileBottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    // Outer wrapper: fixed bottom, full width, height=209px (matches Figma group height)
    // The group is 481px wide centred in the 440px mobile screen → overflow hidden on sides
    <div
      className="fixed bottom-0 left-0 right-0 z-50 overflow-hidden"
      style={{ height: "209px", pointerEvents: "none" }}
    >
      {/* ── Union shape (481×209, centred: left = 50% - 240.5px) ── */}
      <div
        className="absolute"
        style={{ left: "50%", transform: "translateX(-50%)", top: 0, width: "481px", height: "209px" }}
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full pointer-events-none select-none" src={imgUnion} />
      </div>

      {/* ── Ellipse270 — FAB background circle: x=198, y=86, 82×82 ── */}
      <div
        className="absolute"
        style={{ left: "50%", marginLeft: "-240.5px", top: 0 }}
      >
        <div
          className="absolute"
          style={{ left: "198px", top: "86px", width: "82px", height: "82px", pointerEvents: "auto" }}
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse270} />
        </div>

        {/* ── FAB icon (repeat): x=218, y=105, 43×43 ── */}
        <Link
          href="/match"
          className="absolute"
          style={{ left: "218px", top: "105px", width: "43px", height: "43px", pointerEvents: "auto" }}
        >
          {/* repeat icon built from two vectors */}
          <div className="absolute" style={{ bottom: "33.33%", left: "8.33%", right: "25%", top: "12.5%" }}>
            <div className="absolute" style={{ inset: "-8.59% -6.99% -8.59% -6.98%" }}>
              <img alt="" className="block max-w-none size-full" src={imgVector} />
            </div>
          </div>
          <div className="absolute" style={{ bottom: "12.5%", left: "25%", right: "8.33%", top: "33.33%" }}>
            <div className="absolute" style={{ inset: "-8.59% -6.98% -8.59% -6.99%" }}>
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
        </Link>

        {/* ── Ellipse272 — small active dot: x=67, y=117, 51×51 ── */}
        <div
          className="absolute"
          style={{ left: "67px", top: "117px", width: "51px", height: "51px" }}
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse272} />
        </div>

        {/* ── Icons row: x=74, y=123, width=333, height=37 ── */}
        {/* Icons at x=0, 74, 148, 222, 296 within the row */}
        <div
          className="absolute flex items-center"
          style={{ left: "74px", top: "123px", width: "333px", height: "37px", pointerEvents: "auto" }}
        >
          {/* dashboard-square-03: x=0 */}
          <Link
            href="/dashboard"
            className="absolute"
            style={{ left: "0px", top: "0px", width: "37px", height: "37px", opacity: isActive("/dashboard") ? 1 : 0.55 }}
          >
            <img alt="Dashboard" className="absolute block inset-0 max-w-none size-full" src={imgDashboard} />
          </Link>

          {/* bubble-chat: x=74 */}
          <Link
            href="/messages"
            className="absolute"
            style={{ left: "74px", top: "0px", width: "37px", height: "37px", opacity: isActive("/messages") ? 1 : 0.55 }}
          >
            <img alt="Messages" className="absolute block inset-0 max-w-none size-full" src={imgBubbleChat} />
          </Link>

          {/* repeat (FAB placeholder in row): x=148 — not a link, FAB is above */}
          <div
            className="absolute"
            style={{ left: "148px", top: "0px", width: "37px", height: "37px" }}
          />

          {/* search-list-02: x=222 */}
          <Link
            href="/directory"
            className="absolute"
            style={{ left: "222px", top: "0px", width: "37px", height: "37px", opacity: isActive("/directory") ? 1 : 0.55 }}
          >
            <img alt="Directory" className="absolute block inset-0 max-w-none size-full" src={imgSearchList02} />
          </Link>

          {/* share-knowledge: x=296 */}
          <Link
            href="/leads"
            className="absolute"
            style={{ left: "296px", top: "0px", width: "37px", height: "37px", opacity: isActive("/leads") ? 1 : 0.55 }}
          >
            <img alt="Leads" className="absolute block inset-0 max-w-none size-full" src={imgShareKnowledge} />
          </Link>
        </div>
      </div>
    </div>
  );
}
