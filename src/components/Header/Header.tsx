import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faScissors } from "@fortawesome/free-solid-svg-icons"

import { Button } from "../Button"

export function Header() {
    return (
        <header className="bg-transparent flex justify-between items-center py-2 px-10 w-full fixed top-0 left-0">
            <h1 className="text-white flex flex-row gap-1 items-center"><FontAwesomeIcon className="w-6 h-6 text-secondary border border-secontext-secondary p-1" icon={faScissors}/>NOBRE</h1>
            
            <nav className="text-gray-600 flex flex-row gap-8 text-sm">
                <a className="hover:text-secondary transition-all duration-500" href="#">SERVIÇO</a>
                <a className="hover:text-secondary transition-all duration-500" href="#">SOBRE</a>
                <a className="hover:text-secondary transition-all duration-500" href="#">BARBEIROS</a>
                <a className="hover:text-secondary transition-all duration-500" href="#">GALERIA</a>
                <a className="hover:text-secondary transition-all duration-500" href="#">AGENDAMENTO</a>
                <a className="hover:text-secondary transition-all duration-500" href="#">CONTATO</a>
            </nav>

            <Button title="AGENDAR"/>
        </header>
    )
}