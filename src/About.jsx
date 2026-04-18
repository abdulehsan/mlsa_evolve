const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f0f0f",
    fontFamily: "'Georgia', serif",
    color: "#e8e8e8",
    padding: "6rem 2rem",
  },
  inner: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  eyebrow: {
    fontSize: "0.7rem",
    letterSpacing: "0.35em",
    textTransform: "uppercase",
    color: "#c9a84c",
    marginBottom: "1.5rem",
    display: "block",
  },
  heading: {
    fontSize: "clamp(2rem, 5vw, 3.8rem)",
    fontWeight: "300",
    lineHeight: "1.15",
    letterSpacing: "-0.02em",
    margin: "0 0 2.5rem 0",
    color: "#ffffff",
  },
  divider: {
    width: "48px",
    height: "1px",
    background: "#c9a84c",
    marginBottom: "2.5rem",
  },
  lead: {
    fontSize: "1.15rem",
    color: "#b0b0b0",
    lineHeight: "1.8",
    marginBottom: "2rem",
    maxWidth: "680px",
  },
  body: {
    fontSize: "0.95rem",
    color: "#777",
    lineHeight: "1.9",
    marginBottom: "1.5rem",
    maxWidth: "680px",
  },
  teamSection: {
    marginTop: "5rem",
    paddingTop: "4rem",
    borderTop: "1px solid #1e1e1e",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "2rem",
    marginTop: "2.5rem",
  },
  card: {
    background: "#141414",
    border: "1px solid #1e1e1e",
    padding: "1.8rem",
  },
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #c9a84c, #8b6914)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    marginBottom: "1.2rem",
    color: "#0f0f0f",
    fontWeight: "700",
  },
  cardName: {
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#e8e8e8",
    marginBottom: "0.3rem",
  },
  cardRole: {
    fontSize: "0.72rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#555",
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "1.5rem",
    marginTop: "2.5rem",
  },
  valueItem: {
    borderLeft: "2px solid #c9a84c",
    paddingLeft: "1.2rem",
  },
  valueTitle: {
    fontSize: "0.85rem",
    fontWeight: "700",
    color: "#c9a84c",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: "0.5rem",
  },
  valueText: {
    fontSize: "0.88rem",
    color: "#666",
    lineHeight: "1.6",
  },
};

const team = [
  { name: "Sara Malik", role: "Founder & CEO", initial: "S" },
  { name: "James Park", role: "Creative Director", initial: "J" },
  { name: "Nadia Osei", role: "Lead Engineer", initial: "N" },
  { name: "Omar Reyes", role: "Strategy Lead", initial: "O" },
];

const values = [
  {
    title: "Craft",
    text: "Every pixel, every line of code is deliberate. We don't ship mediocrity.",
  },
  {
    title: "Clarity",
    text: "Complex problems deserve simple, elegant solutions.",
  },
  {
    title: "Candor",
    text: "Honest partnerships. No fluff, no jargon — just results.",
  },
  {
    title: "Curiosity",
    text: "We stay at the edge of what's possible, always learning.",
  },
];

export default function About() {
  return (
    <div style={styles.page}>
      <div style={styles.inner}>
        <span style={styles.eyebrow}>Our Story</span>
        <h1 style={styles.heading}>
          Built by People Who <br />
          Give a Damn
        </h1>
        <div style={styles.divider} />
        <p style={styles.lead}>
          We started as a two-person freelance duo in 2016. Today we're a
          boutique studio of 12 — still small enough to care deeply about every
          client.
        </p>
        <p style={styles.body}>
          Our work sits at the intersection of design and engineering. We don't
          believe in handing off between departments — every project is tackled
          by a tightly integrated team that speaks both languages fluently.
        </p>
        <p style={styles.body}>
          We've worked with venture-backed startups, legacy brands undergoing
          digital transformation, and everything in between. The common thread:
          clients who want a real partner, not a vendor.
        </p>

        {/* Team */}
        <div style={styles.teamSection}>
          <span style={styles.eyebrow}>The Group</span>
          <h2 style={{ ...styles.heading, fontSize: "2rem" }}>
            Faces Behind the Work
          </h2>
          <div style={styles.teamGrid}>
            {team.map((m) => (
              <div key={m.name} style={styles.card}>
                <div style={styles.avatar}>{m.initial}</div>
                <div style={styles.cardName}>{m.name}</div>
                <div style={styles.cardRole}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div style={{ ...styles.teamSection }}>
          <span style={styles.eyebrow}>What We Stand For</span>
          <h2 style={{ ...styles.heading, fontSize: "2rem" }}>Our Values</h2>
          <div style={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} style={styles.valueItem}>
                <div style={styles.valueTitle}>{v.title}</div>
                <div style={styles.valueText}>{v.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
