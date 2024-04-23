import Header from "../../components/Header";
import Perfil from "../../assets/profissional.png";
import Slogan from "../../assets/slogan.svg";
import WhasApp from "../../assets/whatsapp.svg";
import "./styles.css";

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="content">
        <div>
          <img src={Perfil} alt="Bruno Ferreira" />
        </div>
        <div className="contentInfo">
          <img src={Slogan} alt="slogan" />
          <p>
            Profissional Tecnólogo em Análise e Desenvolvimento de Sistemas e
            MBA em Gestão de Projetos. Especializado em Desenvolvimento
            Front-end, utilizo tecnologias como Next.js, React.js, TypeScript e
            Node.js. Com experiência em liderança técnica, colaboro na
            idealização de soluções de software, criando front-ends alinhados ao
            Design System da empresa. Minha atuação prioriza a otimização de
            processos e a criação de experiências excepcionais para o usuário,
            impulsionando a inovação e o sucesso dos projetos.
          </p>
          <a href="https://api.whatsapp.com/send?phone=5511969704753&text=Ol%C3%A1%20Bruno,%20tudo%20bem?%0AVim%20pelo%20seu%20site.">
            <img src={WhasApp} alt="logo whatsapp" />
            Entre em contato
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
