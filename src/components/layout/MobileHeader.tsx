"use client";

import Link from "next/link";

const imgSubtract    = "/assets/3cca0b249434acc16de1baeeb8198edf75957bc1.svg";
const imgNotifIcon   = "/assets/dcc0b9e326f52fd79c3ed3f0f76ac1d77e68228f.svg";
const imgUserAvatar  = "/assets/e6d350d94c71fd9f04cd376ee7c24ce7a8211d62.png";

export default function MobileHeader() {
  return (
    <header
      className="relative overflow-hidden shrink-0"
      style={{ height: "94px" }}
    >
      {/* Ticket-shape background SVG */}
      <div className="absolute inset-[-3.19%_-0.94%_-5.32%_-0.94%]">
        <img alt="" className="block max-w-none size-full pointer-events-none" src={imgSubtract} />
      </div>

      {/* Content */}
      <div className="absolute inset-0 px-[30px] py-[14px] flex items-center gap-[42px]">
        {/* Greeting */}
        <div className="flex flex-col items-start flex-1 min-w-0 text-[#f3f0e9]">
          <p
            className=" font-extrabold leading-[1.2] text-[24px] w-full"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
          >
            Hello, Kwame!
          </p>
          <p
            className="text-[13px] tracking-[0.5px] leading-[17px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            Good morning!
          </p>
        </div>

        {/* Notification + Avatar */}
        <div className="flex items-center gap-[13px] shrink-0">
          <Link href="/notifications">
            <img src={imgNotifIcon} alt="Notifications" className="size-[21px] object-contain" />
          </Link>
          <div
            className="relative overflow-hidden rounded-[30px] shrink-0"
            style={{ width: "64px", height: "61px", background: "#d6e264" }}
          >
            <img
              src={imgUserAvatar}
              alt="Kwame"
              className="absolute max-w-none object-cover pointer-events-none"
              style={{ left: "-2px", top: "6px", height: "55px", width: "83px" }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
