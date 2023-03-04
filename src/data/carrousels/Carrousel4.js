import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import '../../assets/styles/tooltip.css'

const tooltipConfigs = {
    float: false,
    class: 'personal-tooltip',
    clickable: false,
    delayHide: 200
}


const Text1 = () => {
    return (
        <>
            de mensagens de <span id='tooltip-1'>spam</span> são bloqueadas<br></br> pelo Google Workspace.

            <Tooltip
                anchorId={'tooltip-1'}
                float={tooltipConfigs.float}
                className={tooltipConfigs.class}
                clickable={tooltipConfigs.clickable}
                delayHide={tooltipConfigs.delayHide} >
                <p style={{ fontSize: '.9rem', padding: '0.5rem', }} >
                    *Spam = Conteúdos enviados por e-mail sem consentimento do usuário.<br/>
                    Exemplo: propagandas e boatos.'    
                </p>
            </Tooltip>
        </>
    )
}

const Text2 = () => {
    return (
        <>
            páginas da web são indexadas e apuradas em busca de software danoso.
        </>
    )
}

const Text3 = () => {
    return (
        <>
            URLs falsas, executáveis e extensões de navegador que podem conter vírus, conteúdo 
            indesejado ou tentativas de <span id='tooltip-2'>phishing</span> são detectados e suspensos.

            <Tooltip
                anchorId={'tooltip-2'}
                float={tooltipConfigs.float}
                className={tooltipConfigs.class}
                clickable={tooltipConfigs.clickable}
                delayHide={tooltipConfigs.delayHide} >
                <p style={{ fontSize: '.9rem', padding: 0 }} >
                    *Phishing = Fraude que ocorre a partir do envio de um e-mail falso se passando 
                    por uma instituição conhecida, conduzindo o usuário a uma página fake para 
                    roubar seus dados.
                </p>
            </Tooltip>
        </>
    )
}

const Text4 = () => {
    return (
        <>
            instâncias de software indesejados são notificadas aos usuários
        </>
    )
}

const Text5 = () => {
    return (
        <>
            instâncias de <span id='tooltip-3'>malware</span> suspeitos são comunicadas aos usuários.

            <Tooltip
                anchorId={'tooltip-3'}
                float={tooltipConfigs.float}f
                className={tooltipConfigs.class}
                clickable={tooltipConfigs.clickable}
                delayHide={tooltipConfigs.delayHide} >
                <p style={{ fontSize: '.9rem', padding: 0 }} >
                    * Malware = Software malicioso criado com o objetivo de ser executado sem 
                    consentimento do usuário.
                </p>
            </Tooltip>
        </>
    )
}

const data = [
    {
        title: '10 milhões',
        text: <Text1 />,
    },
    {
        title: '694.000',
        text: <Text2 />,

    },
    {
        title: '7.000',
        text: <Text3 />,

    },
    {
        title: '6.000',
        text: <Text4 />,

    },
    {
        title: '1.000',
        text: <Text5 />,
    }
]

export default data