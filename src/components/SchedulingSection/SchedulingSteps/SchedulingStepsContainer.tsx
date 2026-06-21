'use client'

import { SchedulingStep } from "./SchedulingStep"

import { useScheduling } from "@/hook/UseScheduling"

export function SchedulingStepsContainer() {

    const {scheduling} = useScheduling()

    return (
        <div className="flex flex-col">
            <SchedulingStep step={1} title="Serviço" active={scheduling.step === 1} />
            <SchedulingStep step={2} title="Barbeiro" active={scheduling.step === 2} />
            <SchedulingStep step={3} title="Data & Horário" active={scheduling.step === 3} />
            <SchedulingStep step={4} title="Confirmação" active={scheduling.step === 4} />
        </div>
    )
}