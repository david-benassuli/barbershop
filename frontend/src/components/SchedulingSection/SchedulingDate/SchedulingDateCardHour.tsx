'use client'

import { useScheduling } from "@/hook/UseScheduling"

type SchedulingDateCardHourType = {
    hour: string,
    active: boolean
    disableCondition: boolean
}

export function SchedulingDateCardHour(props: SchedulingDateCardHourType) {

    const {setScheduling} = useScheduling()

    return (
        <button disabled={props.disableCondition} className={`flex items-center justify-center hover:cursor-pointer border p-2 transition-colors duration-200 ${props.disableCondition ? 'disabled:cursor-not-allowed border-unaivalable text-unaivalable' : 'border-low/50 text-low hover:border-low'} ${props.active ? 'bg-lowbg text-secondary border-secondary' : ''}`}
            onClick={() => setScheduling(prev => ({...prev, hour: props.hour}))}
        >
            <p className="">{props.hour}</p>
        </button>
    )
}