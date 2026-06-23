'use client'

import { useScheduling } from "@/hook/UseScheduling"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"

type SchedulingTypeServiceCardType = {
    icon: IconDefinition
    price: number
    service: string,
    duration: number,
    active: boolean
}

export function SchedulingTypeServiceCard(props: SchedulingTypeServiceCardType) {

    const {setScheduling} = useScheduling()

    return (
        <div className={`flex flex-row justify-between p-4 max-sm:p-2 border font-dmsans hover:border-secondary hover:cursor-pointer transition-colors duration-200 ${props.active ? 'border-secondary bg-lowbg' : 'border-secondary/40'}`}
            onClick={() => {
                setScheduling(prev => prev.services.includes(props.service) ? ({...prev, services: prev.services.filter(service => service !== props.service), prices: prev.prices.filter(price => price !== props.price), durations: prev.durations.filter(duration => duration !== props.duration)}) : ({...prev, services: [...prev.services, props.service], prices: [...prev.prices, props.price], durations: [...prev.durations, props.duration]}))
            }}
        >
            <div className="flex flex-row gap-4 items-center max-sm:gap-2">
                <FontAwesomeIcon className={`border border-secondary/40 p-3 transition-colors duration-200 ${props.active ? 'bg-secondary text-main' : 'text-secondary'}`} icon={props.icon} />
                <div className="flex flex-col">
                    <h4 className="text-main text-[clamp(0.8rem,4vw,1rem)]">{props.service}</h4>
                    <p className="text-low text-[clamp(0.8rem,4vw,1rem)]">{props.duration} min</p>
                </div>
            </div>
            <p className="text-secondary text-[clamp(0.8rem,4vw,1rem)]">R$ {props.price}</p>
        </div>
    )
}