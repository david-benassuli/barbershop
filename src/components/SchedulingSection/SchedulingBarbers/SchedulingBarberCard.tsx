'use client'

import { useScheduling } from "@/hook/UseScheduling"

import Image from "next/image"

type SchedulingBarberCardType = {
    url: string,
    barber: string,
    cut: string,
    exp: number,
    active: boolean
}

export function SchedulingBarberCard(props: SchedulingBarberCardType) {

    const {setScheduling} = useScheduling()

    return (
        <div className={`flex flex-row gap-4 p-4 border font-dmsans hover:border-secondary hover:cursor-pointer transition-colors duration-200 ${props.active ? 'border-secondary bg-lowbg' : 'border-secondary/40'}`}
            onClick={() => {
                setScheduling(prev => ({...prev, barber: props.barber}))
            }}
        >
            <Image
                src={props.url}
                alt={`Imagem do barbeiro ${props.barber}`}
                width={50}
                height={50}
            />

            <div className="flex flex-col font-dmsans">
                <h3 className="text-main">{props.barber}</h3>
                <p className="text-secondary text-[0.9rem]">{props.cut}</p>
                <p className="text-low text-[0.7rem]">{props.exp} ANOS DE EXP.</p>
            </div>
        </div>
    )
}