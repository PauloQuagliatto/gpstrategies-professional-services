import consultaImg from "../assets/images/consulta-1-image-1.png";
import vivoImg1 from "../assets/images/vivo-empresas-1-image-1.png";
import vivoImg2 from "../assets/images/vivo-empresas-1-image-2.png";
import microsoftImg1 from "../assets/images/microsoft-1-image-1.png";
import microsoftImg2 from "../assets/images/microsoft-1-image-2.png";
import microsoftImg3 from "../assets/images/microsoft-1-image-3.png";
import microsoftImg4 from "../assets/images/microsoft-1-image-4.png";
import microsoftImg5 from "../assets/images/microsoft-1-image-5.png";

const data = [
  {
    buttonText: "Consultoria",
    hasMultipleInfo: false,
    hasCard: false,
    imageSrc: consultaImg,
    title: "Consultoria Técnica",
    text: "A Vivo Empresas tem uma equipe de profissionais altamente qualificados e certificados em tecnologia Microsoft. O time analisou os prós e contras de todas as opções de licenciamento Microsoft, de acordo com todos os requisitos necessários, para atender a estrutura da Hyundai.",
  },
  {
    buttonText: "Vivo Empresas",
    hasMultipleInfo: true,
    hasCard: false,
    multipleChannel: [
      {
        imageSrc: vivoImg1,
        title: "Migração de e-mail",
        text: "Todo grande processo de implantação exige planejamento, por isso a Vivo Empresas estudou diversos cenários para entender quais seriam os esforços e cuidados necessários para migrar de forma segura todas as informações do servidor para a nuvem e oferecer a melhor solução para Hyundai.",
      },
      {
        imageSrc: vivoImg2,
        title: "Benefícios – Migração",
        text: "Garantia dos custos de migração de aplicativos sejam minimizados, suportando o processo com um modelo de entrega inovador e uma abordagem automatizada baseada em ferramentas (abordagem de fábrica industrializada), trazendo um modelo de custo previsível, justo e otimizado define um plano de implantação de aplicativos com base em grupos de movimentação; um plano de transição e uma solução de backup e recuperação de desastres para os aplicativos, além de oferecer um tempo de entrega menor através de uma abordagem baseada em fábrica, garantindo que várias atividades de migração sejam executadas com eficiência.",
      },
    ],
  },
  {
    buttonText: "Microsoft",
    hasMultipleInfo: true,
    hasCard: false,
    multipleChannel: [
      {
        imageSrc: microsoftImg1,
        title: "LSP Microsoft",
        text: "A Vivo Empresas é parceira Microsoft para contratos LSP e são poucas as empresas no Brasil que possuem a licença LSP, ter essa concessão foi crucial para definir a participação da Vivo Empresas na concorrência conduzida pela montadora.",
      },
      {
        imageSrc: microsoftImg2,
        title: "Benefícios Vivo",
        text: "Esse modelo de contrato agrega negociações de grande volume e possui opções de licenciamentos customizáveis de acordo com a necessidade do cliente, além de flexibilidade para negociação de preço.",
      },
      {
        imageSrc: microsoftImg3,
        title: "Microsoft 365",
        text: "Com as ferramentas contidas neste licenciamento é possível acessar e-mails de qualquer dispositivo e lugar, compartilhar arquivos entre os times, realizar reuniões online com seus colaboradores e clientes e ter seus documentos armazenados com segurança e sempre à mão.",
      },
      {
        imageSrc: microsoftImg4,
        title: "Microsoft Teams",
        text: "É o centro de colaboração em equipe disponível no Microsoft 365, integra pessoas, conteúdos e ferramentas para que o trabalho seja feito de forma mais produtiva.",
      },
      {
        imageSrc: microsoftImg5,
        title: "Benefícios - Pacote Microsoft",
        text: "Apoio ao cliente com a implantação/configuração adequada e segura de produtos online Microsoft (independente do fornecedor do licenciamento), permitindo que o cliente explore de imediato todas as funcionalidades do produto.",
      },
    ],
  },
];

export default data;