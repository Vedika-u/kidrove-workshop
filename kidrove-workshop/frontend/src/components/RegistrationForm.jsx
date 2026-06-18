import { useState } from "react";

export function RegistrationForm() {
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
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Server error");
      }
      setSuccess(true);
      setForm({ name: "", email: "", phone: "" });
    } catch (err) {
      setApiError(err.message || "Failed to register. Please try again.");
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
