import { Container } from "./styles";
import reactIcon from "../../assets/images/react-icon.svg";
import linkedin from "../../assets/images/linkedin.svg";
import githubIcon from "../../assets/images/github.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import telegram from "../../assets/images/telegram.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import AGLOGO from "../../assets/images/AhmedGamal.svg";
// import discordIcon from '../../assets/images/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a
        href="https://ahmedgamalsaiid.github.io/Ahmed-Gamal-Portfolio/"
        className="logo"
      >
        <span>
          <img src={AGLOGO} alt="Hello" width="80px" style={{borderRadius:'20px'}} />
        </span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/ahmed-gamal-saiid95/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/AhmedGamalSaiid/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://wa.me/+201007078925" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="Whatsapp" />
        </a>
      </div>
    </Container>
  );
}
