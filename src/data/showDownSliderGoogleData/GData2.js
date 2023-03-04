// image
import minimalista1 from '../../assets/images/google/workspace/showDownSlider/2-minimalista.png'
import inteligenciaArtificial2 from '../../assets/images/google/workspace/showDownSlider/2-inteligenciaArtificial.png'
import produtividade3 from '../../assets/images/google/workspace/showDownSlider/2-produtividade.png'
import manutencao4 from '../../assets/images/google/workspace/showDownSlider/2-manutencao.png'
import imgModal1 from '../../assets/images/google/workspace/showDownSlider/imgModal1.png'
import imgModal2 from '../../assets/images/google/workspace/showDownSlider/imgModal2.png'
import imgModal3 from '../../assets/images/google/workspace/showDownSlider/imgModal3.png'
import imgModal4 from '../../assets/images/google/workspace/showDownSlider/imgModal4.png'

// modal image

const data = [
    {
        image: minimalista1,
        display: false,
        texts: [
            'Minimalista'
        ],
        modal: {
            isBigModal: false,
            image: imgModal1,
            title: 'Minimalista e robusto',
            p: [
                `Interface amigável que destaca<br> as ferramentas úteis e mais recorrentes.`,
            ]
        },
    },

    {
        image: inteligenciaArtificial2,
        display: false,
        texts: [
            'Inteligência Artificial'
        ],
        modal: {
            isBigModal: false,
            image: imgModal2,
            title: 'Inteligência Artificial Nativa',
            p: [
                `Integração instantânea com recursos<br> baseados em IA* para automatização 
                de tarefas.`,
                `<br><span style="color: #BD4AFF;" >*IA = Inteligência artificial</span>`
            ],
        },
    },

    {
        image: produtividade3,
        display: false,
        texts: [
            'Produtividade'
        ],
        modal: {
            isBigModal: false,
            image: imgModal3,
            title: 'Produtividade e facilidade',
            p: [
                `Ferramentas práticas que impactam<br> diretamente na produtividade dos usuários.`,
            ]
        },
    },
    {
        image: manutencao4,
        display: false,
        texts: [
            'Manutenção'
        ],
        modal: {
            isBigModal: false,
            image: imgModal4,
            title: 'Manutenção Integrada',
            p: [
                `Plataforma com atualizações automáticas<br> e administração completa de usuários.`,
            ]
        },
    },
]

export default data