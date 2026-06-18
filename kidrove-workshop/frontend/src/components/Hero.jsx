import { RobotIllustration } from "./RobotIllustration";

export function Hero({ onEnrollClick, onLearnMoreClick }) {
  return (
    <section className="hero" id="home">
      <div>
        <div className="hero-badge">Summer Workshop 2026</div>
        <h1>AI &amp; Robotics<br /><em>Summer Workshop</em></h1>
        <p>
          Ignite your child's curiosity with 4 weeks of hands-on coding, robot-building,
          and AI exploration — all from the comfort of home, guided by expert mentors.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={onEnrollClick}>Enroll Now — ₹2,999</button>
          <button className="btn-secondary" onClick={onLearnMoreClick}>See What They'll Learn</button>
        </div>
      </div>

      <div className="hero-visual">
        <RobotIllustration />
        <div className="hero-card-float float-1">🤖 Build real robots!</div>
        <div className="hero-card-float float-2">✅ Certified by experts</div>
        <div className="hero-card-float float-3">⏳ Starts 15 July</div>
      </div>
    </section>
  );
}
