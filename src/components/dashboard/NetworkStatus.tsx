"use client";

import { motion } from "framer-motion";

const imgVector3 = "/assets/fa14840b1572df9863cbca5f8ae83295597b0de4.svg";
const imgVector4 = "/assets/0a4afaf4e42216897dc34c6c1383daf091bfe2d4.svg";
const imgVector5 = "/assets/c312ff5f41a619f6d8e69133ea0a76d351dc5f65.svg";

export default function NetworkStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-[20px] p-[20px] shadow-[0px_1px_2px_2px_rgba(0,0,0,0.15)] flex flex-col gap-[12px]"
    >
      <div className="flex items-center justify-between">
        <p className="text-[#0B1727] text-[13px] font-semibold tracking-[0.2px]">Network Status</p>
        <span className="text-[#27E6A7] text-[22px] font-bold">15%</span>
      </div>

      {/* Graph area */}
      <div className="relative h-[80px] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ maskImage: `url('${imgVector3}')`, maskSize: "cover", maskRepeat: "no-repeat" }}
        >
          <img src={imgVector4} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <img src={imgVector5} alt="" className="absolute inset-0 w-full h-full object-contain" />
      </div>

      <div className="flex gap-[16px]">
        <div className="flex flex-col">
          <span className="text-[#0B1727] text-[18px] font-bold">45k</span>
          <span className="text-[#0B1727]/50 text-[11px]">Connections</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#0B1727] text-[18px] font-bold">75k</span>
          <span className="text-[#0B1727]/50 text-[11px]">Reach</span>
        </div>
      </div>
    </motion.div>
  );
}
