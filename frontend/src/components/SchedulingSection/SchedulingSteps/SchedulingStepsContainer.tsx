'use client'

import { Reveal } from "@/components/Reveal"

import { SchedulingStep } from "./SchedulingStep"

import { useScheduling } from "@/hook/UseScheduling"

export function SchedulingStepsContainer() {

    const {scheduling} = useScheduling()

    return (
        <div className="flex flex-col">
            <Reveal duration={0.5}>
                <SchedulingStep step={1} title="Serviço" active={scheduling.step === 1} />
            </Reveal>
            <Reveal duration={0.6}>
                <SchedulingStep step={2} title="Barbeiro" active={scheduling.step === 2} />
            </Reveal>
            <Reveal duration={0.7}>
                <SchedulingStep step={3} title="Data & Horário" active={scheduling.step === 3} />
            </Reveal>
            <Reveal duration={0.8}>
                <SchedulingStep step={4} title="Confirmação" active={scheduling.step === 4} />
            </Reveal>
        </div>
    )
}