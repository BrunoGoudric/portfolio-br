import Header from "../../components/Header";
import ProjectImg from "../../assets/project.svg";
import IcapLogo from "../../assets/icap_logo.webp";
import "./styles.css"
import { IProject } from "../../types/IProject.types";

function Project(){
    const handleRedirect = (option: IProject) => {

        if(option === "icap"){
            window.location.href = "https://www.icap.app.br/"
        }

        if(option === "viva-vida"){
            window.location.href = "https://www.farmaciavivavida.com.br/"
        }

    }
    return (
        <div className="Project">
        <Header />
        <div className="content">
          <div>
            <img src={ProjectImg} alt="homem trabalhando" />
          </div>
          <div className="contentInfo">
            <h2>Projetos</h2>
            <div className="boxCard">
                <div className="cardProject" onClick={() => handleRedirect("viva-vida")}>
                    <img src="https://cdn.awsli.com.br/400x300/1258/1258059/logo/ca3d57aa34.jpg" alt="Logo Viva Vida" style={{ width: '157px', height: '80px', marginTop: '5px'}}/>
                    <p>Ecommercer</p>
                </div>
                <div className="cardProject" onClick={() => handleRedirect("icap")}>
                    <img src={IcapLogo} alt="Logo Icap" />
                    <p>Sistema de Aluguel de Barco</p>
                </div>               
            </div>
          </div>
        </div>
      </div>
    )
}

export default Project;