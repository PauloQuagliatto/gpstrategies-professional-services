import vivoImg1 from "../assets/images/vivo-empresas-2-image-1.png";
import microsoftImg1 from "../assets/images/microsoft-2-image-1.png";
import microsoftImg2 from "../assets/images/microsoft-2-image-2.png";
import microsoftImg3 from "../assets/images/microsoft-2-image-3.png";
import microsoftImg4 from "../assets/images/microsoft-2-image-4.png";

const data = [
  {
    buttonText: "Vivo Empresas",
    hasMultipleInfo: false,
    hasCard: true,
    imageSrc: vivoImg1,
    title: "Características",
    hasJoinha: false,
    list: [
      "Consultoria TAM para otimização tecnológica e de infraestrutura;",
      "Gerente de negócios dedicado e suporte de uma equipe de especialistas;",
      "Reuniões diárias para entender as necessidades do cliente e identificar novas oportunidades.",
    ],
    cardInfo:
      "Suporte local: serviços de suporte sólidos nos mercados de língua portuguesa e espanhola. Assistência técnica sob medida para as necessidades dos clientes com ferramentas de otimização e automação adaptadas às suas necessidades e planos futuros.",
  },
  {
    buttonText: "Microsoft",
    hasMultipleInfo: true,
    hasCard: false,
    multipleChannel: [
      {
        imageSrc: microsoftImg1,
        title: "Microsoft 365",
        text: "Inclui todas as aplicações inovadoras do Office para facilitar o trabalho em equipe, serviços de nuvem inteligentes e segurança.",
      },
      {
        imageSrc: microsoftImg2,
        title: "Enterprise Mobility & Security",
        text: "Solução de segurança que garante o compartilhamento de dados e trabalho remoto de forma segura, fazendo criptografia dos dados, gestão dos dispositivos e política de segurança de autenticação ao AD.",
      },
      {
        imageSrc: microsoftImg3,
        title: "Banco de dados SQL Microsoft",
        text: "Solução de banco de dados on-premisse para grandes empresas, como a Votorantim, que consomem muito banco de dados, então essa ferramenta permite armazenar e analisar informações com altos níveis de segurança.",
      },
      {
        imageSrc: microsoftImg4,
        title: "Power BI Pro e Premium",
        text: "Fornece visualizações interativas de dados e recursos de business intelligence para que os usuário finais criem os seus próprios relatórios e dashboards. A ferramenta permite que as empresas usem os dados para tomada de melhores decisões empresariais.",
      },
    ],
  },
];

export default data;
