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
        <div className={`flex flex-row justify-between p-4 border font-dmsans hover:border-secondary hover:cursor-pointer transition-colors duration-200 ${props.active ? 'border-secondary bg-lowbg' : 'border-secondary/40'}`}
            onClick={() => {
                setScheduling(prev => ({...prev, service: props.service, price: props.price, duration: props.duration}))
            }}
        >
            <div className="flex flex-row gap-4 items-center">
                <FontAwesomeIcon className={`border border-secondary/40 p-3 transition-colors duration-200 ${props.active ? 'bg-secondary text-main' : 'text-secondary'}`} icon={props.icon} />
                <div className="flex flex-col">
                    <h4 className="text-main">{props.service}</h4>
                    <p className="text-low">{props.duration} min</p>
                </div>
            </div>
            <p className="text-secondary">R$ {props.price}</p>
        </div>
    )
}