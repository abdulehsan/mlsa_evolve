import { useNavigate } from "react-router-dom";

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Georgia', serif",
    color: "#e8e8e8",
    padding: "2rem",
    textAlign: "center",
  },
  badge: {
    fontSize: "0.7rem",
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    color: "#c9a84c",
    marginBottom: "1.5rem",
    borderTop: "1px solid #c9a84c",
    borderBottom: "1px solid #c9a84c",
    padding: "0.4rem 1.2rem",
  },
  headline: {
    fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
    fontWeight: "300",
    lineHeight: "1.1",
    letterSpacing: "-0.02em",
    margin: "0 0 1.5rem 0",
    color: "#ffffff",
  },
  accent: {
    color: "#c9a84c",
    fontStyle: "italic",
  },
  sub: {
    fontSize: "1.05rem",
    color: "#9a9a9a",
    maxWidth: "500px",
    lineHeight: "1.7",
    marginBottom: "3rem",
    fontFamily: "'Georgia', serif",
  },
  btnRow: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  btnPrimary: {
    background: "#c9a84c",
    color: "#0f0f0f",
    border: "none",
    padding: "0.85rem 2.2rem",
    fontSize: "0.85rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    fontFamily: "'Georgia', serif",
    cursor: "pointer",
    fontWeight: "700",
    transition: "opacity 0.2s",
  },
  btnSecondary: {
    background: "transparent",
    color: "#e8e8e8",
    border: "1px solid #444",
    padding: "0.85rem 2.2rem",
    fontSize: "0.85rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    fontFamily: "'Georgia', serif",
    cursor: "pointer",
    transition: "border-color 0.2s",
  },
  stats: {
    display: "flex",
    gap: "3rem",
    marginTop: "5rem",
    paddingTop: "2.5rem",
    borderTop: "1px solid #2a2a2a",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  statItem: {
    textAlign: "center",
  },
  statNum: {
    fontSize: "2rem",
    fontWeight: "300",
    color: "#c9a84c",
    display: "block",
  },
  statLabel: {
    fontSize: "0.72rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#555",
    marginTop: "0.3rem",
  },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <p style={styles.badge}>Est. 2024 — Digital Excellence</p>
      <h1 style={styles.headline}>
        We Build Things <br />
        <span style={styles.accent}>Worth Noticing</span>
      </h1>
      <p style={styles.sub}>
        A boutique studio crafting digital experiences for brands that refuse to
        blend in. Strategy, design, and technology — unified.
      </p>
      <div style={styles.btnRow}>
        <button style={styles.btnPrimary} onClick={() => navigate("/services")}>
          Our Services
        </button>
        <button style={styles.btnSecondary} onClick={() => navigate("/about")}>
          About Us
        </button>
      </div>
      <div style={styles.stats}>
        {[["120+", "Projects"], ["8", "Years"], ["40+", "Clients"], ["99%", "Retention"]].map(
          ([num, label]) => (
            <div key={label} style={styles.statItem}>
              <span style={styles.statNum}>{num}</span>
              <span style={styles.statLabel}>{label}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
