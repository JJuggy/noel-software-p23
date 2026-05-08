"use client";

import { motion } from "framer-motion";
import { StatCardGrowth, StatCardNetwork, StatCardCommunity } from "@/components/dashboard/StatCard";
import MessageSkills from "@/components/dashboard/MessageSkills";
import NextDeal from "@/components/dashboard/NextDeal";
import RecommendedLeads from "@/components/dashboard/RecommendedLeads";
import Matches from "@/components/dashboard/Matches";


export default function DashboardPage() {
  return (
    <div className="min-h-full bg-[#f9f9f9] rounded-[30px] m-[8px] p-[48px] overflow-y-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between mb-[32px]"
      >
        <div>
          <h1 className="text-[#0B1727] text-[26px] font-bold tracking-[-0.3px]">
            Good Morning Kwame
          </h1>
          <p className="text-[#0B1727]/50 text-[13px] mt-[2px]">
            Here's what's happening with your network today.
          </p>
        </div>

      </motion.div>

      {/* Stat cards row */}
      <div className="grid grid-cols-3 gap-[16px] mb-[24px]">
        <StatCardGrowth delay={0.05} />
        <StatCardNetwork delay={0.13} />
        <StatCardCommunity delay={0.21} />
      </div>

      {/* Top row: NextDeal (fixed) + MessageSkills (fills rest) */}
      <div className="flex gap-[16px] items-start mb-[16px]">
        <div className="shrink-0">
          <NextDeal />
        </div>
        <div className="flex-1 min-w-0">
          <MessageSkills />
        </div>
      </div>

      {/* Bottom row: Matches (fixed 388px) + RecommendedLeads (fills rest) */}
      <div className="flex gap-[16px] items-start">
        <Matches />
        <div className="flex-1 min-w-0">
          <RecommendedLeads />
        </div>
      </div>
    </div>
  );
}
