'use client'

import { createContext, ReactNode, useState } from "react";

type SchedulingType = {
    step: number,
    idService: number,
    service: string,
    price: number,
    barber: string,
    date: string,
    name: string,
    phone: string
}

type SchedulingContextType = {
    scheduling: SchedulingType,
    setScheduling: React.Dispatch<React.SetStateAction<SchedulingType>>
}

export const SchedulingContext = createContext<SchedulingContextType | null>(null)

const initialScheduling: SchedulingType = {
    step: 1,
    idService: 0,
    service: '',
    price: 0,
    barber: '',
    date: '',
    name: '',
    phone: ''
}

export function SchedulingProvider({children}: {children: ReactNode}) {

    const [scheduling, setScheduling] = useState<SchedulingType>(initialScheduling)

    return (
        <SchedulingContext.Provider value={{scheduling, setScheduling}}>
            {children}
        </SchedulingContext.Provider>
    )
}