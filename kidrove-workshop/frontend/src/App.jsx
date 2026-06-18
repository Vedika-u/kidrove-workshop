import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Details } from "./components/Details";
import { Outcomes } from "./components/Outcomes";
import { FAQ } from "./components/FAQ";
import { RegistrationForm } from "./components/RegistrationForm";
import { Footer } from "./components/Footer";
import "./styles/globals.css";

export default function App() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Nav onEnrollClick={() => scrollTo("register")} />
      <Hero onEnrollClick={() => scrollTo("register")} onLearnMoreClick={() => scrollTo("outcomes")} />
      <Details />
      <Outcomes />
      <FAQ />
      
      <section className="section form-section" id="register">
        <p className="section-label">Registration</p>
        <h2 className="section-title">Reserve your child's spot</h2>
        <p className="section-sub">Only 20 seats per batch. Fill in the form and we'll confirm your registration within 24 hours.</p>
        <RegistrationForm />
      </section>

      <Footer />
    </>
  );
}
