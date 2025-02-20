import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import AhmedGamal from "../../assets/images/AhmedGamal.png";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/images/linkedin.svg";
import githubIcon from "../../assets/images/github.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import Hello from "../../assets/images/Hello.gif";
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Ahmed Gamal</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Senior Frontend Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">+5 Years of Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/ahmed-gamal-saiid95/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/AhmedGamalSaiid"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://wa.me/+201007078925"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={AhmedGamal} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
