"use client";

import { useState } from "react";
import SmartMatchModal from "@/components/match/SmartMatchModal";
import MatchScreen from "@/components/match/MatchScreen";

export default function MatchPage() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <SmartMatchModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <MatchScreen />
    </>
  );
}
