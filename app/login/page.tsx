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
    <div className="relative w-screen h-screen overflow-hidden bg-white">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('${imgTexture}')`,
          backgroundSize: "1024px 1024px",
          opacity: 0.12,
        }}
      />

      {/* Teal accent bar — sits between left panel and right */}
      <div
        className="absolute z-10"
        style={{
          left: "540px",
          top: "-16px",
          width: "20px",
          height: "961px",
          background: "#2ABFBB",
          borderRadius: "0 10px 30px 0",
        }}
      />

      {/* Left dark panel */}
      <div
        className="absolute left-0 top-0 overflow-hidden"
        style={{
          width: "535px",
          height: "100%",
          background: "#0B1727",
          boxShadow: "6px 0px 5px #0B1C33",
        }}
      >
        {/* Welcome text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute flex flex-col gap-[10px]"
          style={{ left: "122px", top: "151px", width: "308px" }}
        >
          <h2
            className="m-0 text-[36px] leading-[1.2]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#F3F0E9" }}
          >
            Welcome Back!
          </h2>
          <p
            className="m-0 text-[13px] leading-[15px] tracking-[0.5px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#F3F0E9" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </motion.div>

        {/* Logo pattern band */}
        <div
          className="absolute"
          style={{ left: "-12px", bottom: "80px", width: "557px", height: "91px" }}
        >
          <img src={imgLogoPattern} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Bottom links */}
        <div
          className="absolute flex flex-col gap-[1px]"
          style={{ left: "116px", bottom: "20px", width: "280px" }}
        >
          <p
            className="m-0 text-[16px] leading-[24px] tracking-[0.5px]"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#F3F0E9" }}
          >
            <span style={{ fontWeight: 300 }}>{"Don't have an account? "}</span>
            <a href="/signup" style={{ fontWeight: 600, fontStyle: "italic", color: "#F3F0E9", textDecoration: "none" }}>Sign Up</a>
          </p>
          <p
            className="m-0 text-[16px] leading-[24px] tracking-[0.5px] italic"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#F3F0E9" }}
          >
            Need Help?
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute"
        style={{ left: "774px", top: "61px", width: "466px" }}
      >
        {/* Headline */}
        <div className="flex flex-col gap-[10px] mb-[44px]">
          <h1
            className="m-0 text-[36px] leading-[1.2]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#0B1727" }}
          >
            Your Next Connection Awaits You!
          </h1>
          <p
            className="m-0 text-[20px] leading-[24px] tracking-[0.5px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-0">
          {/* Email field */}
          <div className="relative mb-[24px]" style={{ height: "96px" }}>
            {/* Floating label */}
            <div
              className="absolute z-10 bg-white flex items-center justify-center"
              style={{ left: "33px", top: 0, padding: "10px 22px", borderRadius: "4px" }}
            >
              <span
                className="text-[16px] leading-[24px] tracking-[0.5px] whitespace-nowrap"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727" }}
              >
                Email
              </span>
            </div>
            {/* Input box */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="absolute bottom-0 w-full outline-none bg-white px-[33px]"
              style={{
                height: "77px",
                border: "2px solid #0B1727",
                borderRadius: "20px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#0B1727",
                letterSpacing: "0.5px",
              }}
            />
          </div>

          {/* Password field */}
          <div className="relative mb-[16px]" style={{ height: "96px" }}>
            {/* Floating label */}
            <div
              className="absolute z-10 bg-white flex items-center justify-center"
              style={{ left: "33px", top: 0, padding: "10px 22px", borderRadius: "4px" }}
            >
              <span
                className="text-[16px] leading-[24px] tracking-[0.5px] whitespace-nowrap"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727" }}
              >
                Password
              </span>
            </div>
            {/* Input box */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="absolute bottom-0 w-full outline-none bg-white px-[33px]"
              style={{
                height: "77px",
                border: "2px solid #0B1727",
                borderRadius: "20px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#0B1727",
                letterSpacing: "0.5px",
              }}
            />
          </div>

          {/* Remember + Forgot row */}
          <div className="flex items-center justify-between mb-[32px]" style={{ paddingLeft: "14px" }}>
            <label className="flex items-center gap-[8px] cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-[24px] h-[24px] cursor-pointer accent-[#0B1727]"
              />
              <span
                className="text-[16px] leading-[24px] tracking-[0.5px]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#0B1727" }}
              >
                Remember for 30days
              </span>
            </label>
            <button
              type="button"
              className="italic"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0.5px",
                color: "#0B1727",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Forgot Password
            </button>
          </div>

          {/* Log In button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center overflow-hidden"
            style={{
              height: "77px",
              background: "#0B1727",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              marginBottom: "24px",
            }}
          >
            <span
              className="text-[20px] leading-[24px] tracking-[0.5px] whitespace-nowrap"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#FFFFFF" }}
            >
              Log In
            </span>
          </button>
        </form>

        {/* Register link */}
        <p
          className="text-center text-[16px] leading-[24px] tracking-[0.5px] m-0"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#0B1727" }}
        >
          <span style={{ fontWeight: 300 }}>{"Don't have an account? "}</span>
          <a  href="/signup"  style={{ fontWeight: 600, fontStyle: "italic" }}>Register Now</a>
        </p>
      </motion.div>
    </div>
  );
}
