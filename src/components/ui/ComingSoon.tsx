"use client";

import { motion } from "framer-motion";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-full bg-[#f9f9f9] rounded-[30px] m-[8px] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-[16px] text-center"
      >
        <div className="size-[72px] rounded-[24px] bg-[#0B1727] flex items-center justify-center mb-[8px]">
          <div className="size-[36px] rounded-full bg-[#27E6A7] opacity-80" />
        </div>
        <h2 className="text-[#0B1727] text-[28px] font-bold">{title}</h2>
        <p className="text-[#0B1727]/50 text-[15px] max-w-[300px]">
          This section is coming soon. Drop back once the next Figma screens are ready.
        </p>
        <motion.div
          className="h-[3px] w-[60px] rounded-full bg-[#27E6A7]"
          animate={{ scaleX: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
