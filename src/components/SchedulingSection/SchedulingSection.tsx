'use client'

import { Reveal } from "../Reveal"

import { Title } from "../Title"
import { Subtitle } from "../Subtitle"

import { SchedulingStepsContainer } from "./SchedulingSteps/SchedulingStepsContainer"
import { SchedulingTypeService } from "./SchedulingTypeService/SchedulingTypeService"
import { SchedulingBarbers } from "./SchedulingBarbers/SchedulingBarbers"
import { SchedulingDate } from "./SchedulingDate/SchedulingDate"
import { SchedulingRestart } from "./SchedulingRestart/SchedulingRestart"

import { useScheduling } from "@/hook/UseScheduling"
import { SchedulingConfirmation } from "./SchedulingConfimation/SchedulingConfirmation"
import { useEffect, useRef } from "react"

export type SchedulingSectionType = {
    step: 1 | 2 | 3 | 4
}

export function SchedulingSection() {

    const {scheduling} = useScheduling()

    const daysWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }, [scheduling.step])

    return (
        <section ref={sectionRef} id="scheduling-section" className="bg-highbg flex flex-col gap-10">
            {scheduling.step === 5 ? <SchedulingRestart/> : <>
                <Reveal duration={0.5}>
                    <Title value="AGENDAMENTO" />
                </Reveal>
                <Reveal duration={0.5}>
                    <Subtitle value="Reserve sua experiência" />
                </Reveal>
                <div className=" flex flex-col gap-10
                lg:grid lg:grid-cols-[3fr_7fr] lg:gap-2">
                    <div className="flex flex-col gap-10">

                        <SchedulingStepsContainer/>

                        <Reveal duration={0.5}>
                            <div className="bg-lowbg flex flex-col gap-2 p-4 border border-low/50">
                                <h4 className="text-secondary">RESUMO</h4>
                                {scheduling.service && <div className="flex flex-col">
                                    <h5 className="text-low text-sm">Serviço</h5>
                                    <p className="text-main">{scheduling.service} - R${scheduling.price},00</p>
                                </div>}
                                {scheduling.barber && <div className="flex flex-col">
                                    <h5 className="text-low text-sm">Barbeiro</h5>
                                    <p className="text-main">{scheduling.barber}</p>
                                </div>}
                                {(scheduling.hour && scheduling.day) && <div className="flex flex-col">
                                    <h5 className="text-low text-sm">Data & Hora</h5>
                                    <p className="text-main">{daysWeek[scheduling.dayWeek]}. {scheduling.day} de {months[scheduling.month]} às {scheduling.hour}</p>
                                </div>}
                            </div>
                        </Reveal>
                    </div>
                    {scheduling.step === 1 && <SchedulingTypeService step={1}/>}
                    {scheduling.step === 2 && <SchedulingBarbers step={2}/>}
                    {scheduling.step === 3 && <SchedulingDate step={3}/>}
                    {scheduling.step === 4 && <SchedulingConfirmation step={4}/>}
                </div>
            </>}
        </section>
    )
}