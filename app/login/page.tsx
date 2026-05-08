"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const imgTexture     = "/assets/80c94f9fec1dcc78be1c4a2471fb0c1e176bba42.png";
const imgLogoPattern = "/assets/d4648cab6c54298ce57e3ababf3573f3f6a1eeaf.svg";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    router.push("/dashboard");
  }

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-white">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `url('${imgTexture}')`, backgroundSize: "1024px 1024px", opacity: 0.12 }}
      />

      {/* ── Desktop: teal accent bar ── */}
      <div
        className="hidden md:block absolute z-10"
        style={{ left: "540px", top: "-16px", width: "20px", height: "961px", background: "#2ABFBB", borderRadius: "0 10px 30px 0" }}
      />

      {/* ── Desktop: left dark panel ── */}
      <div
        className="hidden md:block absolute left-0 top-0 overflow-hidden"
        style={{ width: "535px", height: "100%", background: "#0B1727", boxShadow: "6px 0px 5px #0B1C33" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute flex flex-col gap-[10px]"
          style={{ left: "122px", top: "151px", width: "308px" }}
        >
          <h2 className="m-0 text-[36px] leading-[1.2]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#F3F0E9" }}>
            Welcome Back!
          </h2>
          <p className="m-0 text-[13px] leading-[15px] tracking-[0.5px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#F3F0E9" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </motion.div>

        <div className="absolute" style={{ left: "-12px", bottom: "80px", width: "557px", height: "91px" }}>
          <img src={imgLogoPattern} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute flex flex-col gap-[1px]" style={{ left: "116px", bottom: "20px", width: "280px" }}>
          <p className="m-0 text-[16px] leading-[24px] tracking-[0.5px]" style={{ fontFamily: "'Montserrat', sans-serif", color: "#F3F0E9" }}>
            <span style={{ fontWeight: 300 }}>{"Don't have an account? "}</span>
            <a href="/signup" style={{ fontWeight: 600, fontStyle: "italic", color: "#F3F0E9", textDecoration: "none" }}>Sign Up</a>
          </p>
          <p className="m-0 text-[16px] leading-[24px] tracking-[0.5px] italic" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#F3F0E9" }}>
            Need Help?
          </p>
        </div>
      </div>

      {/* ── Mobile: top dark header ── */}
      <div
        className="md:hidden relative overflow-hidden flex flex-col justify-end px-6 pb-6"
        style={{ background: "#0B1727", minHeight: "180px" }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-[60px] pointer-events-none opacity-60">
          <img src={imgLogoPattern} alt="" className="w-full h-full object-cover" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 pt-12"
        >
          <h2 className="m-0 text-[28px] leading-[1.2]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#F3F0E9" }}>
            Welcome Back!
          </h2>
          <p className="m-0 text-[13px] leading-[18px] tracking-[0.3px] mt-2" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#F3F0E9", opacity: 0.7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
      </div>

      {/* ── Desktop: right form panel ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block absolute"
        style={{ left: "774px", top: "61px", width: "466px" }}
      >
        <div className="flex flex-col gap-[10px] mb-[44px]">
          <h1 className="m-0 text-[36px] leading-[1.2]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#0B1727" }}>
            Your Next Connection Awaits You!
          </h1>
          <p className="m-0 text-[20px] leading-[24px] tracking-[0.5px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-0">
          {/* Email */}
          <div className="relative mb-[24px]" style={{ height: "96px" }}>
            <div className="absolute z-10 bg-white flex items-center justify-center" style={{ left: "33px", top: 0, padding: "10px 22px", borderRadius: "4px" }}>
              <span className="text-[16px] leading-[24px] tracking-[0.5px] whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727" }}>Email</span>
            </div>
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="absolute bottom-0 w-full outline-none bg-white px-[33px]"
              style={{ height: "77px", border: "2px solid #0B1727", borderRadius: "20px", fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: "16px", color: "#0B1727", letterSpacing: "0.5px" }}
            />
          </div>
          {/* Password */}
          <div className="relative mb-[16px]" style={{ height: "96px" }}>
            <div className="absolute z-10 bg-white flex items-center justify-center" style={{ left: "33px", top: 0, padding: "10px 22px", borderRadius: "4px" }}>
              <span className="text-[16px] leading-[24px] tracking-[0.5px] whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727" }}>Password</span>
            </div>
            <input
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="absolute bottom-0 w-full outline-none bg-white px-[33px]"
              style={{ height: "77px", border: "2px solid #0B1727", borderRadius: "20px", fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: "16px", color: "#0B1727", letterSpacing: "0.5px" }}
            />
          </div>
          {/* Remember + Forgot */}
          <div className="flex items-center justify-between mb-[32px]" style={{ paddingLeft: "14px" }}>
            <label className="flex items-center gap-[8px] cursor-pointer">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="w-[24px] h-[24px] cursor-pointer accent-[#0B1727]" />
              <span className="text-[16px] leading-[24px] tracking-[0.5px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#0B1727" }}>Remember for 30days</span>
            </label>
            <button type="button" className="italic" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "24px", letterSpacing: "0.5px", color: "#0B1727", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
              Forgot Password
            </button>
          </div>
          {/* Log In button */}
          <button type="submit" className="w-full flex items-center justify-center overflow-hidden" style={{ height: "77px", background: "#0B1727", borderRadius: "20px", border: "none", cursor: "pointer", marginBottom: "24px" }}>
            <span className="text-[20px] leading-[24px] tracking-[0.5px] whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#FFFFFF" }}>Log In</span>
          </button>
        </form>

        <p className="text-center text-[16px] leading-[24px] tracking-[0.5px] m-0" style={{ fontFamily: "'Montserrat', sans-serif", color: "#0B1727" }}>
          <span style={{ fontWeight: 300 }}>{"Don't have an account? "}</span>
          <a href="/signup" style={{ fontWeight: 600, fontStyle: "italic" }}>Register Now</a>
        </p>
      </motion.div>

      {/* ── Mobile: form ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden flex flex-col px-6 py-8 gap-6"
      >
        <div className="flex flex-col gap-2">
          <h1 className="m-0 text-[26px] leading-[1.2]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#0B1727" }}>
            Your Next Connection Awaits You!
          </h1>
          <p className="m-0 text-[14px] leading-[20px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727", opacity: 0.7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Email */}
          <div className="relative" style={{ height: "84px" }}>
            <div className="absolute z-10 bg-white px-4 py-2" style={{ left: "24px", top: 0, borderRadius: "4px" }}>
              <span className="text-[14px] whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727" }}>Email</span>
            </div>
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="absolute bottom-0 w-full outline-none bg-white"
              style={{ height: "64px", border: "2px solid #0B1727", borderRadius: "16px", paddingLeft: "24px", paddingRight: "16px", fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: "15px", color: "#0B1727" }}
            />
          </div>
          {/* Password */}
          <div className="relative" style={{ height: "84px" }}>
            <div className="absolute z-10 bg-white px-4 py-2" style={{ left: "24px", top: 0, borderRadius: "4px" }}>
              <span className="text-[14px] whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727" }}>Password</span>
            </div>
            <input
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="absolute bottom-0 w-full outline-none bg-white"
              style={{ height: "64px", border: "2px solid #0B1727", borderRadius: "16px", paddingLeft: "24px", paddingRight: "16px", fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: "15px", color: "#0B1727" }}
            />
          </div>
          {/* Remember + Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="w-5 h-5 cursor-pointer accent-[#0B1727]" />
              <span className="text-[13px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#0B1727" }}>Remember for 30 days</span>
            </label>
            <button type="button" className="italic text-[13px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#0B1727", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
              Forgot Password
            </button>
          </div>
          {/* Log In */}
          <button type="submit" className="w-full flex items-center justify-center" style={{ height: "58px", background: "#0B1727", borderRadius: "16px", border: "none", cursor: "pointer" }}>
            <span className="text-[17px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#FFFFFF" }}>Log In</span>
          </button>
        </form>

        <p className="text-center text-[14px] m-0" style={{ fontFamily: "'Montserrat', sans-serif", color: "#0B1727" }}>
          <span style={{ fontWeight: 300 }}>{"Don't have an account? "}</span>
          <a href="/signup" style={{ fontWeight: 600, fontStyle: "italic", color: "#0B1727" }}>Register Now</a>
        </p>

        <p className="text-center text-[14px] m-0" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#0B1727", fontStyle: "italic" }}>
          Need Help?
        </p>
      </motion.div>
    </div>
  );
}
