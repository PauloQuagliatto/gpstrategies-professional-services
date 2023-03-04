import img1 from '../../assets/images/google/workspace/carrousel-2/1.png'
import img2 from '../../assets/images/google/workspace/carrousel-2/2.png'
import img3 from '../../assets/images/google/workspace/carrousel-2/3.png'
import img4 from '../../assets/images/google/workspace/carrousel-2/4.png'
import img5 from '../../assets/images/google/workspace/carrousel-2/5.png'
import img6 from '../../assets/images/google/workspace/carrousel-2/6.png'
import img7 from '../../assets/images/google/workspace/carrousel-2/7.png'
import img8 from '../../assets/images/google/workspace/carrousel-2/8.png'

const Text1 = () => {
    return (
        <>
            Uma rede de supermercados de médio porte, localizada em Goiânia, acaba de efetuar a 
            compra de seu principal concorrente.
        </>
    )
}
const Text2 = () => {
    return (
        <>
            No processo de fusão das empresas, Roberta foi escolhida como uma das responsáveis por 
            preparar um relatório financeiro da rede adquirida.
        </>
    )
}

const Text3 = () => {
    return (
        <>
            Anteriormente, esse mesmo documento estava sendo produzido por Norma, sua colega de 
            equipe.
        </>
    )
}

const Text4 = () => {
    return (
        <>
            Faltando menos de dois dias para o prazo de entrega, Roberta descobriu que estava 
            trabalhando em uma versão desatualizada do arquivo.
        </>
    )
}

const Text5 = () => {
    return (
        <>
            Norma lhe enviou o arquivo errado por e-mail antes de entrar de férias e agora será 
            necessário um prazo maior para refazer parte do documento.
        </>
    )
}

const Text6 = () => {
    return (
        <>
            Percebe como isso tudo poderia ser evitado com um sistema colaborativo de arquivos?
        </>
    )
}

const Text7 = () => {
    return (
        <>
            Assim, o documento poderia ser editado ao mesmo tempo por Norma e Roberta, sem deixar 
            dúvidas sobre qual é a verdadeira versão do relatório.
        </>
    )
}

const Text8 = () => {
    return (
        <>
            Além disso, ele estaria armazenado na nuvem, sem necessidade de realizar o envio de 
            um novo e-mail com anexo a cada versão criada.
        </>
    )
}
    
const data = [
    {
        title: <Text1 />,
        imgCarrousel: img1
    },
    {
        title: <Text2 />,
        imgCarrousel: img2
    },
    {
        title: <Text3 />,
        imgCarrousel: img3
    },
    {
        title: <Text4 />,
        imgCarrousel: img4
    },
    {
        title: <Text5 />,
        imgCarrousel: img5
    },
    {
        title: <Text6 />,
        imgCarrousel: img6
    },
    {
        title: <Text7 />,
        imgCarrousel: img7
    },
    {
        title: <Text8 />,
        imgCarrousel: img8
    }
]

export default data