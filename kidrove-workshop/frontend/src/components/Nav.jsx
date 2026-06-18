export function Nav({ onEnrollClick }) {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">Kid<span>rove</span></a>
      <button className="nav-cta" onClick={onEnrollClick}>Enroll Now</button>
    </nav>
  );
}
