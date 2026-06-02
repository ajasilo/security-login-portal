export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.bgCircle1}></div>
      <div style={styles.bgCircle2}></div>

      <div style={styles.card}>
        <div style={styles.badge}>Enterprise Access</div>

        <h1 style={styles.title}>Cloud Security Team</h1>

        <p style={styles.subtitle}>
          Secure access for cloud security professionals
        </p>

        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              style={styles.input}
            />
          </div>

          <div style={styles.optionsRow}>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" style={styles.checkbox} />
              Remember Me
            </label>

            <a href="#" style={styles.link}>
              Forgot Password?
            </a>
          </div>

          <button type="submit" style={styles.button}>
            Sign In
          </button>

          <p style={styles.createAccount}>
            New to the platform?{" "}
            <a href="#" style={styles.link}>
              Create Account
            </a>
          </p>
        </form>

        <div style={styles.footer}>
          AWS • DevSecOps • Cyber Threat Intelligence
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background:
      "linear-gradient(135deg, #f8fbff 0%, #eef4ff 50%, #eaf3ff 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily:
      "Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
    position: "relative",
    overflow: "hidden",
  },

  bgCircle1: {
    position: "absolute",
    width: "450px",
    height: "450px",
    borderRadius: "50%",
    background: "rgba(59,130,246,0.15)",
    filter: "blur(120px)",
    top: "-100px",
    left: "-100px",
  },

  bgCircle2: {
    position: "absolute",
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    background: "rgba(14,165,233,0.12)",
    filter: "blur(120px)",
    bottom: "-80px",
    right: "-80px",
  },

  card: {
    width: "500px",
    maxWidth: "90%",
    padding: "48px",
    borderRadius: "30px",
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    border: "1px solid rgba(37,99,235,0.12)",
    boxShadow: "0 20px 60px rgba(15,23,42,0.12)",
    textAlign: "center",
    zIndex: 1,
  },

  badge: {
    display: "inline-block",
    padding: "8px 18px",
    borderRadius: "999px",
    background: "#eff6ff",
    color: "#2563eb",
    fontSize: "12px",
    fontWeight: "600",
    border: "1px solid #dbeafe",
    marginBottom: "20px",
  },

  title: {
    fontSize: "42px",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "16px",
    color: "#64748b",
    marginBottom: "35px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    textAlign: "left",
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  label: {
    color: "#1e293b",
    fontWeight: "600",
    fontSize: "14px",
  },

  input: {
    padding: "15px",
    borderRadius: "14px",
    border: "1px solid #cbd5e1",
    background: "#ffffff",
    color: "#0f172a",
    fontSize: "14px",
    outline: "none",
  },

  optionsRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#475569",
    fontSize: "14px",
  },

  checkbox: {
    accentColor: "#2563eb",
  },

  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "600",
  },

  button: {
    padding: "16px",
    border: "none",
    borderRadius: "14px",
    background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(37,99,235,0.25)",
  },

  createAccount: {
    textAlign: "center",
    color: "#64748b",
    fontSize: "14px",
    marginTop: "5px",
  },

  footer: {
    marginTop: "35px",
    paddingTop: "20px",
    borderTop: "1px solid #e2e8f0",
    color: "#64748b",
    fontSize: "13px",
    fontWeight: "600",
    textAlign: "center",
  },
};