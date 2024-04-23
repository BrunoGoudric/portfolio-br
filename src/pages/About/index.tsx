import Header from "../../components/Header";
import AboutImg from "../../assets/about.svg";

import "./styles.css";

function About() {
  return (
    <div className="About">
      <Header />
      <div className="content">
        <div>
          <img src={AboutImg} alt="homem trabalhando" />
        </div>
        <div className="contentInfo">
          <h2>Sobre</h2>
          <ul>
            <li>
              Profissional Tecnólogo em Análise e Desenvolvimento de Sistemas e
              MBA em Gestão de Projetos, com sólida experiência em
              Desenvolvimento Front-end e especializado em tecnologias como
              Next.js, React.js, TypeScript e Node.js.
            </li>
            <li>
              Auxílio com a equipe de desenvolvimento, líder técnico,
              especialistas de sistemas e gerente de produtos para idealização
              de soluções de software.
            </li>
            <li>
              Criação do front-end de aplicativos seguindo o Design System da
              companhia.
            </li>
            <li>
              Escritura de testes automatizados e realização de testes manuais
              nos softwares para assegurar qualidade na entrega.
            </li>
            <li>
              Atuação em desenvolvimento de softwares com qualidade e robustez,
              legibilidade de código, testes automatizados, code review e
              domínio da lógica de programação.
            </li>
            <li>
              Conhecimentos em análise dos requisitos do sistema, processos de
              negócios existentes e sistemas de informação.
            </li>
            <li>
              Foco na otimização de processos e na criação de experiências do
              usuário excepcionais, com comprometimento em impulsionar a
              inovação tecnológica e o sucesso dos projetos.
            </li>
            <li>
              Vivência em liderar, coordenar e supervisionar equipes e suas
              atividades, com visão sistêmica dos processos envolvidos nos
              setores, possibilitando a atuação estratégica para o alcance dos
              resultados propostos.
            </li>
            <li>
              Contribuição para o desenvolvimento técnico de novos
              colaboradores.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
