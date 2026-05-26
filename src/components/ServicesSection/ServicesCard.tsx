import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-solid-svg-icons"

type ServicesCardType = {
    icon: IconDefinition
    price: number
    type: string,
    description: string,
    time: number
}

export function ServicesCard(props: ServicesCardType) {
    return (
        <div className="border border-secondary/20 flex flex-col gap-5 p-10 hover:bg-highbg transition-all duration-300
            max-sm:p-5
        ">
            <header className="flex flex-row justify-between items-center">
                <FontAwesomeIcon className="p-3 border border-secondary/20 text-secondary" icon={props.icon}/>
                <h2 className="text-[1.25em] font-[--font-bodoni] text-secondary">R$ {props.price}</h2>
            </header>
            <h3 className="text-2xl text-white font-[--font-bodoni]">{props.type}</h3>
            <p className="text-[0.8em] text-low font-dmsans">{props.description}</p>
            <p className="flex flex-row gap-1 items-center text-[0.8em] text-low font-dmsans"><FontAwesomeIcon icon={faClock}/>{props.time} MIN</p>
        </div>
    )
}