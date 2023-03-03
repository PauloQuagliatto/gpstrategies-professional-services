import atendimentoImg from "../assets/images/atendimento-1-image-1.png";
import microsoftImg1 from "../assets/images/microsoft-3-image-1.png";
import microsoftImg2 from "../assets/images/microsoft-3-image-2.png";
import microsoftImg3 from "../assets/images/microsoft-3-image-3.png";

const data = [
  {
    buttonText: "Atendimento Suporte Técnico",
    hasMultipleInfo: false,
    hasCard: true,
    imageSrc: atendimentoImg,
    title: "Características",
    list: [
      "Suporte Microsoft Online, com a equipe técnica em todos as fases do início ao fim do projeto;",
      "Atendimento 24 horas por dia, 7 dias por semana;",
      "Suporte Microsoft Premier, com até 8 horas para atendimento;",
      "Oferta de 6 workshops de treinamento, para que o hospital defina quando e com quais equipes será utilizado durante o tempo de contrato.",
    ],
    cardInfo:
      "Suporte local: serviços de suporte sólidos nos mercados de língua portuguesa e espanhola.",
  },
  {
    buttonText: "Microsoft 365",
    hasMultipleInfo: true,
    hasCard: false,
    multipleChannel: [
      {
        imageSrc: microsoftImg1,
        title: "Contratos LSP Microsoft",
        text: "Oferece a melhor vantagem financeira para organizações com 500 ou mais usuários ou caso desejem um programa de licenciamento por volume gerenciável. Com este modelo o hospital tem a flexibilidade de comprar serviços em nuvem e licenças de software em um único contrato.",
      },
      {
        imageSrc: microsoftImg2,
        title: "Contrato EA - Enterprise Agreement",
        text: "Solução de segurança que garante o compartilhamento de dados e trabalho remoto de forma segura, fazendo criptografia dos dados, gestão dos dispositivos e política de segurança de autenticação ao AD.",
      },
      {
        imageSrc: microsoftImg3,
        title: "Contrato SCE - Server and Cloud Enrollment",
        text: "É uma inscrição ligada ao Microsoft Enterprise Agreement (EA) que permite padronizar as principais tecnologias de servidor, mover essas licenças de servidor para a nuvem conforme necessário e licenciar os serviços do Windows Azure.",
      },
    ],
  },
];

export default data;
