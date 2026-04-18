const styles = {
  page: {
    minHeight: "100vh",
    background: "#0a0a0a",
    fontFamily: "'Georgia', serif",
    color: "#e8e8e8",
    padding: "6rem 2rem",
  },
  inner: {
    maxWidth: "960px",
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
    margin: "0 0 1rem 0",
    color: "#ffffff",
  },
  sub: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "4rem",
    maxWidth: "560px",
    lineHeight: "1.7",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1px",
    background: "#1a1a1a",
    border: "1px solid #1a1a1a",
  },
  card: {
    background: "#0a0a0a",
    padding: "2.5rem",
    transition: "background 0.25s",
    cursor: "default",
  },
  cardHover: {
    background: "#111",
  },
  iconBox: {
    width: "44px",
    height: "44px",
    border: "1px solid #2a2a2a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.3rem",
    marginBottom: "1.5rem",
    color: "#c9a84c",
  },
  cardNum: {
    fontSize: "0.65rem",
    letterSpacing: "0.2em",
    color: "#333",
    marginBottom: "0.8rem",
    display: "block",
    fontFamily: "monospace",
  },
  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#e8e8e8",
    marginBottom: "0.8rem",
    lineHeight: "1.3",
  },
  cardText: {
    fontSize: "0.88rem",
    color: "#555",
    lineHeight: "1.7",
    marginBottom: "1.5rem",
  },
  tag: {
    display: "inline-block",
    fontSize: "0.65rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#c9a84c",
    border: "1px solid #2a1a00",
    padding: "0.25rem 0.6rem",
    marginRight: "0.4rem",
    marginBottom: "0.4rem",
    background: "#110d00",
  },
  cta: {
    marginTop: "5rem",
    padding: "3rem",
    border: "1px solid #1e1e1e",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "1.5rem",
    background: "#0d0d0d",
  },
  ctaText: {
    fontSize: "1.3rem",
    fontWeight: "300",
    color: "#ccc",
    letterSpacing: "-0.01em",
  },
  ctaBtn: {
    background: "#c9a84c",
    color: "#0a0a0a",
    border: "none",
    padding: "0.85rem 2rem",
    fontSize: "0.8rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    fontFamily: "'Georgia', serif",
    cursor: "pointer",
    fontWeight: "700",
  },
};

const services = [
  {
    icon: "◈",
    title: "Brand Strategy",
    text: "Positioning, naming, messaging frameworks — the foundation before anything is designed.",
    tags: ["Strategy", "Research", "Positioning"],
  },
  {
    icon: "⬡",
    title: "UI/UX Design",
    text: "Interfaces that balance aesthetic precision with intuitive user flows and interaction logic.",
    tags: ["Figma", "Prototyping", "User Research"],
  },
  {
    icon: "⟨/⟩",
    title: "Web Development",
    text: "Production-grade React applications, performant backends, and scalable infrastructure.",
    tags: ["React", "Node", "PostgreSQL"],
  },
  {
    icon: "◎",
    title: "Motion & Animation",
    text: "Purposeful motion that elevates interfaces without sacrificing performance.",
    tags: ["GSAP", "Framer", "CSS"],
  },
  {
    icon: "⊕",
    title: "AI Integration",
    text: "LLM-powered features, RAG pipelines, and intelligent automation baked into your product.",
    tags: ["OpenAI", "LangChain", "Vectors"],
  },
  {
    icon: "◰",
    title: "Digital Consulting",
    text: "Audits, roadmaps, and tech strategy for teams navigating digital transformation.",
    tags: ["Audit", "Roadmap", "Advisory"],
  },
];

export default function Services() {
  return (
    <div style={styles.page}>
      <div style={styles.inner}>
        <span style={styles.eyebrow}>What We Do</span>
        <h1 style={styles.heading}>Services</h1>
        <p style={styles.sub}>
          We offer a focused range of disciplines — enough to cover the full
          digital lifecycle, narrow enough to do each one exceptionally well.
        </p>

        <div style={styles.grid}>
          {services.map((s, i) => (
            <div key={s.title} style={styles.card}>
              <div style={styles.iconBox}>{s.icon}</div>
              <span style={styles.cardNum}>{String(i + 1).padStart(2, "0")}</span>
              <div style={styles.cardTitle}>{s.title}</div>
              <div style={styles.cardText}>{s.text}</div>
              <div>
                {s.tags.map((t) => (
                  <span key={t} style={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.cta}>
          <span style={styles.ctaText}>Not sure where to start?</span>
          <button style={styles.ctaBtn}>Book a Free Call</button>
        </div>
      </div>
    </div>
  );
}
