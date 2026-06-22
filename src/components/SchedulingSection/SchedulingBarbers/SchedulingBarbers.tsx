'use client'

import { SchedulingBarberCard } from "./SchedulingBarberCard"

import { useScheduling } from "@/hook/UseScheduling"

import { SchedulingButtons } from "../SchedulingButtons/SchedulingButtons"

import type { SchedulingSectionType } from "../SchedulingSection"

export function SchedulingBarbers(props: SchedulingSectionType) {

    const {scheduling} = useScheduling()

    return (
        <div className="flex flex-col gap-10 md:justify-between">
            <h3 className="text-main text-[clamp(1rem,5vw,3rem)] font-[--font-bodoni] leading-none">Escolha o barbeiro</h3>

            <div className="flex flex-col gap-4">
                <SchedulingBarberCard url="/barber1.avif" barber="Rafael Nobre" cut="Cortes Clássicos & Fade" exp={12} active={scheduling.barber === "Rafael Nobre"} />
                <SchedulingBarberCard url="/barber2.avif" barber="Marcus Vinicius" cut="Barba e Pigmentação" exp={8} active={scheduling.barber === "Marcus Vinicius"} />
                <SchedulingBarberCard url="/barber3.avif" barber="Diego Santos" cut="Texturas & Degradês" exp={6} active={scheduling.barber === "Diego Santos"} />
            </div>

            <SchedulingButtons buttonBack step={props.step} disableCondition={!scheduling.barber}/>
        </div>
    )
}