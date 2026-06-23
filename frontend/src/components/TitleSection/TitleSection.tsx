'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import { TitleInfo } from "./TitleInfo"

import Link from "next/link"

import { Reveal } from "../Reveal"

export function TitleSection() {
    return (
        <section className="relative bg-[url('/background.jpg')] bg-cover bg-center px-[5vw] py-10" id="title-section">
            <div className="absolute inset-0 bg-lowbg/80 z-0"></div>
            
            <Reveal duration={0.5}>
                <div className="relative flex flex-col gap-5 h-full z-1">
                    <h1 style={{fontFamily: "Bodoni Moda"}} className="text-main text-[clamp(3.5em,8vw,10em)] leading-none font-[--font-bodoni]">Arte em <br /> <span className="text-secondary">cada</span> <br /> corte</h1>
                    <p className="text-lg text-low max-w-125">Experiência premium de barbearia. Onde o estilo encontra a tradição e cada detalhe é tratado com maestria.</p>
                    <div id="titleInfos" className="flex flex-row flex-wrap gap-5
                                                    max-sm:justify-center font-[--font-bodoni]">
                        <TitleInfo info="5000+" description="CLIENTES ATENDIDOS"/>
                        <TitleInfo info="9 anos" description="DE EXPERIÊNCIA"/>
                        <TitleInfo info={"4.9 ★"} description="AVALIAÇÃO MÉDIA"/>
                    </div>
                    <Reveal duration={0.8}>
                        <div className="flex flex-row flex-wrap gap-5 text-sm
                                        max-sm:justify-center font-dmsans
                        ">
                            <Link className="group bg-secondary/80 hover:bg-secondary hover:cursor-pointer duration-200 px-8 py-4 flex flex-row gap-2 items-center text-lowbg" href="#scheduling-section">AGENDAMENTO <FontAwesomeIcon className="group-hover:translate-x-2 duration-200 w-4 h-4" icon={faArrowRight} /></Link>
                            <Link className="bg-transparent text-main font-bold border border-secondary/30 hover:border-secondary hover:cursor-pointer duration-200 px-8 py-4" href="#contact-footer">CONTATO</Link>
                        </div>
                    </Reveal>
                </div>
            </Reveal>
            
        </section>
    )
}