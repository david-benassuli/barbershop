'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faScissors } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-solid-svg-icons"

import { useEffect, useState } from "react"

import Link from "next/link"

export function Header() {

    const [burgerActive, setBurgerActive] = useState<boolean>(false)

    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    const [lightMode, setLightMode] = useState<boolean>(false)

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)
        
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    function handleToogleLightMode() {
        setLightMode(prev => !prev)
        document.body.classList.toggle("light-mode")
    }

    return (
        <header className={`${isScrolled ? "bg-lowbg/70 backdrop-blur-md shadow-md" : "bg-transparent"}
        flex flex-row flex-wrap justify-between items-center font-dmsans py-2 px-[5vw] w-full fixed top-0 left-0 z-2 transition-all duration-300`}>
            <h2 className="text-main font-bodoni tracking-wide flex flex-row gap-2 items-center"><FontAwesomeIcon className="text-secondary border border-secontext-secondary p-1.5" icon={faScissors}/>NOBRE</h2>
            
            <nav className="text-low font-bold tracking-widest flex flex-row gap-5 text-sm max-lg:hidden">
                <Link className="hover:text-secondary transition-all duration-500" href="#services-section">SERVIÇOS</Link>
                <Link className="hover:text-secondary transition-all duration-500" href="#about-section">SOBRE</Link>
                <Link className="hover:text-secondary transition-all duration-500" href="#barbers-section">BARBEIROS</Link>
                <Link className="hover:text-secondary transition-all duration-500" href="#galery-section">GALERIA</Link>
                <Link className="hover:text-secondary transition-all duration-500" href="#scheduling-section">AGENDAMENTO</Link>
                <Link className="hover:text-secondary transition-all duration-500" href="#contact-footer">CONTATO</Link>
            </nav>

            <button className="max-lg:hidden"
                onClick={handleToogleLightMode}
            ><FontAwesomeIcon className={`w-5 h-5 text-xl hover:cursor-pointer hover:scale-110 transition-all duration-200  ${lightMode ? "text-low hover:text-low/80" : "text-secondary hover:text-secondary/80"}`} icon={lightMode ? faMoon : faSun} /></button>

            <button className="text-main text-2xl hidden hover:cursor-pointer hover:scale-110 duration-100
                                max-lg:flex max-lg:justify-center max-lg:items-center"
                    onClick={() => setBurgerActive(prev => !prev)}
                                ><FontAwesomeIcon icon={burgerActive ? faX : faBars} /></button>

            {burgerActive && (
                <nav className="bg-mediumbg text-low border-b border-t border-secondary/50 shadow flex flex-rpw justify-between items-start gap-4 absolute w-full top-12 left-0 p-10
                lg:hidden">
                    <div className="flex flex-col gap-4">
                        <Link onClick={() => setBurgerActive(false)} className="hover:text-secondary transition-all duration-500" href="#services-section">SERVIÇOS</Link>
                        <Link onClick={() => setBurgerActive(false)} className="hover:text-secondary transition-all duration-500" href="#about-section">SOBRE</Link>
                        <Link onClick={() => setBurgerActive(false)} className="hover:text-secondary transition-all duration-500" href="#barbers-section">BARBEIROS</Link>
                        <Link onClick={() => setBurgerActive(false)} className="hover:text-secondary transition-all duration-500" href="#galery-section">GALERIA</Link>
                        <Link onClick={() => setBurgerActive(false)} className="hover:text-secondary transition-all duration-500" href="#contact-footer">CONTATO</Link>  
                        <Link onClick={() => setBurgerActive(false)} className="p-5 bg-secondary text-mediumbg font-bold font-dmsans self-stretch" href="#scheduling-section">AGENDAR HORÁRIO</Link>  
                    </div>             

                    <button className=""
                        onClick={handleToogleLightMode}
                    ><FontAwesomeIcon className={`w-5 h-5 text-xl hover:cursor-pointer hover:scale-110 transition-all duration-200  ${lightMode ? "text-low hover:text-low/80" : "text-secondary hover:text-secondary/80"}`} icon={lightMode ? faMoon : faSun} /></button>     
                </nav>
            )}
        </header>
    )
}
