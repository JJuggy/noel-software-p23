import Sidebar from "@/components/layout/Sidebar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-screen bg-brn-navy">
      {/* Sidebar — hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <main className="flex-1 md:-ml-2 overflow-y-auto overflow-x-hidden">
        {children}
      </main>

      {/* Bottom nav — mobile only */}
      <div className="md:hidden">
        <MobileBottomNav />
      </div>
    </div>
  );
}
