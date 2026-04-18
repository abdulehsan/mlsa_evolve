import { useState } from "react";

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
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "5rem",
    alignItems: "start",
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
    fontSize: "clamp(2rem, 4vw, 3.2rem)",
    fontWeight: "300",
    lineHeight: "1.15",
    letterSpacing: "-0.02em",
    margin: "0 0 1.5rem 0",
    color: "#ffffff",
  },
  body: {
    fontSize: "0.9rem",
    color: "#666",
    lineHeight: "1.8",
    marginBottom: "2.5rem",
  },
  infoItem: {
    marginBottom: "1.5rem",
    paddingBottom: "1.5rem",
    borderBottom: "1px solid #1a1a1a",
  },
  infoLabel: {
    fontSize: "0.65rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#444",
    marginBottom: "0.4rem",
    display: "block",
  },
  infoValue: {
    fontSize: "0.95rem",
    color: "#bbb",
  },
  formGroup: {
    marginBottom: "1.5rem",
  },
  label: {
    display: "block",
    fontSize: "0.7rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#555",
    marginBottom: "0.6rem",
  },
  input: {
    width: "100%",
    background: "#111",
    border: "1px solid #1e1e1e",
    borderRadius: "0",
    padding: "0.85rem 1rem",
    fontSize: "0.9rem",
    color: "#e8e8e8",
    fontFamily: "'Georgia', serif",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  },
  textarea: {
    width: "100%",
    background: "#111",
    border: "1px solid #1e1e1e",
    borderRadius: "0",
    padding: "0.85rem 1rem",
    fontSize: "0.9rem",
    color: "#e8e8e8",
    fontFamily: "'Georgia', serif",
    outline: "none",
    boxSizing: "border-box",
    resize: "vertical",
    minHeight: "130px",
    transition: "border-color 0.2s",
  },
  select: {
    width: "100%",
    background: "#111",
    border: "1px solid #1e1e1e",
    borderRadius: "0",
    padding: "0.85rem 1rem",
    fontSize: "0.9rem",
    color: "#e8e8e8",
    fontFamily: "'Georgia', serif",
    outline: "none",
    boxSizing: "border-box",
    appearance: "none",
  },
  btn: {
    width: "100%",
    background: "#c9a84c",
    color: "#0f0f0f",
    border: "none",
    padding: "1rem",
    fontSize: "0.8rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    fontFamily: "'Georgia', serif",
    cursor: "pointer",
    fontWeight: "700",
    marginTop: "0.5rem",
  },
  successBox: {
    background: "#0d1a0d",
    border: "1px solid #1a4a1a",
    padding: "1.5rem",
    marginTop: "1rem",
    textAlign: "center",
  },
  successText: {
    color: "#5a9a5a",
    fontSize: "0.9rem",
    letterSpacing: "0.05em",
  },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  };

  return (
    <div style={styles.page}>
      <div style={styles.inner}>
        {/* Left column */}
        <div>
          <span style={styles.eyebrow}>Get in Touch</span>
          <h1 style={styles.heading}>Let's Work Together</h1>
          <p style={styles.body}>
            Tell us about your project. We'll respond within one business day
            with thoughts and next steps — no hard sell.
          </p>

          {[
            { label: "Email", value: "hello@studio.co" },
            { label: "Phone", value: "+1 (415) 000-0000" },
            { label: "Location", value: "San Francisco, CA" },
            { label: "Hours", value: "Mon–Fri, 9am–6pm PST" },
          ].map((item) => (
            <div key={item.label} style={styles.infoItem}>
              <span style={styles.infoLabel}>{item.label}</span>
              <span style={styles.infoValue}>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Right column — form */}
        <div>
          {submitted ? (
            <div style={styles.successBox}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.8rem" }}>✓</div>
              <div style={styles.successText}>
                Message received. We'll be in touch shortly.
              </div>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name *</label>
                <input
                  style={styles.input}
                  name="name"
                  value={form.name}
                  onChange={handle}
                  placeholder="Your name"
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email *</label>
                <input
                  style={styles.input}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handle}
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Service Interested In</label>
                <select style={styles.select} name="service" value={form.service} onChange={handle}>
                  <option value="">Select a service…</option>
                  <option>Brand Strategy</option>
                  <option>UI/UX Design</option>
                  <option>Web Development</option>
                  <option>AI Integration</option>
                  <option>Consulting</option>
                </select>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Message *</label>
                <textarea
                  style={styles.textarea}
                  name="message"
                  value={form.message}
                  onChange={handle}
                  placeholder="Tell us about your project…"
                  required
                />
              </div>
              <button type="submit" style={styles.btn}>Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
