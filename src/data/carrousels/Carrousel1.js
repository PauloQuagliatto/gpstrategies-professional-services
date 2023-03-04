import img1 from '../../assets/images/google/workspace/carrousel-1/1-maozinha.png'
import img2 from '../../assets/images/google/workspace/carrousel-1/2-transf-digital.png'
import img3 from '../../assets/images/google/workspace/carrousel-1/3-ver-unica.png'
import img4 from '../../assets/images/google/workspace/carrousel-1/4-key.png'

const Text1 = () => {
    return (
        <>
            Promoção de maior cooperatividade e comunicabilidade entre as equipes de uma empresa.
        </>
    )
}

const Text2 = () => {
    return (
        <>
            Impacto na cultura da empresa promovendo maior produtividade por meio de um mindset 
            digital, que significa usar a tecnologia como aliada a prática de novas estratégias 
            corporativas.
        </>
    )
}

const Text3 = () => {
    return (
        <>
            A garantia de que todos da equipe poderão trabalhar na versão mais recente de um 
            arquivo, em tempo real, sendo acessada de qualquer lugar.
        </>
    )
}

const Text4 = () => {
    return (
        <>
            Preservação de dados vigorosa da marca Google, contando com uma infraestrutura 
            completa na defesa de ataques.
        </>
    )
}

const data = [
    {
        title: 'Ambiente Colaborativo',
        text: <Text1 />,
        imgCarrousel: img1
    },
    {
        title: 'Transformação Digital',
        text: <Text2 />,
        imgCarrousel: img2
    },
    {
        title: 'Versão Única',
        text: <Text3 />,
        imgCarrousel: img3
    },
    {
        title: 'Segurança & Privacidade',
        text: <Text4 />,
        imgCarrousel: img4
    }
]

export default data