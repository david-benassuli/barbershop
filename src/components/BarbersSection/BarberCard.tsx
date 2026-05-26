import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

type BarberCardProps = {
    url_img: string,
    name: string,
    cut: string,
    exp: number,
    insta: string
}

export function BarberCard(props: BarberCardProps) {
    return (
        <div className="flex flex-col gap-5 max-md:gap-2">
            <div className="relative overflow-hidden group">
                <div className="absolute h-full w-full group-hover:bg-linear-to-b from-transparent to-black/80 transition-all duration-300 z-1" ></div>
                <img className="h-full group-hover:scale-110 transition-all duration-500" src={props.url_img} alt="Barber Image" />
                <p className="absolute translate-x-2 translate-y-10 group-hover:-translate-y-12 text-secondary font-bodoni transition-all duration-300 z-2"> <FontAwesomeIcon icon={faInstagram} /> @{props.insta}</p>
            </div>

            <div className="flex flex-col gap-1 max-md:gap-0">
                <h2 className="text-white font-bodoni text-2xl">{props.name}</h2>
                <h3 className="text-secondary font-dmsans text-sm">{props.cut}</h3>
                <p className="text-low font-dmsans text-sm">{props.exp} ANOS DE EXPERIÊNCIA</p>
            </div>
        </div>
    )
}