'use client'

import { SchedulingTypeServiceCard } from "./SchedulingTypeServiceCard"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faScissors } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faPerson } from "@fortawesome/free-solid-svg-icons"
import { faDroplet } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import { useScheduling } from "@/hook/UseScheduling"

export function SchedulingTypeService() {

    const {scheduling} = useScheduling()

    return (
        <div className="flex flex-col gap-10 md:justify-between">
            <h3 className="text-main text-[clamp(1rem,5vw,3rem)] font-[--font-bodoni] leading-none">Escolha o serviço</h3>

            <div className="flex flex-col gap-4
                md:grid md:grid-cols-2
            ">
                <SchedulingTypeServiceCard idService={1} icon={faScissors} type="Corte Clássico" time={45} price={65} active={scheduling.idService === 1} />
                <SchedulingTypeServiceCard idService={2} icon={faStar} type="Barba Completa" time={35} price={55} active={scheduling.idService === 2} />
                <SchedulingTypeServiceCard idService={3} icon={faPerson} type="Sombrancelha" time={20} price={25} active={scheduling.idService === 3} />
                <SchedulingTypeServiceCard idService={4} icon={faDroplet} type="Pigmentação" time={60} price={120} active={scheduling.idService === 4} />
                <SchedulingTypeServiceCard idService={5} icon={faStar} type="Combo Premium" time={90} price={150} active={scheduling.idService === 5} />
                <SchedulingTypeServiceCard idService={6} icon={faDroplet} type="Hidratação" time={30} price={45} active={scheduling.idService === 6} />
            </div>

            <button type="button" disabled={!scheduling.idService} className={`group self-start hover:cursor-pointer duration-200 px-8 py-4 flex flex-row gap-2 items-center disabled:cursor-not-allowed ${scheduling.idService ? 'bg-secondary/80 hover:bg-secondary text-lowbg' : 'bg-secondary/20 text-lowbg/20'}`} 
                onClick={() => console.log('clicou')}
            >PRÓXIMO <FontAwesomeIcon className={`duration-200 w-4 h-4 ${scheduling.idService ? 'group-hover:translate-x-2' : ''}`} icon={faArrowRight}/></button>
        </div>
    )
}