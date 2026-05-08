"use client";

import { motion } from "framer-motion";

// ─── Assets ──────────────────────────────────────────────────────────────────
const imgThabo = "/assets/770f1c638d497fa09bdce76e6acef00764c9f930.png";
const imgAmina = "/assets/21a425451e1e140fd362223855aa33b6a82eb76b.png";
const imgSubtract = "/assets/5f1773fb0d2599a66f8a1339c25195287c5bd71d.svg";
const imgLocation = "/assets/d5467f78a642247698cef5f8c80453d4a1ebc50b.svg";
const imgStar = "/assets/6ff79375edbc913a162682b9342aca8f6f4bf674.svg";

// ─── Data ─────────────────────────────────────────────────────────────────────
const CHATS = [
  {
    name: "Thabo Molefe",
    preview: "Yes, please. Great for client referrals.",
    dotColor: "#22c55e",
    photo: imgThabo,
    photoBg: "#fde8cc",
  },
  {
    name: "Amina Diop",
    preview: "Thank you for the consideration.",
    dotColor: "#f97316",
    photo: imgAmina,
    photoBg: "#b972c4",
  },
];

const NETWORKS = [
  {
    name: "Thabo Molefe",
    location: "Johannesburg, South Africa",
    title: "CFO",
    industry: "Renewable Energy",
    rating: "4.6",
    photo: imgThabo,
    photoBg: "#fdf7e0",
  },
  {
    name: "Amina Diop",
    location: "Dakar, Senegal",
    title: "COO",
    industry: "Francophone Africa Startups",
    rating: "4.6",
    photo: imgAmina,
    photoBg: "#b972c4",
  },
  {
    name: "Amina Diop",
    location: "Dakar, Senegal",
    title: "COO",
    industry: "Francophone Africa Startups",
    rating: "4.6",
    photo: imgAmina,
    photoBg: "#b972c4",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ChatIllustration() {
  return (
    <div className="relative" style={{ width: "160px", height: "120px" }}>
      <div
        className="absolute"
        style={{
          top: 0,
          right: 0,
          width: "90px",
          height: "62px",
          borderRadius: "16px 16px 4px 16px",
          background: "#4db8f0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "6px",
          padding: "12px 14px",
        }}
      >
        {[40, 32, 20].map((w, i) => (
          <div
            key={i}
            style={{
              height: "5px",
              width: `${w}px`,
              borderRadius: "3px",
              background: "rgba(255,255,255,0.85)",
            }}
          />
        ))}
      </div>
      <div
        className="absolute"
        style={{
          top: "38px",
          left: "0px",
          width: "80px",
          height: "56px",
          borderRadius: "16px 16px 16px 4px",
          background: "#9b7dd4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "6px",
          padding: "12px 14px",
        }}
      >
        {[36, 26].map((w, i) => (
          <div
            key={i}
            style={{
              height: "5px",
              width: `${w}px`,
              borderRadius: "3px",
              background: "rgba(255,255,255,0.8)",
            }}
          />
        ))}
      </div>
      <div
        className="absolute"
        style={{
          bottom: 0,
          right: "10px",
          width: "70px",
          height: "50px",
          borderRadius: "16px 16px 4px 16px",
          background: "#2d5a6b",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "6px",
          padding: "10px 12px",
        }}
      >
        <div
          style={{
            height: "5px",
            width: "30px",
            borderRadius: "3px",
            background: "rgba(255,255,255,0.7)",
          }}
        />
        <div
          style={{
            height: "5px",
            width: "22px",
            borderRadius: "3px",
            background: "rgba(255,255,255,0.5)",
          }}
        />
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  increase: string;
  bg: string;
  style?: React.CSSProperties;
  delay?: number;
}

function StatCard({
  label,
  value,
  increase,
  bg,
  style,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        background: bg,
        borderRadius: "16px",
        padding: "20px 22px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          fontSize: "13px",
          color: "#0b1727",
          lineHeight: "1.3",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 800,
          fontSize: "42px",
          color: "#0b1727",
          lineHeight: "1",
          marginTop: "6px",
        }}
      >
        {value}
      </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            fontSize: "11px",
            color: "#6b7a8d",
          }}
        >
          Increase this week
        </span>
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "13px",
            color: "#22c55e",
          }}
        >
          {increase}&nbsp;&#x2197;
        </span>
      </div>
    </motion.div>
  );
}

function AllNetworksPanel({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        flex: 1,
        position: "relative",
        filter: "drop-shadow(0px 4px 16px rgba(0,0,0,0.10))",
      }}
    >
      <img
        src={imgSubtract}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          padding: "24px 36px 24px 24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: "11px",
                color: "#6b7a8d",
                margin: 0,
              }}
            >
              Select Network to message
            </p>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: "22px",
                color: "#0b1727",
                margin: "2px 0 0",
              }}
            >
              All Networks
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#e8f7f2",
                borderRadius: "50px",
                padding: "10px 18px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "#aab4c0",
                }}
              >
                Search
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M23 4v6h-6"
                  stroke="#2abfbb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 20v-6h6"
                  stroke="#2abfbb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
                  stroke="#2abfbb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "#f5f6fa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="#0b1727"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div style={{ height: "1px", background: "#e8eaed" }} />
        {NETWORKS.map((person, i) => (
          <div key={i}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "14px 0",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "12px",
                  background: person.photoBg,
                  flexShrink: 0,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={person.photo}
                  alt={person.name}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    height: "88px",
                    width: "auto",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#0b1727",
                    }}
                  >
                    {person.name}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "13px",
                        color: "#0b1727",
                      }}
                    >
                      {person.rating}
                    </span>
                    <img
                      src={imgStar}
                      alt=""
                      style={{ width: "16px", height: "16px" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    marginTop: "2px",
                  }}
                >
                  <img
                    src={imgLocation}
                    alt=""
                    style={{ width: "12px", height: "12px", opacity: 0.5 }}
                  />
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 400,
                      fontSize: "11px",
                      color: "#6b7a8d",
                    }}
                  >
                    {person.location}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "24px", marginTop: "8px" }}>
                  <div>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 400,
                        fontSize: "10px",
                        color: "#2abfbb",
                        display: "block",
                      }}
                    >
                      Title
                    </span>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: "12px",
                        color: "#0b1727",
                      }}
                    >
                      {person.title}
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 400,
                        fontSize: "10px",
                        color: "#2abfbb",
                        display: "block",
                      }}
                    >
                      Industry
                    </span>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: "12px",
                        color: "#0b1727",
                      }}
                    >
                      {person.industry}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {i < NETWORKS.length - 1 && (
              <div style={{ height: "1px", background: "#e8eaed" }} />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function RecentChatsPanel({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        flex: 1,
        background: "#ffffff",
        borderRadius: "20px",
        boxShadow: "0px 2px 12px rgba(0,0,0,0.07)",
        padding: "20px 20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "0",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#0b1727",
          }}
        >
          Your Most Recent <strong>Chats</strong>
        </span>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#0b1727",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Search row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: "#f5f6fa",
          borderRadius: "50px",
          padding: "10px 16px",
          marginBottom: "16px",
        }}
      >
        <span
          style={{
            flex: 1,
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            color: "#aab4c0",
            fontStyle: "italic",
          }}
        >
          Input name
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          style={{ cursor: "pointer", flexShrink: 0 }}
        >
          <path
            d="M23 4v6h-6"
            stroke="#8c9aa6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 20v-6h6"
            stroke="#8c9aa6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
            stroke="#8c9aa6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          style={{ cursor: "pointer", flexShrink: 0 }}
        >
          <path
            d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
            stroke="#8c9aa6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.73 21a2 2 0 0 1-3.46 0"
            stroke="#8c9aa6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Chat rows — plain white with dividers */}
      {CHATS.map((chat, i) => (
        <div key={chat.name}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
              padding: "14px 0",
              cursor: "pointer",
            }}
          >
            {/* Circular avatar */}
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: chat.photoBg,
                flexShrink: 0,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={chat.photo}
                alt={chat.name}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  height: "66px",
                  width: "auto",
                  objectFit: "cover",
                }}
              />
            </div>
            {/* Text block */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#0b1727",
                  display: "block",
                }}
              >
                {chat.name}
              </span>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  color: "#6b7a8d",
                  display: "block",
                  marginTop: "3px",
                }}
              >
                {chat.preview}
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginTop: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "10px",
                    color: "#aab4c0",
                  }}
                >
                  Last chat
                </span>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "10px",
                    color: "#aab4c0",
                    fontStyle: "italic",
                  }}
                >
                  4hrs ago
                </span>
              </div>
            </div>
            {/* Online dot */}
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: chat.dotColor,
                flexShrink: 0,
                marginTop: "6px",
              }}
            />
          </div>
          {i < CHATS.length - 1 && (
            <div style={{ height: "1px", background: "#f0f1f3" }} />
          )}
        </div>
      ))}

      {/* Add a new chat */}
      <button
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: "50px",
          background:
            "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 50%, #9b7dd4 100%)",
          border: "none",
          cursor: "pointer",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          fontSize: "15px",
          color: "#ffffff",
          marginTop: "20px",
        }}
      >
        Add a new chat
      </button>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MessagesPage() {
  return (
    <div
      className="flex flex-col gap-4 p-6 min-h-screen relative"
      style={{ background: "#f5f6fa" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          background: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0px 2px 12px rgba(0,0,0,0.07)",
          height: "180px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "28px",
            top: "28px",
            width: "220px",
          }}
        >
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: "26px",
              color: "#0b1727",
              lineHeight: "1.2",
              margin: 0,
            }}
          >
            Message Stats
          </h1>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              fontSize: "11px",
              color: "#6b7a8d",
              margin: "8px 0 0",
              lineHeight: "1.5",
            }}
          >
            Start building trusted partnerships across Africa with encrypted
            executive messaging.
          </p>
        </div>
        <div className=" right-7 top-5">
          <StatCard
            label="Active Conversations"
            value="525"
            increase="15%"
            bg="#dde8f8"
            delay={0.1}
            style={{
              left: "290px",
              top: "20px",
              width: "190px",
              height: "140px",
            }}
          />
          <StatCard
            label="Read Messages"
            value="525"
            increase="15%"
            bg="#fce8e8"
            delay={0.17}
            style={{
              left: "494px",
              top: "20px",
              width: "190px",
              height: "140px",
            }}
          />
          <StatCard
            label="Unread Messages"
            value="525"
            increase="15%"
            bg="#e0eeec"
            delay={0.24}
            style={{
              left: "698px",
              top: "20px",
              width: "190px",
              height: "140px",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            right: "28px",
            top: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-between",
            height: "140px",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: "48px",
                color: "#0b1727",
                lineHeight: "1",
              }}
            >
              29
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "#6b7a8d",
                  lineHeight: "1.2",
                }}
              >
                Tuesday
              </span>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#0b1727",
                  lineHeight: "1.2",
                }}
              >
                July
              </span>
            </div>
          </div>
          <ChatIllustration />
        </div>
      </motion.div>

      <div
        className="mt-[100px]"
        style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}
      >
        <AllNetworksPanel delay={0.2} />
        <RecentChatsPanel delay={0.28} />
      </div>
    </div>
  );
}
