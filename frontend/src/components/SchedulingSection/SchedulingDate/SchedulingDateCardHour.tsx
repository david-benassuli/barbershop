'use client'

import { useScheduling } from "@/hook/UseScheduling"

type SchedulingDateCardHourType = {
    hour: string,
    active: boolean
}

export function SchedulingDateCardHour(props: SchedulingDateCardHourType) {

    const {setScheduling} = useScheduling()

    return (
        <div className={`flex items-center justify-center hover:cursor-pointer border p-2 transition-colors duration-200 ${props.active ? 'bg-lowbg text-secondary border-secondary' : 'border-low/50 text-low hover:border-low'}`}
            onClick={() => setScheduling(prev => ({...prev, hour: props.hour}))}
        >
            <p className="">{props.hour}</p>
        </div>
    )
}