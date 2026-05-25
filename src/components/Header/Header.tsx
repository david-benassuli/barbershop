'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faScissors } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export function Header() {

    const [burgerActive, setBurgerActive] = useState<boolean>(false)

    return (
        <header className="bg-transparent flex justify-between items-center py-2 px-10 w-full fixed top-0 left-0 z-2">
            <h1 className="text-white flex flex-row gap-1 items-center"><FontAwesomeIcon className="w-6 h-6 text-secondary border border-secontext-secondary p-1" icon={faScissors}/>NOBRE</h1>
            
            <nav className="text-low flex flex-row gap-5 text-sm max-lg:hidden">
                <a className="hover:text-secondary transition-all duration-500" href="#">SERVIÇO</a>
                <a className="hover:text-secondary transition-all duration-500" href="#">SOBRE</a>
                <a className="hover:text-secondary transition-all duration-500" href="#">BARBEIROS</a>
                <a className="hover:text-secondary transition-all duration-500" href="#">GALERIA</a>
                <a className="hover:text-secondary transition-all duration-500" href="#">AGENDAMENTO</a>
                <a className="hover:text-secondary transition-all duration-500" href="#">CONTATO</a>
            </nav>

            <button className="bg-secondary/80 duration-200 hover:cursor-pointer px-5 py-2.5 text-sm hover:bg-secondary max-lg:hidden" type="button">AGENDAR</button>

            <button className="text-white text-2xl hidden hover:cursor-pointer hover:scale-110 duration-100
                                max-lg:block"
                    onClick={() => setBurgerActive(prev => !prev)}
                                >{burgerActive ? "X" : <FontAwesomeIcon icon={faBars}/>}</button>

            {burgerActive && (
                <nav className="bg-lowbg text-low flex flex-col gap-4 absolute w-full top-15 left-0 p-10
                lg:hidden">
                    <a onClick={() => setBurgerActive(false)} className="hover:text-secondary transition-all duration-500" href="#">SERVIÇO</a>
                    <a onClick={() => setBurgerActive(false)} className="hover:text-secondary transition-all duration-500" href="#">SOBRE</a>
                    <a onClick={() => setBurgerActive(false)} className="hover:text-secondary transition-all duration-500" href="#">BARBEIROS</a>
                    <a onClick={() => setBurgerActive(false)} className="hover:text-secondary transition-all duration-500" href="#">GALERIA</a>
                    <a onClick={() => setBurgerActive(false)} className="hover:text-secondary transition-all duration-500" href="#">AGENDAMENTO</a>
                    <a onClick={() => setBurgerActive(false)} className="hover:text-secondary transition-all duration-500" href="#">CONTATO</a>

                    <button className="bg-secondary/80 duration-200 hover:cursor-pointer px-5 py-2.5 text-sm hover:bg-secondary max-lg:hidden" type="button">AGENDAR</button>
                </nav>
            )}
        </header>
    )
}
