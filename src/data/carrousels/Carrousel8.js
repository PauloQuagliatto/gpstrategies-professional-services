import img1 from '../../assets/images/google/workspace/Enterprise/icaro.png'
import img2 from '../../assets/images/google/workspace/Enterprise/cantora.png'
import img3 from '../../assets/images/google/workspace/Enterprise/show.png'
import img4 from '../../assets/images/google/workspace/Enterprise/icaropensativo.png'
import img5 from '../../assets/images/google/workspace/Enterprise/icaronote.png'
import img6 from '../../assets/images/google/workspace/Enterprise/icaroextressado.png'
import img7 from '../../assets/images/google/workspace/Enterprise/muieicaro.png'
import img8 from '../../assets/images/google/workspace/Enterprise/icarotendoideias.png'

const Text1 = () => {
    return (
        <>
            <span>Ícaro é chefe da equipe de marketing de uma gravadora.</span>
        </>
    )
}
 
const Text2 = () => {
    return (
        <>
            <span>Na reunião de planejamento semestral de lançamentos, a presidência destacou a 
            importância da divulgação do DVD ao vivo de uma cantora recém-contratada.</span>
        </>
    )
}
 
const Text3 = () => {
    return (
        <>
            <span>Com isso, ele precisa buscar inspiração nas músicas e nos elementos cenográficos 
            do show, criando assim, uma campanha satisfatória tanto para a gravadora, quanto 
            para a artista.</span>
        </>
    )
}
 
const Text4 = () => {
    return (
        <>
            <span>Ícaro decidiu reunir sua equipe para que todos pudessem contribuir com insights 
            sobre a demanda.</span>
        </>
    )
}
 
const Text5 = () => {
    return (
        <>
            <span>A comunicação, porém, está confusa. Os colaboradores compartilham a tela 
            inúmeras vezes e precisam ser ágeis para anotar as ideias uns dos outros.</span>
        </>
    )
}
 
const Text6 = () => {
    return (
        <>
            <span>Para piorar a situação, a equipe não consegue gravar a reunião para revisitar 
            com calma os pontos abordados posteriormente.</span>
        </>
    )
}
 
const Text7 = () => {
    return (
        <>
            <span>Percebe como o uso do Jamboard e Meet simplificaria a demanda da equipe?</span>
        </>
    )
}
 
const Text8 = () => {
    return (
        <>
            <span>Dessa forma, eles conseguiriam compartilhar insights de forma prática e produtiva, 
            além de gravar toda a reunião sem qualquer limite de tempo.</span>
        </>
    )
}
 
const data = [
    {
        text: <Text1 />,
        imgCarrousel: img1
    },
    {
        text: <Text2 />,

        imgCarrousel: img2
    },
    {
        text: <Text3 />,
        imgCarrousel: img3
    },
    {
        text: <Text4 />,
        imgCarrousel: img4
    },
    {
        text: <Text5 />,
        imgCarrousel: img5
    },
    {
        text: <Text6 />,
        imgCarrousel: img6
    },
    {
        text: <Text7 />,

        imgCarrousel: img7
    },
    {
        text: <Text8 />,
        imgCarrousel: img8
    },
]

export default data