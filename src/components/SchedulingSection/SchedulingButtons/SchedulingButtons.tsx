'use client'

import { useScheduling } from "@/hook/UseScheduling"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

type SchedulingButtonsType = {
    buttonBack: boolean,
    step: 1 | 2 | 3 | 4,
    disableCondition?: boolean,
    lastStep?: boolean
}

export function SchedulingButtons(props: SchedulingButtonsType) {

    const {setScheduling} = useScheduling()

    return (
        <div className="flex flex-row gap-5">
            {props.buttonBack && <button type="button" className="px-8 py-4 text-low/50 border border-low/50 hover:text-low hover:border-low hover:cursor-pointer transition-colors duration-200"
                onClick={() => setScheduling(prev => ({...prev, step: props.step - 1}))}
            >VOLTAR</button>}

            <button type="button" disabled={props.disableCondition} className={`self-start hover:cursor-pointer duration-200 px-8 py-4 flex flex-row gap-2 items-center disabled:cursor-not-allowed ${!props.disableCondition ? 'bg-secondary/80 hover:bg-secondary text-lowbg' : 'bg-secondary/20 text-lowbg/40'}`} 
                onClick={() => setScheduling(prev => ({...prev, step: props.step + 1}))}
            >{props.lastStep ? 'CONFIRMAR': 'PRÓXIMO'} <FontAwesomeIcon className={`duration-200 w-4 h-4 ${!props.disableCondition ? 'hover:translate-x-2' : ''}`} icon={faArrowRight}/></button>
        </div>
    )
}