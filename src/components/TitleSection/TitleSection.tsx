import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import { TitleInfo } from "./TitleInfo"

import { Description } from "../Description"

export function TitleSection() {
    return (
        <section className="relative bg-[url('/background.png')] bg-cover bg-center px-[5vw] py-10
                            
            " >
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <div className="relative flex flex-col gap-5 h-full z-1">
                <h1 style={{fontFamily: "Bodoni Moda"}} className="text-white text-[clamp(3.5em,8vw,10em)] leading-none font-[--font-bodoni]">Arte em <br /> <span className="text-secondary">cada</span> <br /> corte</h1>
                <p className="text-lg text-low max-w-125">Experiência premium de barbearia. Onde o estilo encontra a tradição e cada detalhe é tratado com maestria.</p>

                <div id="titleInfos" className="flex flex-row flex-wrap gap-5 
                                                max-sm:justify-center font-[--font-bodoni]">
                    <TitleInfo info="5000+" description="CLIENTES ATENDIDOS"/>
                    <TitleInfo info="9 anos" description="DE EXPERIÊNCIA"/>
                    <TitleInfo info={"4.9 ★"} description="AVALIAÇÃO MÉDIA"/>
                </div>

                <div className="flex flex-row flex-wrap gap-5 text-sm
                                max-sm:justify-center font-dmsans
                ">
                    <button className="group bg-secondary/80 hover:bg-secondary hover:cursor-pointer duration-200 px-8 py-4 flex flex-row gap-2 items-center" type="button">AGENDAR HORÁRIO <FontAwesomeIcon className="group-hover:translate-x-2 duration-200 w-4 h-4" icon={faArrowRight} /></button>

                    <button className="bg-transparent text-[#d1d1d1] font-bold border border-secondary/30 hover:border-secondary hover:cursor-pointer duration-200 px-8 py-4" type="button">NOSSOS SERVIÇOS</button>
                </div>
            </div>
        </section>
    )
}