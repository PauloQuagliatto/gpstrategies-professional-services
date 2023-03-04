import { useState, useEffect, useRef } from 'react'
import './styles.css'

import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import { ReactComponent as Icon1 } from '../../../assets/images/carrousel/circularCarrousel/img-1.svg';
import { ReactComponent as Icon2 } from '../../../assets/images/carrousel/circularCarrousel/img-2.svg';
import { ReactComponent as Icon3 } from '../../../assets/images/carrousel/circularCarrousel/img-3.svg';
import { ReactComponent as Icon4 } from '../../../assets/images/carrousel/circularCarrousel/img-4.svg';
import { ReactComponent as Icon5 } from '../../../assets/images/carrousel/circularCarrousel/img-5.svg';
import { ReactComponent as Icon6 } from '../../../assets/images/carrousel/circularCarrousel/img-6.svg';
import { ReactComponent as Icon7 } from '../../../assets/images/carrousel/circularCarrousel/img-7.svg';
import { ReactComponent as Icon8 } from '../../../assets/images/carrousel/circularCarrousel/img-8.svg';

const data = [
    {
        title: "Item 1",
        text: "Na página inicial, acessando o Vivo Play, temos os aplicativos Nextflix, Amazon Prime Video, Youtube e Youtube Kids. Para Netflix, a contratação de planos é realizada diretamente com a Vivo.",
        image: <Icon1 />
    },
    {
        title: "Item 2",
        text: "Com este recurso, o cliente pode procurar por título de um filme, programas de TV, elenco ou canal.",
        image: <Icon2 />
    },
    {
        title: "Item 3",
        text: "Na página inicial, acessando através do direcional para baixo do controle remoto. Existem tiras por tema, indicações de conteúdos, programas de TV etc.",
        image: <Icon3 />
    },
    {
        title: "Item 4",
        text: "Na página inicial, acessando o Vivo Play, temos os aplicativos Nextflix, Amazon Prime Video, Youtube e Youtube Kids. Para Netflix, a contratação de planos é realizada diretamente com a Vivo.",
        image: <Icon4 />
    },
    {
        title: "Item 5",
        text: "Com este recurso, o cliente pode procurar por título de um filme, programas de TV, elenco ou canal.",
        image: <Icon5 />
    },
    {
        title: "Item 6",
        text: "Na página inicial, acessando através do direcional para baixo do controle remoto. Existem tiras por tema, indicações de conteúdos, programas de TV etc.",
        image: <Icon6 />
    },
    {
        title: "Item 7",
        text: "Na página inicial, acessando através do direcional para baixo do controle remoto. Existem tiras por tema, indicações de conteúdos, programas de TV etc.",
        image: <Icon7 />
    },
    {
        title: "Item 8",
        text: "Na página inicial, acessando através do direcional para baixo do controle remoto. Existem tiras por tema, indicações de conteúdos, programas de TV etc.",
        image: <Icon8 />
    },
]


let rendered = false
let items, numItems, itemStep, wrapProgress, snap, wrapTracker, tracker = { item: 0 }, tl

const CircularCarrousel = () => {
    // eslint-disable-next-line
    const [itemActive, setItemActive] = useState(0)
    const [totalItems, setTotalItems] = useState()

    const circleRef = useRef()
    const svgRef = useRef()
    
    useEffect(() => {
        gsap.registerPlugin(MotionPathPlugin)

        items = gsap.utils.toArray(".circular-carrousel .item")
        numItems = items.length
        itemStep = 1 / numItems
        wrapProgress = gsap.utils.wrap(0, 1)
        snap = gsap.utils.snap(itemStep)
        wrapTracker = gsap.utils.wrap(0, numItems)

        setTotalItems(numItems)
    }, [])

    useEffect(() => {
        if(!rendered) {
            rendered = true

            const circlePath = MotionPathPlugin.convertToPath('.circular-carrousel #holder', false)[0]
            circlePath.id = 'circlePath'
            document.querySelector('.circular-carrousel svg.circle-svg').prepend(circlePath)

            gsap.set(items, {
                motionPath: {
                    path: circlePath,
                    align: circlePath,
                    alignOrigin: [0.5, 0.5],
                    end: (i) => i / items.length,
                },
                scale: .6,
            });

            tl = gsap.timeline({ paused: true, reversed: true });

            tl.to(".circular-carrousel .wrapper", {
                rotation: 360,
                transformOrigin: "center",
                duration: 1,
                ease: "none",
            });

            tl.to(
                items,
                {
                    rotation: "-=360",
                    transformOrigin: "center",
                    duration: 1,
                    ease: "none",
                },
                0
            );

            tl.to(
                tracker,
                {
                    item: numItems,
                    duration: 1,
                    ease: "none",
                    modifiers: {
                        item(value) {
                            return wrapTracker(numItems - Math.round(value));
                        },
                    },
                },
                0
            );
        }
    }, [itemActive])

    const handleClick = i => {
        let current = tracker.item,
        activeItem = i

        if (i === current) {
            return;
        }

        setItemActive(activeItem)
        
        var diff = current - i;

        if (Math.abs(diff) < numItems / 2) {
            moveWheel(diff * itemStep);
        } else {
            var amt = numItems - Math.abs(diff);

            if (current > i) {
                moveWheel(amt * -itemStep);
            } else {
                moveWheel(amt * itemStep);
            }
        }
    }

    const moveWheel = amount => {
        let progress = tl.progress();
        tl.progress(wrapProgress(snap(tl.progress() + amount)));
        let next = tracker.item;
        tl.progress(progress);
    
        setItemActive(next)
    
        gsap.to(tl, {
            progress: snap(tl.progress() + amount),
            modifiers: {
                progress: wrapProgress,
            },
        });
    }

    const handlePrevButton = () => {
        moveWheel(itemStep)
    }

    const handleNextButton = () => {
        moveWheel(-itemStep)
    }

    return (
        <div className="circular-wrapper">
            <h4>Conheça o carrossel giratório</h4>
            <div className="circular-carrousel">
                <div className="content">
                    <div className="wrapper">
                        { data.map((item, index) => {
                            return (
                                <div 
                                    className={`item ${index + 1} ${ (itemActive === index) && 'active' }`} 
                                    key={index}
                                    onClick={_ => handleClick(index)}>
                                    { item.image }
                                </div>
                            )
                        }) }
                        <svg viewBox="0 0 300 300" ref={svgRef} className="circle-svg">
                            <circle id="holder" ref={circleRef} className="st0" cx="151" cy="151" r="150" />
                        </svg>
                    </div>
                </div>
                <div className="text-area">
                    <div className='text-item'>
                        <h3>{ data[itemActive].title }: </h3>
                        <p>
                            { data[itemActive].text }
                        </p>
                    </div>
                    <div className="controls">
                        <button className="prev" onClick={handlePrevButton}>
                            <span className="web">&uArr;</span>
                            <span className="mobile">&lArr;</span>
                        </button>
                        <p><span>0{itemActive + 1}</span>/0{totalItems}</p>
                        <button className="next" onClick={handleNextButton}>
                            <span className="web">&dArr;</span>
                            <span className="mobile">&rArr;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CircularCarrousel