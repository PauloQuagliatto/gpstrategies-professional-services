import projetopadrao from '../../assets/images/google/workspace/comercializacao/projetopadrao.png'
import projetoespecial from '../../assets/images/google/workspace/comercializacao/projetoespecial.png'
import imgpadrao from '../../assets/images/google/workspace/comercializacao/imgprojetopadrao.png'
import imgespecial from '../../assets/images/google/workspace/comercializacao/imgprojetoespecial.png'

import imgTeste from '../../assets/images/confirme.png' // inserido por Flávio

const data = [
    {
        image: projetopadrao,
        display: true,
        texts: [
            'Projeto Padrão'
        ],
        modal: {
            image: imgpadrao,
            title: 'Licença Única',
            titleAlign: 'left',
            config: { justifyContent: 'space-between', width: '50rem', padding: '2rem' },
            imgSize: '12rem',
            paragraphMargin: '2rem',
            p: [
                `<ul>
                    <li>
                        <span>Nova contratação</span> de uma oferta da <span>mesma família</span> de produtos, respeitando a regra de até <span>300 licenças</span> para o plano Business e acima de 300 licenças para <span>Enterprise</span>;
                    </li><br>
                    <li>
                        <span>Upgrade</span> de todas as licenças da oferta atual do cliente para qualquer outro plano;
                    </li><br>
                    <li>
                        Projeto para <span>ampliar</span> licenças na oferta atual do cliente.
                    </li>
                </ul>`,
            ]
        },
    },
    {
        image: projetoespecial,
        display: false,
        texts: [
            'Projeto especial'
        ],
        modal: {
            image: imgespecial,
            title: 'Mix de licenças / PME e dispositivos',
            titleAlign: 'left',
            config: { justifyContent: 'space-between', width: '50rem', padding: '2rem' },
            imgSize: '12rem',
            paragraphMargin: '2rem',
            p: [
                `<ul>
                    <li>
                        <span>Novas contratações</span> de um <span>mix</span> de ofertas de produtos, independentemente da família;
                    </li><br>
                    <li>
                        <span>Ampliação</span> de licenças de outra oferta ou família para um cliente que já possui o Workspace;
                    </li><br>
                    <li>
                    Projeto para <span>ampliar</span> licenças na oferta atual do cliente.
                    </li>
                </ul>`,
                `<img src=${imgTeste} />`,
            ]
        },
    },
]

export default data