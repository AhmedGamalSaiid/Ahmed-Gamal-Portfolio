import { Container } from "./styles";
import emailIcon from "../../assets/images/email-icon.svg";
import phoneIcon from "../../assets/images/phone-icon.svg"
import { Form } from "../Form/Form";
import './contact.css'
import { useTranslation } from "react-i18next";

export function Contact(){
  const { t } = useTranslation();

  return(
    <Container id="contact">
      <header>
        <h2>{t("contact.title")}</h2>
        <p>{t("contact.line1")}</p>
        <p>{t("contact.line2")}</p>
      </header>
      <div className="contacts">
        <div className="btn-two">
        <a href="mailto:ahmedgamal81995@gmail.com"><img src={emailIcon} alt={t("contact.emailAlt")} /></a> 
          <a href="mailto:ahmedgamal81995@gmail.com" dir="ltr">ahmedgamal81995@gmail.com</a>
        </div>
        <div className="btn-two">
        <a  href="tel:+201007078925"><img src={phoneIcon} alt={t("contact.phoneAlt")} /></a>
          <a href="tel:+201007078925" dir="ltr">(+20) 1007078925 </a>
        </div>  
  
      </div>
      <Form></Form>
    </Container>
  )
}