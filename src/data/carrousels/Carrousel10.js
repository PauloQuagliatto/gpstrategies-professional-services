import img1 from '../../assets/images/google/workspace/ultima/1.png'
import img2 from '../../assets/images/google/workspace/ultima/2.png'
import img3 from '../../assets/images/google/workspace/ultima/3.png'
import img4 from '../../assets/images/google/workspace/ultima/4.png'

const Text1 = () => {
    return (
        <>
            <span>O verão acaba de chegar e Carolina está de vento em poupa com as vendas de sua 
            nova linha de camisetas.</span>
        </>
    )
}
 
const Text2 = () => {
    return (
        <>
            <span>Para facilitar a organização de arquivos, ela contratou um serviço estrangeiro 
            para armazenar as planilhas de sua loja de roupas,com o objetivo de facilitar o acesso 
            entre a sua equipe.</span>
        </>
    )
}
 
const Text3 = () => {
    return (
        <>
            <span>Dias antes de fechar para balanço, o serviço saiu do ar, e desde então os 
            colaboradores não conseguem entrar em contato com o provedor, já que a maioria da 
            equipe não domina a língua inglesa e a equipe brasileira está de recesso por conta do 
            ano novo.</span>
        </>
    )
}
 
const Text4 = () => {
    return (
        <>
            <span>Após dias sem um serviço satisfatório, Carolina decidiu contratar o Workspace 
            com a Vivo; dessa forma, ela tem garantido um atendimento 24 horas, em português, 
            com facilidade.</span>
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
]

export default data