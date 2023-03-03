import './styles.css'

import joinha from "../../../assets/svgs/joinha.svg";

const ButtonsWithInfoAndCard = () => {

  return (
    <div className="buttons-with-info-and-card-container">
      <ul>
        <li>
          Atendimento altamente capacitado em português, 24h por dia e 7 dias
          por semana;
        </li>
        <li>Transparência e flexibilidade para a negociação das licenças;</li>
        <li>
          Equipes especialistas de diferentes setores de Vivo Empresas estiveram
          disponíveis;
        </li>
        <li>
          Para desenhar o projeto de implementação de acordo com as necessidades
          da Consul;
        </li>
        <li>
          Encontro com equipe de TI Vivo Empresas para sanar todas as dúvidas
          relacionadas ao projeto.
        </li>
      </ul>
      <div className="card glow">
        <img src={joinha} alt="joinha-svg" />
        <div className="card-text">
          <h1>Benefícios</h1>
          <p>
            Suporte local: serviços de suporte sólidos nos mercados de língua
            portuguesa e espanhola. Suporte necessário durante todas as fases de
            implementação, que pode ser definida como um grande trabalho em
            equipe. Mais de 5 equipes técnicas de Vivo Empresas e, também, o
            time da Consul para garantir a efetividade de cada um dos passos do
            projeto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ButtonsWithInfoAndCard;