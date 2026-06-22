'use client'

import { useScheduling } from "@/hook/UseScheduling"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

type SchedulingButtonsType = {
    buttonBack: boolean,
    step: 1 | 2 | 3 | 4,
    disableCondition?: boolean,
    lastStep?: boolean,
}

const API_URL = process.env.NEXT_PUBLIC_API_URL
console.log("API_URL:", process.env.NEXT_PUBLIC_API_URL)

export function SchedulingButtons(props: SchedulingButtonsType) {

    const {scheduling, setScheduling} = useScheduling()

    const daysWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

    return (
        <div className="flex flex-row gap-5 flex-wrap">
            {props.buttonBack && <button type="button" className="px-8 py-4 text-low/50 border border-low/50 hover:text-low hover:border-low hover:cursor-pointer transition-colors duration-200"
                onClick={() => setScheduling(prev => ({...prev, step: props.step - 1}))}
            >VOLTAR</button>}

            <button type="button" disabled={props.disableCondition} className={`self-start hover:cursor-pointer duration-200 px-8 py-4 flex flex-row gap-2 items-center disabled:cursor-not-allowed ${!props.disableCondition ? 'bg-secondary/80 hover:bg-secondary text-lowbg' : 'bg-secondary/20 text-lowbg/40'}`} 
                onClick={async () => {
                    setScheduling(prev => ({...prev, step: props.step + 1}))

                    if (props.lastStep) {
                        try {
                            await fetch(`${API_URL}/schedulings`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    services: scheduling.services,
                                    barber: scheduling.barber,
                                    dayWeek: daysWeek[scheduling.dayWeek],
                                    day: scheduling.day,
                                    month: scheduling.month,
                                    hour: scheduling.hour,
                                    client: scheduling.client,
                                    phone: scheduling.phone
                                })
                            })

                        } catch(err) {
                            console.log(err)
                        }
                    }
                }}
            >{props.lastStep ? 'CONFIRMAR': 'PRÓXIMO'} <FontAwesomeIcon className={`duration-200 w-4 h-4 ${!props.disableCondition ? 'hover:translate-x-2' : ''}`} icon={faArrowRight}/></button>
        </div>
    )
}