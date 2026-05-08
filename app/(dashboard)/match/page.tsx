"use client";

import { useState } from "react";
import SmartMatchModal from "@/components/match/SmartMatchModal";
import MatchScreen from "@/components/match/MatchScreen";
import ComingSoon from "@/components/ui/ComingSoon";

export default function MatchPage() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block h-full">
        <SmartMatchModal open={modalOpen} onClose={() => setModalOpen(false)} />
        <MatchScreen />
      </div>

      {/* Mobile */}
      <div className="md:hidden min-h-screen">
        <ComingSoon title="Match" />
      </div>
    </>
  );
}
