import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Resume from "../../assets/docs/Ahmed_Gamal_CV.pdf";
import AGLOGO from "../../assets/images/AhmedGamal.svg";

export function Header() {
  const [isActive, setActive] = useState(false);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.resolvedLanguage === "ar";

  function toggleLanguage() {
    i18n.changeLanguage(isArabic ? "en" : "ar");
    closeMenu();
  }
  function closeMenu() {
    setActive(false);
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <div>
            <img src={AGLOGO} alt={t("nav.logoAlt")} width="100px" />
          </div>
        </HashLink>
        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            {t("nav.home")}
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            {t("nav.about")}
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            {t("nav.project")}
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            {t("nav.contact")}
          </NavHashLink>
          <a href={Resume} download className="button">
            {t("nav.resume")}
          </a>
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label={t("language.switchToLabel")}
            lang={isArabic ? "en" : "ar"}
          >
            {t("language.switchTo")}
          </button>
        </nav>
        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? t("nav.closeMenu") : t("nav.openMenu")}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
