import img1 from '../../assets/images/google/workspace/carrousel-3/1.png'
import img2 from '../../assets/images/google/workspace/carrousel-3/2.png'
import img3 from '../../assets/images/google/workspace/carrousel-3/3.png'
import img4 from '../../assets/images/google/workspace/carrousel-3/4.png'
import img5 from '../../assets/images/google/workspace/carrousel-3/5.png'
import img6 from '../../assets/images/google/workspace/carrousel-3/6.png'
import img7 from '../../assets/images/google/workspace/carrousel-3/7.png'

const Text1 = () => {
    return (
        <>
            Lorena gerencia um laboratório de química analítica, que funciona dentro de uma 
            universidade.
        </>
    )
}

const Text2 = () => {
    return (
        <>
            Atualmente, a instituição possui contratos com diferentes fornecedores de softwares, 
            tanto para uso prático de edição de texto para relatórios, quanto para tarefas mais 
            específicas.
        </>
    )
}

const Text3 = () => {
    return (
        <>
            O péssimo comportamento de Lucas, um funcionário da equipe que vem incomodando a 
            todos há algum tempo, obrigou Lorena a demiti-lo na semana passada.
        </>
    )
}

const Text4 = () => {
    return (
        <>
            Como vingança, Lucas disponibilizou na internet o código da aplicação utilizado no 
            laboratório, já que ainda possuía acesso à rede.
        </>
    )
}

const Text5 = () => {
    return (
        <>
            Você consegue identificar como esse problema poderia ser evitado?
        </>
    )
}

const Text6 = () => {
    return (
        <>
            Com o Workspace, a equipe de Lorena teria desvinculado o acesso de Lucas à nuvem da 
            empresa através do Endpoint Managment, com rapidez e facilidade.
        </>
    )
}

const Text7 = () => {
    return (
        <>
            Além disso, a equipe poderia utilizar o Collab para o manuseio de ferramentas com 
            código Python.
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
    }
]

export default data