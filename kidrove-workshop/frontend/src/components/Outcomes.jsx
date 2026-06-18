const outcomes = [
  { title: "Build a Real Robot", desc: "Assemble and program your own Arduino-based robot from scratch." },
  { title: "Learn Block & Python Coding", desc: "Go from Scratch blocks to writing actual Python scripts for automation." },
  { title: "Understand AI Concepts", desc: "Explore machine learning, neural networks, and how AI makes decisions." },
  { title: "Design Thinking Skills", desc: "Solve real-world problems using structured design-thinking frameworks." },
  { title: "Teamwork & Project Presentation", desc: "Collaborate on a group project and present it to peers and mentors." },
  { title: "Certificate of Completion", desc: "Earn an industry-recognized certificate to kickstart your STEM journey." },
];

export function Outcomes() {
  return (
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
  );
}
