import { SchedulingButtons } from "../SchedulingButtons/SchedulingButtons"

import type { SchedulingSectionType } from "../SchedulingSection"

import { useScheduling } from "@/hook/UseScheduling"

export function SchedulingConfirmation(props: SchedulingSectionType) {

    const {scheduling, setScheduling} = useScheduling()

    const daysWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

    return (
        <div className=" flex flex-col gap-5">
            <h3 className="text-main text-[clamp(1rem,5vw,3rem)] font-[--font-bodoni] leading-none">Confirmar agendamento</h3>

            <div className="bg-lowbg flex flex-col gap-5 p-4 border border-low/50 font-dmsans">
                <div className="flex flex-row justify-between flex-wrap">
                    <h4 className="text-low basis-2">{scheduling.services.length <= 1 ?'SERVIÇO' : 'SERVIÇOS'}</h4>
                    <div className="flex flex-row gap-5 flex-wrap">
                        {scheduling.services.map((item, index) => <p key={`${item}-${index}`} className="text-main">{item}</p>)}
                    </div>
                </div>

                <hr className="border-low/30" />

                <div className="flex flex-row justify-between flex-wrap">
                    <h4 className="text-low">PREÇO</h4>
                    <p className="text-main">R${scheduling.prices.reduce((i, price) => i + price)},00</p>
                </div>
                
                <hr className="border-low/30" />

                <div className="flex flex-row justify-between flex-wrap">
                    <h4 className="text-low">DURAÇÃO</h4>
                    <p className="text-main">{scheduling.durations.reduce((i, duration) => i + duration)} min</p>
                </div>

                <hr className="border-low/30" />

                <div className="flex flex-row justify-between flex-wrap">
                    <h4 className="text-low">BARBEIRO</h4>
                    <p className="text-main">{scheduling.barber}</p>
                </div>

                <hr className="border-low/30" />

                <div className="flex flex-row justify-between flex-wrap">
                    <h4 className="text-low">DATA</h4>
                    <p className="text-main">{daysWeek[scheduling.dayWeek]}. {scheduling.day} de {scheduling.month}</p>
                </div>

                <hr className="border-low/30" />

                <div className="flex flex-row justify-between flex-wrap">
                    <h4 className="text-low">HORÁRIO</h4>
                    <p className="text-main">{scheduling.hour}</p>
                </div>

                <hr className="border-low/30" />
            </div>

            <form className="flex flex-col gap-2">
                <input className="border border-low/50 bg-lowbg text-low p-5 focus:border-secondary focus:outline-none transition-colors duration-200" type="text" placeholder="Seu nome completo" required
                    onChange={(e) => {
                        setScheduling(prev => ({...prev, client: e.target.value}))
                    }}
                />
                <input className="border border-low/50 bg-lowbg text-low p-5 focus:border-secondary focus:outline-none transition-colors duration-200" type="text" placeholder="Seu WhatsApp com DDD"
                    onChange={(e) => {
                        setScheduling(prev => ({...prev, phone: e.target.value}))
                    }}
                />
            </form>

            <SchedulingButtons buttonBack step={props.step} disableCondition={scheduling.phone.length < 9 || scheduling.client.length < 10} lastStep/>
        </div>
    )
}