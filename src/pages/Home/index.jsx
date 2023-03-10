import React from "react";
import "./index.css";

// Components
import Section from "../../components/Section";
import Container from "../../components/Container";
import Logo from "../../components/Sections-Components/Logo";
import MultipleCards from "../../components/Sections-Components/MultipleCards";

// Backgrounds
import smilingWomanImg from "../../assets/images/smiling-bussiness-woman.png";
import bg4branca from "../../assets/images/bg_4.png";

// Images
import hyundaiLogo1 from "../../assets/images/hyundai-logo-1.png";
import consulLogo1 from "../../assets/images/consul-logo-1.png";
import clickConceitos from "../../assets/svgs/click-conceitos.svg";
import clickConceitosWhite from "../../assets/svgs/click-conceitos-white.svg";
import votorantinLogo1 from "../../assets/images/votorantin-logo-1.png";
import saoCamiloLogo1 from "../../assets/images/sao-camilo-logo-1.png";
import assinaturas from "../../assets/images/assinaturas.png";

// retranca
import retrancaImg from "../../assets/images/logo/retranca.png";

// assinatura (final)
import sign from "../../assets/images/logo/logo.png";

//datas
import hyundaiData from "../../data/hyundaiData";
import consulData from "../../data/consulData";
import votorantinData from "../../data/votorantinData";
import saoCamiloData from "../../data/saoCamiloData";

const Home = () => {
  return (
    <>
      <img src={retrancaImg} alt="" className="retranca" />
      <Section bg={smilingWomanImg} bgCover="rgba(0, 0, 0, 0.55)" id="start">
        <Container>
          <Logo />
        </Container>
        <div className="darken-section-end" />
      </Section>
      <div className="divMae">
        <div className="maskara">
          <Section>
            <Container>
              <p className="text-xl justify-text-center">
                São muitos os benefícios dos Serviços Profissionais e
                Gerenciados da
                <br />
                Vivo Cloud. Veja, a seguir, como eles se relacionam às soluções{" "}
                <br />
                encontradas em alguns casos de uso.
              </p>
            </Container>
          </Section>
          <Section
            bg={bg4branca}
            bgOrientation="center center"
            bgSize="100% 100%"
          >
            <Container>
              <div id="hyundai" className="flex">
                <div className="info-section">
                  <h1 style={{ color: "#660099" }}>Estudo de caso Hyundai</h1>
                  <p className="text-normal" style={{ color: "black" }}>
                    Durante a pandemia, a Hyundai verificou que precisava fazer
                    uma modernização no ambiente de trabalho dos seus
                    colaboradores. Com grande parte da equipe em home office,
                    ter acesso a uma ferramenta de comunicação remota ágil,
                    integrada e armazenamento em nuvem era essencial. Eles já
                    utilizavam os produtos Microsoft, mas em um servidor
                    on-premise, ou seja, em que a própria empresa tem a
                    responsabilidade de processar suas aplicações de hardware e
                    software e agora era o momento de mudar para uma solução
                    mais moderna e completa.
                  </p>
                  <img src={clickConceitos} alt="" />
                </div>
                <div
                  className="logo-section">
                  <img
                    src={hyundaiLogo1}
                    alt="hyundai-logo"
                  />
                </div>
              </div>
            </Container>
          </Section>
          <Section customClass="bgWhite" lineBG="#FFFFFF">
            <Container>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MultipleCards data={hyundaiData} isBgWhite={true} />
              </div>
            </Container>
          </Section>
          <Section>
            <Container>
              <div id="consul" className="flex">
                <div
                  className="logo-section"
                >
                  <img
                    src={consulLogo1}
                    alt="logo-consul"
                  />
                </div>
                <div className="info-section" style={{ paddingLeft: "2rem" }}>
                  <h1>Estudo de caso Consul</h1>
                  <p className="text-normal" style={{ color: "white" }}>
                    A Consul procurou a Vivo Empresas em busca de tecnologia e
                    suporte especializado para os seus pontos de venda incluindo
                    uma loja virtual. Com o fortalecimento do relacionamento da
                    rede de supermercados e em uma atuação proativa, o Gerente
                    de Negócios Vivo percebeu a necessidade da empresa em
                    adquirir uma licença própria de Microsoft 365, que antes era
                    utilizada em conjunto com a Usiminas, fornecendo o serviço
                    de Microsoft online.
                  </p>
                  <img src={clickConceitosWhite} alt="" />
                </div>
              </div>
            </Container>
          </Section>
          <Section>
            <Container>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MultipleCards data={consulData} isBgWhite={false} />
              </div>
            </Container>
          </Section>
          <Section
            bg={bg4branca}
            bgOrientation="center center"
            bgSize="100% 100%"
          >
            <Container>
              <div id="votorantim" className="flex">
                <div className="info-section">
                  <h1 style={{ color: "#660099" }}>
                    Estudo de caso Votorantim
                  </h1>
                  <p className="text-normal" style={{ color: "black" }}>
                    A Votorantim é uma holding com empresas que possuem
                    autonomia na contratação de serviços, porém no caso do
                    contrato LSP Microsoft, por envolver grandes volumes, a
                    contratação foi feita de forma conjunta pela maior parte das
                    empresas do grupo e coordenada pela Votorantim SA. Depois de
                    20 anos trabalhando com outra empresa na gestão dos
                    contratos de licenciamento Microsoft, a Votorantim decidiu
                    iniciar uma nova parceria com a Vivo Empresas e construir
                    esse relacionamento com bases sólidas foi um dos principais
                    desafios desde o início do contrato.
                  </p>
                  <img src={clickConceitos} alt="" />
                </div>
                <div
                  className="logo-section"
                >
                  <img
                    src={votorantinLogo1}
                    alt="votorantin-logo"
                  />
                </div>
              </div>
            </Container>
          </Section>
          <Section customClass="bgWhite" lineBG="#FFFFFF">
            <Container>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MultipleCards data={votorantinData} isBgWhite={true} />
              </div>
            </Container>
          </Section>
          <Section>
            <Container>
              <div id="sao-camilo" className="flex">
                <div
                  className="logo-section"
                >
                  <img
                    src={saoCamiloLogo1}
                    alt="sao-camilo-logo"
                  />
                </div>
                <div className="info-section" style={{ paddingLeft: "2rem" }}>
                  <h1>Estudo de caso Hospital São Camilo</h1>
                  <p className="text-normal" style={{ color: "white" }}>
                    Entender o momento de um setor que foi fortemente impactado
                    pela pandemia, em diversos aspectos, foi essencial para
                    atender a todos os desafios colocados na concorrência pelo
                    contrato de licenciamento Microsoft do Hospital São Camilo.
                  </p>
                  <img src={clickConceitosWhite} alt="" />
                </div>
              </div>
            </Container>
          </Section>
          <Section>
            <Container>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MultipleCards data={saoCamiloData} isBgWhite={false} />
              </div>
            </Container>
          </Section>
          <Section>
            <div
              style={{
                height: "283px",
              }}
            />
            <div className="darken-section-end darker" />
          </Section>
          <div
            style={{
              height: "100%",
              background: "linear-gradient(180deg, #000000 0%, #660099 124.8%)",
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
            }}
          >
            <div className="ajustar-assinatura">
              <img src={assinaturas} alt="" className="assinatura" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
