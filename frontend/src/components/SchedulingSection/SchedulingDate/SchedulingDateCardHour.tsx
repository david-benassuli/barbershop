'use client'

import { useScheduling } from "@/hook/UseScheduling"

type SchedulingDateCardHourType = {
    hour: string,
    active: boolean
    blockedCondition: boolean,
    disabledCondition: boolean
}

export function SchedulingDateCardHour(props: SchedulingDateCardHourType) {

    const {setScheduling} = useScheduling()

    return (
        <button disabled={props.blockedCondition || props.disabledCondition} className={`flex items-center justify-center border p-2 transition-colors duration-200 ${props.blockedCondition ? 'disabled:cursor-not-allowed border-unaivalable text-unaivalable' : 'border-low/50 text-low'} ${props.active ? 'bg-lowbg text-secondary border-secondary' : ''} ${props.disabledCondition ? 'border-low/20 text-low/20' : 'hover:border-low hover:cursor-pointer'}`}
            onClick={() => setScheduling(prev => ({...prev, hour: props.hour}))}
        >
            <p className="">{props.hour}</p>
        </button>
    )
}