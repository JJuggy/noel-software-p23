"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const imgTexture     = "/assets/80c94f9fec1dcc78be1c4a2471fb0c1e176bba42.png";
const imgLogoPattern = "/assets/d4648cab6c54298ce57e3ababf3573f3f6a1eeaf.svg";
const imgStep1       = "/assets/898f0d5fb99d45d897003d0a364ec28483230fc8.svg";
const imgStep2       = "/assets/ffc629b1a207d7bdad102b489ef577aea5d18d4d.svg";
const imgStep3       = "/assets/182ca996c4f52a8009f78e103169333d7ecdf710.svg";

function FloatingInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative" style={{ height: "76px" }}>
      {/* Floating label */}
      <div
        className="absolute z-10 bg-white"
        style={{ left: "33px", top: 0, padding: "10px 14px" }}
      >
        <span
          className="text-[16px] leading-[24px] tracking-[0.5px] whitespace-nowrap"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: "#0B1727" }}
        >
          {label}
        </span>
      </div>
      {/* Input */}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="absolute bottom-0 w-full outline-none bg-white"
        style={{
          height: "57px",
          border: "2px solid #0B1727",
          borderRadius: "20px",
          opacity: 0.8,
          paddingLeft: "47px",
          paddingRight: "20px",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          fontSize: "16px",
          color: "#0B1727",
        }}
      />
      {/* Placeholder colour override via inline — placeholder styled via CSS class below */}
    </div>
  );
}

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName]               = useState("");
  const [email, setEmail]                     = useState("");
  const [password, setPassword]               = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleProceed(e: React.FormEvent) {
    e.preventDefault();
    router.push("/signup/step2");
  }

  const steps = [
    { src: imgStep1, num: "1", active: true },
    { src: imgStep2, num: "2", active: false },
    { src: imgStep3, num: "3", active: false },
  ];

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-white">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('${imgTexture}')`,
          backgroundSize: "1024px 1024px",
          opacity: 0.12,
        }}
      />

      {/* ── Desktop: teal accent bar ── */}
      <div
        className="hidden md:block absolute z-10"
        style={{
          left: "540px",
          top: "-13px",
          width: "20px",
          height: "961px",
          background: "#2ABFBB",
          borderRadius: "0 10px 30px 0",
        }}
      />

      {/* ── Desktop: left dark panel ── */}
      <div
        className="hidden md:block absolute left-0 top-0 overflow-hidden"
        style={{
          width: "535px",
          height: "100%",
          background: "#0B1727",
          boxShadow: "6px 0px 5px #0B1C33",
        }}
      >
        {/* Heading + subtitle + steps */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute flex flex-col"
          style={{ left: "122px", top: "142px", width: "308px" }}
        >
          <h2
            className="m-0 text-[36px] leading-[1.2]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#F3F0E9" }}
          >
            {"Let's get\nyou started!"}
          </h2>
          <p
            className="m-0 text-[13px] leading-[15px] tracking-[0.5px] mt-[15px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#F3F0E9" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>

          {/* Step progress */}
          <div className="flex flex-col mt-[32px] gap-[8px]">
            <div className="flex items-center gap-[10px]">
              {steps.map((step) => (
                <div key={step.num} className="relative" style={{ width: "30.7px", height: "30.7px" }}>
                  <img src={step.src} alt="" className="absolute inset-0 w-full h-full" />
                  <span
                    className="absolute inset-0 flex items-center justify-center text-[12px]"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      color: step.active ? "#0B1727" : "#F3F0E9",
                    }}
                  >
                    {step.num}
                  </span>
                </div>
              ))}
            </div>
            <span
              className="text-[13px] leading-[24px] tracking-[0.5px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: "#F3F0E9" }}
            >
              Step 1/3
            </span>
          </div>
        </motion.div>

        {/* Logo pattern band */}
        <div
          className="absolute"
          style={{ left: "-12px", top: "623px", width: "557px", height: "91px" }}
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
            <span style={{ fontWeight: 300 }}>{"Already have an account? "}</span>
            <a
              href="/login"
              style={{ fontWeight: 600, fontStyle: "italic", color: "#F3F0E9", textDecoration: "none" }}
            >
              Sign In
            </a>
          </p>
          <p
            className="m-0 text-[16px] leading-[24px] tracking-[0.5px] italic"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#F3F0E9" }}
          >
            Need Help?
          </p>
        </div>
      </div>

      {/* ── Desktop: right form panel ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block absolute"
        style={{ left: "736px", top: "37px", width: "466px" }}
      >
        {/* Heading */}
        <div className="flex flex-col gap-[5px] mb-[32px]">
          <h1
            className="m-0 text-[36px] leading-[1.2]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#0B1727" }}
          >
            First, Account Setup
          </h1>
          <p
            className="m-0 text-[20px] leading-[24px] tracking-[0.5px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727" }}
          >
            Setup the account and joined like minds in few steps.
          </p>
        </div>

        <form onSubmit={handleProceed} className="flex flex-col gap-[23px]">
          <FloatingInput label="Full Name" placeholder="Name Surname" value={fullName} onChange={setFullName} />
          <FloatingInput label="Email" type="email" placeholder="username@gmail.com" value={email} onChange={setEmail} />
          <FloatingInput label="Password" type="password" value={password} onChange={setPassword} />
          <FloatingInput label="Confirm Password" type="password" value={confirmPassword} onChange={setConfirmPassword} />

          {/* Proceed button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center overflow-hidden mt-[8px]"
            style={{ height: "77px", background: "#2ABFBB", borderRadius: "20px", border: "none", cursor: "pointer" }}
          >
            <span
              className="text-[20px] leading-[24px] tracking-[0.5px] whitespace-nowrap"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#FFFFFF" }}
            >
              Proceed
            </span>
          </button>
        </form>
      </motion.div>

      {/* ── Mobile: top dark header ── */}
      <div
        className="md:hidden relative overflow-hidden flex flex-col justify-end px-6 pb-6"
        style={{ background: "#0B1727", minHeight: "200px" }}
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
            {"Let's get you started!"}
          </h2>
          <p className="m-0 text-[13px] leading-[18px] tracking-[0.3px] mt-2" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#F3F0E9", opacity: 0.7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* Step indicators */}
          <div className="flex items-center gap-[10px] mt-4">
            {steps.map((step) => (
              <div key={step.num} className="relative" style={{ width: "28px", height: "28px" }}>
                <img src={step.src} alt="" className="absolute inset-0 w-full h-full" />
                <span
                  className="absolute inset-0 flex items-center justify-center text-[11px]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: step.active ? "#0B1727" : "#F3F0E9" }}
                >
                  {step.num}
                </span>
              </div>
            ))}
            <span className="text-[12px] ml-1" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: "#F3F0E9" }}>
              Step 1/3
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── Mobile: form ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden flex flex-col px-6 py-8 gap-5"
      >
        <div className="flex flex-col gap-2">
          <h1 className="m-0 text-[26px] leading-[1.2]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#0B1727" }}>
            First, Account Setup
          </h1>
          <p className="m-0 text-[14px] leading-[20px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#0B1727", opacity: 0.7 }}>
            Setup the account and joined like minds in few steps.
          </p>
        </div>

        <form onSubmit={handleProceed} className="flex flex-col gap-4">
          {[
            { label: "Full Name", type: "text", placeholder: "Name Surname", value: fullName, onChange: setFullName },
            { label: "Email", type: "email", placeholder: "username@gmail.com", value: email, onChange: setEmail },
            { label: "Password", type: "password", placeholder: "", value: password, onChange: setPassword },
            { label: "Confirm Password", type: "password", placeholder: "", value: confirmPassword, onChange: setConfirmPassword },
          ].map(({ label, type, placeholder, value, onChange }) => (
            <div key={label} className="relative" style={{ height: "84px" }}>
              <div className="absolute z-10 bg-white px-4 py-2" style={{ left: "24px", top: 0, borderRadius: "4px" }}>
                <span className="text-[14px] whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: "#0B1727" }}>{label}</span>
              </div>
              <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="absolute bottom-0 w-full outline-none bg-white"
                style={{ height: "64px", border: "2px solid #0B1727", borderRadius: "16px", paddingLeft: "24px", paddingRight: "16px", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "15px", color: "#0B1727" }}
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full flex items-center justify-center mt-2"
            style={{ height: "58px", background: "#2ABFBB", borderRadius: "16px", border: "none", cursor: "pointer" }}
          >
            <span className="text-[17px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#FFFFFF" }}>Proceed</span>
          </button>
        </form>

        <p className="text-center text-[14px] m-0" style={{ fontFamily: "'Montserrat', sans-serif", color: "#0B1727" }}>
          <span style={{ fontWeight: 300 }}>{"Already have an account? "}</span>
          <a href="/login" style={{ fontWeight: 600, fontStyle: "italic", color: "#0B1727" }}>Sign In</a>
        </p>

        <p className="text-center text-[14px] m-0" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#0B1727", fontStyle: "italic" }}>
          Need Help?
        </p>
      </motion.div>

      <style>{`
        input::placeholder {
          color: #8C9AA6;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
