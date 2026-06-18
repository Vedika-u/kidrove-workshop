const details = [
  { icon: "🧒", label: "Age Group", value: "8–14 Years" },
  { icon: "📅", label: "Duration",  value: "4 Weeks" },
  { icon: "💻", label: "Mode",      value: "Online" },
  { icon: "🗓️", label: "Start Date", value: "15 July 2026" },
  { icon: "💰", label: "Fee",        value: "₹2,999", highlight: true },
];

export function Details() {
  return (
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
  );
}
