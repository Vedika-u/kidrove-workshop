import { useState } from "react";

const faqs = [
  { q: "Do I need any prior coding experience to join?", a: "Not at all! This workshop is designed for complete beginners. We start from absolute basics and gradually move to more advanced concepts. All you need is curiosity and a laptop." },
  { q: "What equipment or software does my child need?", a: "A laptop or desktop with a stable internet connection is sufficient for the online sessions. We will send you a free kit guide before the workshop starts. All software used is free and open-source." },
  { q: "Are the sessions live or recorded?", a: "Sessions are conducted live so your child can interact with the instructor in real-time. All sessions are also recorded and available for 30 days in case your child misses a class or wants to revise." },
  { q: "What is the batch size?", a: "We keep batches small — a maximum of 20 students per batch — to ensure every child gets personal attention and the mentor can address individual doubts promptly." },
  { q: "Is there a refund policy?", a: "Yes! We offer a full refund within 3 days of the workshop start date if you are not satisfied. We are confident in the quality of our program and stand by it completely." },
];

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

export function FAQ() {
  return (
    <section className="section" id="faq">
      <p className="section-label">FAQ</p>
      <h2 className="section-title">Got questions? We've got answers.</h2>
      <p className="section-sub">Everything parents ask before signing up.</p>
      <div className="faq-list">
        {faqs.map((f, i) => <FaqItem faq={f} key={i} />)}
      </div>
    </section>
  );
}
