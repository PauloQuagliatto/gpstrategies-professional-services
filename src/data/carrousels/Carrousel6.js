import img1 from '../../assets/images/google/workspace/business/womanManPc.png'
import img2 from '../../assets/images/google/workspace/business/happyMans.png'
import img3 from '../../assets/images/google/workspace/business/womanCat.png'

const Text1 = () => {
    return (
        <>
            <span>Com</span> armazenamento de conta de <span>30 GB</span> por utilizador, o plano 
            inclui os principais aplicativos do Google, como Gmail, Calendar, Docs e Chat.<br></br><br></br>
            As reuniões no Meet contam com o limite de 300 usuários, além de possuir funcionalidades 
            extras, como desfoque de fundo, quadro branco e legendas ao vivo.
        </>
    )
}
 
const Text2 = () => {
    return (
        <>
            Com armazenamento de conta de <span>2 TB</span> por utilizador, o plano inclui os 
            principais aplicativos do Google.<br/><br/>
            As reuniões no Meet contam com o limite de <span>300 usuários</span>, gravação e QA, 
            <span>Chat</span> com relatórios de segurança e controle, além do <span>PIN</span> de 
            verificação de compartilhamento e o <span>armazenamento compartilhado</span> em equipe.
        </>
    )
}
 
const Text3 = () => {
    return (
        <>
            Com armazenamento de conta de <span>5 TB</span> por utilizador, o plano inclui as mesmas 
            funcionalidades do Standard, acrescentadas de <span>tradução simultânea</span> das 
            chamadas do Meet, <span>Vault</span>, <span>DLP Básico</span> e <span>gerenciamento 
            avançado de endpoint</span>.
        </>
    )
}
 
const data = [
    {
        title: 'Business Starter',
        text: <Text1 />,
        imgCarrousel: img1
    },
    {
        title: 'Business Standard',
        text: <Text2 />,

        imgCarrousel: img2
    },
    {
        title: 'Business Plus',
        text: <Text3 />,
        imgCarrousel: img3
    },
]

export default data