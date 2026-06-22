'use client'

import { createContext, ReactNode, useState } from "react";

type SchedulingType = {
    step: number,
    service: string,
    price: number,
    duration: number,
    barber: string,
    dayWeek: number,
    day: number,
    month: number,
    hour: string,
    client: string,
    phone: string
}

type SchedulingContextType = {
    scheduling: SchedulingType,
    setScheduling: React.Dispatch<React.SetStateAction<SchedulingType>>
    restartScheduling: () => void
}

export const SchedulingContext = createContext<SchedulingContextType | null>(null)

const initialScheduling: SchedulingType = {
    step: 1,
    service: '',
    price: 0,
    duration: 0,
    barber: '',
    dayWeek: -1,
    day: 0,
    month: 0,
    hour: "",
    client: '',
    phone: ''
}

export function SchedulingProvider({children}: {children: ReactNode}) {

    const [scheduling, setScheduling] = useState<SchedulingType>(initialScheduling)

    function restartScheduling() {
        setScheduling(initialScheduling)
    }

    return (
        <SchedulingContext.Provider value={{scheduling, setScheduling, restartScheduling}}>
            {children}
        </SchedulingContext.Provider>
    )
}