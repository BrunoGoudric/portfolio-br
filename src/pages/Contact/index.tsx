import Header from "../../components/Header";
import ContactImg from "../../assets/contact.svg";
import "./styles.css";

function Contact() {
  return (
    <div className="Contact">
      <Header />
      <div className="content">
        <div>
          <img src={ContactImg} alt="homem trabalhando" />
        </div>
        <div className="contentInfo">
          <h2>Contato</h2>
          <div className="dataInfo">
            <h3>Bruno Ferreira</h3>
            <div>E-mail: <a href="mailto:brunolfsports@hotmail.com">brunolfsports@hotmail.com</a></div>
            <p>WhatsApp: <a href="https://api.whatsapp.com/send?phone=5511969704753&text=Ol%C3%A1%20Bruno,%20tudo%20bem?%0AVim%20pelo%20seu%20site.">+55 11 96970-4753</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
