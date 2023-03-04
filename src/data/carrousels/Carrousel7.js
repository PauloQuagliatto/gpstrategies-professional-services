import img1 from '../../assets/images/google/workspace/Enterprise/blakblack.png'
import img2 from '../../assets/images/google/workspace/Enterprise/white.png'
import img3 from '../../assets/images/google/workspace/business/womanCat.png'

const Text1 = () => {
    return (
        <>
            Com armazenamento de conta de <span>1 TB</span> por utilizador em pool, o plano conta 
            com Editors, Chat e Meet, com limite de até <span>150 usuários</span> em reunião.
            Além disso, também possui a funcionalidade de <span>drive compartilhado</span> para 
            equipes.
        </>
    )
}
 
const Text2 = () => {
    return (
        <>
            Com armazenamento de conta <span>ilimitado</span>, possui as mesmas funcionalidades do 
            plano Essentials, acrescentadas de reuniões no Meet para <span>250 usuários</span> e 
            transmissões para até <span>10 mil</span> pessoas, pacote de segurança com <span>Vault, 
            DLP Avançado, Cloud Identity Premium (CIP) e controle e personalização de empresas 
            avançados</span>.
        </>
    )
}
 
const Text3 = () => {
    return (
        <>
            Com armazenamento de conta <span>ilimitado</span>, possui as mesmas funcionalidades do 
            plano Standard, acrescentadas de transmissões no Meet para 
            até <span>100 mil</span> pessoas, <span>cancelamento de ruído</span> em chamadas, pacote 
            de segurança com <span>Certificado Compliance, Security Center, AppSheetPRO e Work 
            Insights.</span>
        </>
    )
}
 
const data = [
    {
        title: 'Enterprise Essentials',
        text: <Text1 />,
        imgCarrousel: img1
    },
    {
        title: 'Enterprise Standard',
        text: <Text2 />,

        imgCarrousel: img2
    },
    {
        title: 'Enterprise Plus',
        text: <Text3 />,
        imgCarrousel: img3
    },
]

export default data