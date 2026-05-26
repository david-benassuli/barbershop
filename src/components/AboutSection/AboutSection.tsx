'use client'

import { Title } from "../Title"
import { Subtitle } from "../Subtitle"
import { Description } from "../Description"

import { AboutCard } from "./AboutCard"

import { Reveal } from "../Reveal"

export function AboutSection() {
    return (
        <section className="bg-highbg grid grid-cols-2 gap-[1vw]
                            max-lg:flex max-lg:flex-col max-lg:gap-4
        " id="about-section">
            <Reveal duration={1}>
                <div className="h-full border border-secondary/20 -translate-5">
                    <img className="w-full translate-5" src="/about.jpg" alt="About Section Image"/>
                </div>
            </Reveal>

            <div className="flex flex-col justify-between gap-2
                            max-lg:gap-4
            ">
                <Reveal duration={0.8}>
                    <Title value="NOSSA HISTÓRIA" />
                </Reveal>
                <Reveal duration={0.8}>
                    <Subtitle value="Tradição e modernidade em harmonia." />
                </Reveal>
                <Reveal duration={0.8}>
                    <Description value="Fundada em 2015, a Nobre nasceu da paixão pelo cuidado masculino. Começamos com uma única cadeira e a convicção de que cada homem merece o melhor atendimento possível." />
                </Reveal>
                <Reveal duration={0.8}>
                    <Description value="Ao longo dos anos, construímos uma equipe de barbeiros excepcionais, cada um com sua técnica única, unidos pela mesma filosofia: o corte perfeito é aquele que revela o melhor de você." />
                </Reveal>
                <Reveal duration={0.8}>
                    <Description value="Nosso espaço foi concebido para oferecer uma experiência completa — do ambiente ao acabamento — com produtos de origem controlada e atenção aos mínimos detalhes." />
                </Reveal>

                <hr className="border-secondary/20" />

                <div className="flex flex-row flex-wrap justify-between items-center gap-2">
                    <Reveal duration={0.5}>
                        <AboutCard title="9+" subtitle="ANOS DE TRADIÇÃO"/>
                    </Reveal>
                    <Reveal duration={0.8}>
                        <AboutCard title="3" subtitle="BARBEIROS"/>
                    </Reveal>
                    <Reveal duration={1.1}>
                        <AboutCard title="15+" subtitle="SERVIÇOS"/>
                    </Reveal>
                    <Reveal duration={1.4}>
                        <AboutCard title="5★" subtitle="AVALIAÇÃO"/>
                    </Reveal>
                </div>
            </div>

        </section>
    )
}