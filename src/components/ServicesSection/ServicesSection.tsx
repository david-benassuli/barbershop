'use client'

import { Title } from "../Title"
import { Subtitle } from "../Subtitle"
import { Description } from "../Description"

import { ServicesCard } from "./ServicesCard"

import { faScissors } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faPerson } from "@fortawesome/free-solid-svg-icons"
import { faDroplet } from "@fortawesome/free-solid-svg-icons"

import { Reveal } from "../Reveal"

export function ServicesSection() {
    return (
        <section className="bg-mediumbg flex flex-col gap-10" id="services-section">
            <Reveal duration={0.5}>
                <Title value="SERVIÇOS" feature/>
            </Reveal>
            
            <Reveal duration={0.5}>
                <div className="flex flex-row flex-wrap justify-between items-center gap-5">
                    <Subtitle value="O que oferecemos" />
                    <Description value="Cada serviço foi pensado para oferecer o melhor resultado com máximo conforto e exclusividade." widthBox={320}/>
                </div>
            </Reveal>

            <div className="grid grid-cols-3 gap-1
                            max-lg:grid-cols-2
                            max-sm:grid-cols-1
            ">
                <Reveal duration={0.6}>
                    <ServicesCard icon={faScissors} price={65} type="Corte Clássico" description="Corte masculino personalizado com técnica profissional e acabamento impecável." time={45} />
                </Reveal>
                <Reveal duration={0.6}>
                    <ServicesCard icon={faStar} price={55} type="Barba Completa" description="Modelagem, hidratação e acabamento refinado para uma barba sempre perfeita." time={35} />
                </Reveal>
                <Reveal duration={0.6}>
                    <ServicesCard icon={faPerson} price={65} type="Sobrancelha" description="Design de precisão para sobrancelhas bem definidas e harmoniosas." time={20} />
                </Reveal>
                <Reveal duration={0.6}>
                    <ServicesCard icon={faDroplet} price={120} type="Pigmentação" description="Coloração premium de barba e cabelo com produtos de altíssima qualidade." time={60} />
                </Reveal>
                <Reveal duration={0.6}>
                    <ServicesCard icon={faStar} price={150} type="Combo Premium" description="Corte + Barba + Hidratação. A experiência completa da Nobre Barbearia." time={90} />
                </Reveal>
                <Reveal duration={0.6}>
                    <ServicesCard icon={faDroplet} price={45} type="Hidratação" description="Tratamento intensivo para cabelos ressecados com ativos botânicos premium." time={30} />
                </Reveal>
            </div>
        </section>
    )
}