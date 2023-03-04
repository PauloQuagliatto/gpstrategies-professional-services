import img1 from '../../assets/images/google/workspace/eficiencia/1cadeirante.png'
import img2 from '../../assets/images/google/workspace/eficiencia/morena1.png'
import img3 from '../../assets/images/google/workspace/eficiencia/morena2.png'

const Text1 = () => {
    return (
        <>
            de usuários do Workspace afirmaram que a colaboração em tempo real se tornou um 
            padrão em suas equipes
        </>
    )
}
 
const Text2 = () => {
    return (
        <>
            dos usuários que criam <br/>documentos colaborativos se<br/> sentem mais produtivos
        </>
    )
}
 
const Text3 = () => {
    return (
        <>
            de redução nos chamados<br/> de suporte técnico
        </>
    )
}
 
const data = [
    {
        title: `92%`,
        text: <Text1 />,
        imgCarrousel: img1
    },
    {
        title: `55%`,
        text: <Text2 />,

        imgCarrousel: img2
    },
    {
        title: `20%`,
        text: <Text3 />,
        imgCarrousel: img3
    },
]

export default data