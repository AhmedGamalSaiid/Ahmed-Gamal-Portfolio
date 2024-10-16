import { Container } from "./styles";
import emailIcon from "../../assets/images/email-icon.svg";
import phoneIcon from "../../assets/images/phone-icon.svg"
import { Form } from "../Form/Form";
import './contact.css'

export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div className="btn-two">
        <a href="mailto:ahmedgamal81995@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:ahmedgamal81995@gmail.com">ahmedgamal81995@gmail.com</a>
        </div>
        <div className="btn-two">
        <a  href="tel:+201007078925"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+201007078925">(+20) 1007078925 </a>
        </div>  
  
      </div>
      <Form></Form>
    </Container>
  )
}