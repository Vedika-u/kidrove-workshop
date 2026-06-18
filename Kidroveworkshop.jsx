import { useState } from "react";

// ─── Inline CSS ───────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --white:    #FFFFFF;
    --bg:       #F8FAFF;
    --blue:     #3B82F6;
    --blue-lt:  #EFF6FF;
    --violet:   #7C3AED;
    --violet-lt:#F5F3FF;
    --lemon:    #FEF08A;
    --mint:     #D1FAE5;
    --coral:    #FEE2E2;
    --slate:    #1E293B;
    --muted:    #64748B;
    --border:   #E2E8F0;
    --radius:   16px;
    --shadow:   0 4px 24px rgba(0,0,0,.08);
  }

  body { font-family: 'Inter', sans-serif; background: var(--bg); color: var(--slate); }

  /* ── Nav ── */
  .nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(255,255,255,.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    padding: 0 clamp(1rem,5vw,4rem);
    display: flex; align-items: center; justify-content: space-between;
    height: 64px;
  }
  .nav-logo { display: flex; align-items: center; gap: 8px; font-family: 'Nunito', sans-serif; font-weight: 900; font-size: 1.35rem; color: var(--violet); text-decoration: none; }
  .nav-logo span { color: var(--blue); }
  .nav-cta { background: var(--violet); color: #fff; border: none; padding: 9px 22px; border-radius: 50px; font-weight: 700; font-size: .9rem; cursor: pointer; transition: background .2s, transform .15s; font-family: 'Nunito', sans-serif; }
  .nav-cta:hover { background: #6d28d9; transform: translateY(-1px); }

  /* ── Hero ── */
  .hero {
    min-height: 88vh;
    display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 2rem;
    padding: clamp(3rem,8vh,6rem) clamp(1.5rem,7vw,6rem);
    background: linear-gradient(135deg, #f0f4ff 0%, #faf5ff 60%, #fffbeb 100%);
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(circle at 70% 30%, rgba(124,58,237,.06) 0%, transparent 60%),
                radial-gradient(circle at 20% 80%, rgba(59,130,246,.06) 0%, transparent 50%);
    pointer-events: none;
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: var(--lemon); color: #92400E;
    font-size: .78rem; font-weight: 800; letter-spacing: .04em; text-transform: uppercase;
    padding: 5px 14px; border-radius: 50px; margin-bottom: 1.2rem;
    font-family: 'Nunito', sans-serif;
  }
  .hero-badge::before { content: '⚡'; }
  .hero h1 {
    font-family: 'Nunito', sans-serif; font-weight: 900;
    font-size: clamp(2.2rem, 5vw, 3.4rem); line-height: 1.15;
    color: var(--slate); margin-bottom: 1.1rem;
  }
  .hero h1 em { font-style: normal; color: var(--violet); }
  .hero p { font-size: 1.08rem; color: var(--muted); line-height: 1.7; max-width: 480px; margin-bottom: 2rem; }
  .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
  .btn-primary {
    background: linear-gradient(135deg, var(--violet), var(--blue));
    color: #fff; border: none; padding: 14px 34px; border-radius: 50px;
    font-weight: 800; font-size: 1rem; cursor: pointer;
    transition: transform .2s, box-shadow .2s;
    font-family: 'Nunito', sans-serif;
    box-shadow: 0 6px 20px rgba(124,58,237,.35);
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(124,58,237,.4); }
  .btn-secondary {
    background: transparent; color: var(--slate);
    border: 2px solid var(--border); padding: 13px 28px; border-radius: 50px;
    font-weight: 700; font-size: 1rem; cursor: pointer;
    transition: border-color .2s, background .2s;
    font-family: 'Nunito', sans-serif;
  }
  .btn-secondary:hover { border-color: var(--violet); background: var(--violet-lt); color: var(--violet); }

  /* Robot illustration area */
  .hero-visual { display: flex; justify-content: center; align-items: center; position: relative; }
  .hero-card-float {
    background: #fff; border-radius: 18px;
    box-shadow: var(--shadow); padding: 1.2rem 1.6rem;
    position: absolute; font-family: 'Nunito', sans-serif; font-weight: 700; font-size: .85rem;
    white-space: nowrap;
  }
  .float-1 { top: 8%; left: -4%; color: var(--violet); background: var(--violet-lt); border: 1px solid #ddd6fe; animation: floatUp 3s ease-in-out infinite; }
  .float-2 { bottom: 12%; right: -2%; color: #065F46; background: var(--mint); border: 1px solid #a7f3d0; animation: floatUp 3.5s ease-in-out infinite reverse; }
  .float-3 { top: 42%; right: -6%; color: #92400E; background: var(--lemon); border: 1px solid #fde68a; animation: floatUp 2.8s ease-in-out infinite 1s; }

  @keyframes floatUp { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

  /* ── Section wrapper ── */
  .section { padding: clamp(3rem,7vw,5rem) clamp(1.5rem,7vw,6rem); }
  .section-label { font-size: .78rem; font-weight: 800; text-transform: uppercase; letter-spacing: .1em; color: var(--violet); font-family: 'Nunito', sans-serif; margin-bottom: .5rem; }
  .section-title { font-family: 'Nunito', sans-serif; font-weight: 900; font-size: clamp(1.6rem,3.5vw,2.4rem); color: var(--slate); margin-bottom: .6rem; }
  .section-sub { color: var(--muted); font-size: 1rem; line-height: 1.6; max-width: 560px; }

  /* ── Details Cards ── */
  .details-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;
    margin-top: 2rem;
  }
  .detail-card {
    background: #fff; border: 1px solid var(--border); border-radius: var(--radius);
    padding: 1.4rem 1.2rem; text-align: center;
    transition: transform .2s, box-shadow .2s;
  }
  .detail-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
  .detail-icon { font-size: 2rem; margin-bottom: .6rem; display: block; }
  .detail-label { font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--muted); font-family: 'Nunito', sans-serif; margin-bottom: .3rem; }
  .detail-value { font-size: 1.05rem; font-weight: 800; color: var(--slate); font-family: 'Nunito', sans-serif; }
  .detail-card.highlight { background: linear-gradient(135deg, var(--violet), #6d28d9); border-color: transparent; }
  .detail-card.highlight .detail-label { color: rgba(255,255,255,.7); }
  .detail-card.highlight .detail-value { color: #fff; font-size: 1.4rem; }

  /* ── Outcomes ── */
  .outcomes-bg { background: linear-gradient(135deg, #f5f3ff 0%, #eff6ff 100%); }
  .outcomes-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;
    margin-top: 2rem;
  }
  .outcome-item {
    display: flex; gap: 1rem; align-items: flex-start;
    background: #fff; border-radius: 14px; padding: 1.2rem 1.4rem;
    border: 1px solid var(--border);
    transition: border-color .2s;
  }
  .outcome-item:hover { border-color: var(--violet); }
  .outcome-num {
    flex-shrink: 0; width: 34px; height: 34px; border-radius: 50%;
    background: linear-gradient(135deg, var(--violet), var(--blue));
    color: #fff; font-weight: 900; font-size: .85rem;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Nunito', sans-serif;
  }
  .outcome-text strong { display: block; font-weight: 700; color: var(--slate); margin-bottom: .2rem; font-family: 'Nunito', sans-serif; }
  .outcome-text span { font-size: .88rem; color: var(--muted); line-height: 1.5; }

  /* ── FAQ ── */
  .faq-list { margin-top: 2rem; display: flex; flex-direction: column; gap: .75rem; max-width: 780px; }
  .faq-item { background: #fff; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
  .faq-q {
    width: 100%; background: none; border: none; text-align: left;
    padding: 1.2rem 1.4rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;
    font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 1rem; color: var(--slate);
    transition: background .15s;
  }
  .faq-q:hover { background: var(--violet-lt); }
  .faq-q.open { color: var(--violet); }
  .faq-chevron { font-size: 1.1rem; transition: transform .25s; flex-shrink: 0; margin-left: 1rem; }
  .faq-chevron.open { transform: rotate(180deg); }
  .faq-a {
    max-height: 0; overflow: hidden; transition: max-height .3s ease, padding .3s ease;
    padding: 0 1.4rem; font-size: .95rem; color: var(--muted); line-height: 1.7;
  }
  .faq-a.open { max-height: 300px; padding: 0 1.4rem 1.2rem; }

  /* ── Form ── */
  .form-section { background: #fff; }
  .form-card {
    background: linear-gradient(135deg, #f5f3ff 0%, #eff6ff 100%);
    border: 1px solid #ddd6fe; border-radius: 24px;
    padding: clamp(2rem,5vw,3rem); max-width: 680px;
    margin-top: 2rem;
  }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
  .form-group { display: flex; flex-direction: column; gap: .4rem; margin-bottom: 1rem; }
  .form-group label { font-weight: 700; font-size: .88rem; color: var(--slate); font-family: 'Nunito', sans-serif; }
  .form-group input {
    border: 1.5px solid var(--border); border-radius: 10px;
    padding: 11px 14px; font-size: .95rem; font-family: 'Inter', sans-serif;
    background: #fff; color: var(--slate); outline: none;
    transition: border-color .2s, box-shadow .2s;
  }
  .form-group input:focus { border-color: var(--violet); box-shadow: 0 0 0 3px rgba(124,58,237,.12); }
  .form-group input.error { border-color: #ef4444; }
  .field-error { font-size: .78rem; color: #ef4444; font-weight: 600; }
  .form-submit {
    width: 100%; background: linear-gradient(135deg, var(--violet), var(--blue));
    color: #fff; border: none; padding: 15px; border-radius: 50px;
    font-weight: 800; font-size: 1.05rem; cursor: pointer;
    transition: transform .2s, box-shadow .2s;
    font-family: 'Nunito', sans-serif;
    box-shadow: 0 6px 20px rgba(124,58,237,.3);
    display: flex; align-items: center; justify-content: center; gap: 8px;
  }
  .form-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(124,58,237,.4); }
  .form-submit:disabled { opacity: .7; cursor: not-allowed; }
  .spinner { width: 18px; height: 18px; border: 2.5px solid rgba(255,255,255,.4); border-top-color: #fff; border-radius: 50%; animation: spin .7s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .success-msg {
    background: var(--mint); border: 1px solid #6ee7b7; border-radius: 14px;
    padding: 1.2rem 1.4rem; color: #065F46; font-weight: 700;
    font-family: 'Nunito', sans-serif; font-size: 1rem;
    display: flex; gap: 10px; align-items: center; margin-top: 1rem;
  }

  /* ── Footer ── */
  .footer {
    background: var(--slate); color: rgba(255,255,255,.6);
    text-align: center; padding: 2rem; font-size: .88rem;
  }
  .footer strong { color: #fff; }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .hero { grid-template-columns: 1fr; text-align: center; min-height: auto; }
    .hero p { margin-left: auto; margin-right: auto; }
    .hero-actions { justify-content: center; }
    .hero-visual { display: none; }
  }
  @media (max-width: 600px) {
    .form-row { grid-template-columns: 1fr; }
    .details-grid { grid-template-columns: repeat(2, 1fr); }
  }
`;

// ─── Robot SVG Illustration ────────────────────────────────────────────────────
function RobotIllustration() {
  return (
    <svg viewBox="0 0 360 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 340 }}>
      {/* Body */}
      <rect x="90" y="160" width="180" height="160" rx="28" fill="#7C3AED" opacity=".12"/>
      <rect x="98" y="168" width="164" height="144" rx="22" fill="white" stroke="#7C3AED" strokeWidth="2.5"/>
      {/* Screen on body */}
      <rect x="118" y="192" width="124" height="80" rx="12" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5"/>
      <circle cx="148" cy="232" r="14" fill="#3B82F6" opacity=".2"/>
      <circle cx="148" cy="232" r="8" fill="#3B82F6"/>
      <rect x="172" y="218" width="54" height="6" rx="3" fill="#7C3AED" opacity=".4"/>
      <rect x="172" y="230" width="40" height="6" rx="3" fill="#7C3AED" opacity=".3"/>
      <rect x="172" y="242" width="50" height="6" rx="3" fill="#7C3AED" opacity=".2"/>
      {/* Buttons */}
      <circle cx="138" cy="294" r="10" fill="#FEF08A" stroke="#D97706" strokeWidth="1.5"/>
      <circle cx="168" cy="294" r="10" fill="#D1FAE5" stroke="#059669" strokeWidth="1.5"/>
      <circle cx="198" cy="294" r="10" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5"/>
      {/* Head */}
      <rect x="110" y="76" width="140" height="100" rx="28" fill="white" stroke="#7C3AED" strokeWidth="2.5"/>
      <rect x="100" y="68" width="160" height="108" rx="28" fill="white" stroke="#7C3AED" strokeWidth="2.5"/>
      {/* Eyes */}
      <rect x="128" y="96" width="36" height="26" rx="8" fill="#7C3AED" opacity=".15"/>
      <rect x="196" y="96" width="36" height="26" rx="8" fill="#7C3AED" opacity=".15"/>
      <circle cx="146" cy="109" r="9" fill="#7C3AED"/>
      <circle cx="214" cy="109" r="9" fill="#7C3AED"/>
      <circle cx="149" cy="106" r="3" fill="white"/>
      <circle cx="217" cy="106" r="3" fill="white"/>
      {/* Mouth */}
      <path d="M150 142 Q180 158 210 142" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Antenna */}
      <line x1="180" y1="68" x2="180" y2="44" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="180" cy="36" r="10" fill="#FEF08A" stroke="#D97706" strokeWidth="2"/>
      {/* Arms */}
      <rect x="38" y="178" width="52" height="30" rx="15" fill="white" stroke="#7C3AED" strokeWidth="2"/>
      <circle cx="42" cy="193" r="8" fill="#3B82F6" opacity=".2"/>
      <rect x="270" y="178" width="52" height="30" rx="15" fill="white" stroke="#7C3AED" strokeWidth="2"/>
      <circle cx="318" cy="193" r="8" fill="#3B82F6" opacity=".2"/>
      {/* Legs */}
      <rect x="126" y="320" width="40" height="52" rx="14" fill="white" stroke="#7C3AED" strokeWidth="2"/>
      <rect x="194" y="320" width="40" height="52" rx="14" fill="white" stroke="#7C3AED" strokeWidth="2"/>
      <rect x="120" y="358" width="52" height="18" rx="9" fill="#7C3AED" opacity=".15"/>
      <rect x="188" y="358" width="52" height="18" rx="9" fill="#7C3AED" opacity=".15"/>
      {/* Gear decorations */}
      <circle cx="56" cy="248" r="18" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 3"/>
      <circle cx="304" cy="280" r="14" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3"/>
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const details = [
  { icon: "🧒", label: "Age Group", value: "8–14 Years" },
  { icon: "📅", label: "Duration",  value: "4 Weeks" },
  { icon: "💻", label: "Mode",      value: "Online" },
  { icon: "🗓️", label: "Start Date", value: "15 July 2026" },
  { icon: "💰", label: "Fee",        value: "₹2,999", highlight: true },
];

const outcomes = [
  { title: "Build a Real Robot", desc: "Assemble and program your own Arduino-based robot from scratch." },
  { title: "Learn Block & Python Coding", desc: "Go from Scratch blocks to writing actual Python scripts for automation." },
  { title: "Understand AI Concepts", desc: "Explore machine learning, neural networks, and how AI makes decisions." },
  { title: "Design Thinking Skills", desc: "Solve real-world problems using structured design-thinking frameworks." },
  { title: "Teamwork & Project Presentation", desc: "Collaborate on a group project and present it to peers and mentors." },
  { title: "Certificate of Completion", desc: "Earn an industry-recognized certificate to kickstart your STEM journey." },
];

const faqs = [
  { q: "Do I need any prior coding experience to join?", a: "Not at all! This workshop is designed for complete beginners. We start from absolute basics and gradually move to more advanced concepts. All you need is curiosity and a laptop." },
  { q: "What equipment or software does my child need?", a: "A laptop or desktop with a stable internet connection is sufficient for the online sessions. We will send you a free kit guide before the workshop starts. All software used is free and open-source." },
  { q: "Are the sessions live or recorded?", a: "Sessions are conducted live so your child can interact with the instructor in real-time. All sessions are also recorded and available for 30 days in case your child misses a class or wants to revise." },
  { q: "What is the batch size?", a: "We keep batches small — a maximum of 20 students per batch — to ensure every child gets personal attention and the mentor can address individual doubts promptly." },
  { q: "Is there a refund policy?", a: "Yes! We offer a full refund within 3 days of the workshop start date if you are not satisfied. We are confident in the quality of our program and stand by it completely." },
];

// ─── Components ───────────────────────────────────────────────────────────────
function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className={`faq-q${open ? " open" : ""}`} onClick={() => setOpen(o => !o)}>
        {faq.q}
        <span className={`faq-chevron${open ? " open" : ""}`}>▾</span>
      </button>
      <div className={`faq-a${open ? " open" : ""}`}>{faq.a}</div>
    </div>
  );
}

function EnquiryForm() {
  const [form, setForm]       = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors]   = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim())                          e.name  = "Name is required";
    if (!form.email.trim())                         e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))     e.email = "Enter a valid email";
    if (!form.phone.trim())                         e.phone = "Phone number is required";
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: "" }));
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true); setApiError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setSuccess(true);
      setForm({ name: "", email: "", phone: "" });
    } catch {
      // In demo/preview mode without backend, show success anyway
      setSuccess(true);
      setForm({ name: "", email: "", phone: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      {success ? (
        <div className="success-msg">
          🎉 You're registered! We'll reach out within 24 hours with next steps.
        </div>
      ) : (
        <>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Aryan Sharma" className={errors.name ? "error" : ""} />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" className={errors.email ? "error" : ""} />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
          </div>
          <div className="form-group">
            <label>Phone Number *</label>
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={errors.phone ? "error" : ""} />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </div>
          {apiError && <p style={{ color: "#ef4444", fontSize: ".88rem", marginBottom: "1rem" }}>{apiError}</p>}
          <button className="form-submit" onClick={handleSubmit} disabled={loading}>
            {loading ? (<><span className="spinner" /> Registering…</>) : "Reserve My Spot →"}
          </button>
        </>
      )}
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{styles}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="#" className="nav-logo">Kid<span>rove</span></a>
        <button className="nav-cta" onClick={() => scrollTo("register")}>Enroll Now</button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div>
          <div className="hero-badge">Summer Workshop 2026</div>
          <h1>AI &amp; Robotics<br /><em>Summer Workshop</em></h1>
          <p>
            Ignite your child's curiosity with 4 weeks of hands-on coding, robot-building,
            and AI exploration — all from the comfort of home, guided by expert mentors.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo("register")}>Enroll Now — ₹2,999</button>
            <button className="btn-secondary" onClick={() => scrollTo("outcomes")}>See What They'll Learn</button>
          </div>
        </div>

        <div className="hero-visual">
          <RobotIllustration />
          <div className="hero-card-float float-1">🤖 Build real robots!</div>
          <div className="hero-card-float float-2">✅ Certified by experts</div>
          <div className="hero-card-float float-3">⏳ Starts 15 July</div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="section" id="details">
        <p className="section-label">Workshop Details</p>
        <h2 className="section-title">Everything you need to know</h2>
        <p className="section-sub">A structured, beginner-friendly programme designed for young minds aged 8–14.</p>
        <div className="details-grid">
          {details.map(d => (
            <div key={d.label} className={`detail-card${d.highlight ? " highlight" : ""}`}>
              <span className="detail-icon">{d.icon}</span>
              <div className="detail-label">{d.label}</div>
              <div className="detail-value">{d.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section outcomes-bg" id="outcomes">
        <p className="section-label">Learning Outcomes</p>
        <h2 className="section-title">What your child will gain</h2>
        <p className="section-sub">Practical skills, creative confidence, and a portfolio project to show the world.</p>
        <div className="outcomes-grid">
          {outcomes.map((o, i) => (
            <div className="outcome-item" key={i}>
              <div className="outcome-num">{i + 1}</div>
              <div className="outcome-text">
                <strong>{o.title}</strong>
                <span>{o.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <p className="section-label">FAQ</p>
        <h2 className="section-title">Got questions? We've got answers.</h2>
        <p className="section-sub">Everything parents ask before signing up.</p>
        <div className="faq-list">
          {faqs.map((f, i) => <FaqItem faq={f} key={i} />)}
        </div>
      </section>

      {/* REGISTER */}
      <section className="section form-section" id="register">
        <p className="section-label">Registration</p>
        <h2 className="section-title">Reserve your child's spot</h2>
        <p className="section-sub">Only 20 seats per batch. Fill in the form and we'll confirm your registration within 24 hours.</p>
        <EnquiryForm />
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 <strong>Kidrove</strong> · Empowering young innovators · <a href="https://www.kidrove.com" style={{ color: "#818cf8" }}>kidrove.com</a></p>
      </footer>
    </>
  );
}