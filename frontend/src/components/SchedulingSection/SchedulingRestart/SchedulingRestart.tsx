'use client'

import { Reveal } from "@/components/Reveal"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

import { useScheduling } from "@/hook/UseScheduling"

export function SchedulingRestart() {

    const {restartScheduling} = useScheduling()

    return (
        <div className="flex flex-col gap-5 items-center justify-center">
            <Reveal duration={0.5}>
                <FontAwesomeIcon className="text-3xl p-8 border border-secondary text-secondary" icon={faCheck} />
            </Reveal>

            <Reveal duration={0.6}>
                <h3 className="text-main text-[clamp(1rem,5vw,3rem)] font-[--font-bodoni] leading-none">Agendamento confirmado!</h3>
            </Reveal>
            <Reveal duration={0.7}>
                <p className="text-low font-dmsans text-sm text-center">Seu horário foi reservado com sucesso. Uma confirmação será enviada ao seu WhatsApp em instantes.</p>
            </Reveal>

            <Reveal duration={0.8}>
                <button className="px-5 py-3 border border-secondary/40 text-secondary hover:border-secondary hover:cursor-pointer transition-colors duration-200" type="button"
                    onClick={restartScheduling}
                >NOVO AGENDAMENTO</button>
            </Reveal>
        </div>
    )
}