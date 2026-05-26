'use client'

import { Title } from "../Title"
import { Subtitle } from "../Subtitle"
import { Description } from "../Description"

import { BarberCard } from "./BarberCard"

import { Reveal } from "../Reveal"

export function BarbersSection() {
    return (
        <section className="bg-mediumbg flex flex-col gap-10" id="barbers-section">
            <Reveal duration={1}>
                <Title value="EQUIPE" />
            </Reveal>
            <Reveal duration={1}>
                <div className="flex flex-row flex-wrap justify-between items-center gap-5">
                    <Subtitle value="Nossos barbeiros" />
                    <Description value="Profissionais altamente treinados, comprometidos com a excelência em cada atendimento." widthBox={320}/>
                </div>
            </Reveal>

            <div className="grid grid-cols-3 gap-5
                            max-md:flex max-md:flex-col
            ">
                <Reveal duration={1}>
                    <BarberCard url_img="/barber1.png" name="Rafael Nobre" cut="Cortes Clássicos & Fade" exp={12} insta="rafaelnobre"/>
                </Reveal>
                <Reveal duration={1.25}>
                    <BarberCard url_img="/barber2.png" name="Marcus Vinicius" cut="Barba & Pigmentação" exp={8} insta="marcusvinicius"/>
                </Reveal>
                <Reveal duration={1.5}>
                    <BarberCard url_img="/barber3.png" name="Diego Santos" cut="Texturas & Degradês" exp={6} insta="diegosantos"/>
                </Reveal>
            </div>
        </section>
    )
}