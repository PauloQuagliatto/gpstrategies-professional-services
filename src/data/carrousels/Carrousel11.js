import img1 from '../../assets/images/google/workspace/dlp/seguranca-icon1.png'
import img2 from '../../assets/images/google/workspace/dlp/seguranca-icon2.png'
import img3 from '../../assets/images/google/workspace/dlp/seguranca-icon3.png'

const Text1 = () => {
    return (
        <>
            <span>Vazamento de dados e/ou documentos sigilosos.</span>
        </>
    )
}
 
const Text2 = () => {
    return (
        <>
            <span>Perdas de materiais.</span>
        </>
    )
}
 
const Text3 = () => {
    return (
        <>
            <span>Hackeamento de contas.</span>
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
]

export default data