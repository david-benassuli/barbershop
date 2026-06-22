'use client'

import { Reveal } from "@/components/Reveal"

import { SchedulingTypeServiceCard } from "./SchedulingTypeServiceCard"

import { faScissors } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faPerson } from "@fortawesome/free-solid-svg-icons"
import { faDroplet } from "@fortawesome/free-solid-svg-icons"
import { SchedulingButtons } from "../SchedulingButtons/SchedulingButtons"

import { useScheduling } from "@/hook/UseScheduling"

import type { SchedulingSectionType } from "../SchedulingSection"

export function SchedulingTypeService(props: SchedulingSectionType) {

    const {scheduling} = useScheduling()

    return (
        <div className="flex flex-col gap-10">
            <Reveal duration={0.5}>
                <h3 className="text-main text-[clamp(1rem,5vw,3rem)] font-[--font-bodoni] leading-none">Escolha o serviço</h3>
            </Reveal>

            <div className="flex flex-col gap-1
                md:grid md:grid-cols-2
            ">
                <Reveal duration={0.5}>
                    <SchedulingTypeServiceCard icon={faScissors} service="Corte Clássico" duration={45} price={65} active={scheduling.services.includes('Corte Clássico')} />
                </Reveal>
                <Reveal duration={0.6}>
                    <SchedulingTypeServiceCard icon={faStar} service="Barba Completa" duration={35} price={55} active={scheduling.services.includes('Barba Completa')} />
                </Reveal>
                <Reveal duration={0.7}>
                    <SchedulingTypeServiceCard icon={faPerson} service="Sombrancelha" duration={20} price={25} active={scheduling.services.includes('Sombrancelha')} />
                </Reveal>
                <Reveal duration={0.8}>
                    <SchedulingTypeServiceCard icon={faDroplet} service="Pigmentação" duration={60} price={120} active={scheduling.services.includes('Pigmentação')} />
                </Reveal>
                <Reveal duration={0.9}>
                    <SchedulingTypeServiceCard icon={faStar} service="Combo Premium" duration={90} price={150} active={scheduling.services.includes('Combo Premium')} />
                </Reveal>
                <Reveal duration={1}>
                    <SchedulingTypeServiceCard icon={faDroplet} service="Hidratação" duration={30} price={45} active={scheduling.services.includes('Hidratação')} />
                </Reveal>
            </div>

            <SchedulingButtons buttonBack={false} step={props.step} disableCondition={!scheduling.services.length}/>
        </div>
    )
}