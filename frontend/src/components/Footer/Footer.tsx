import { Title } from "../Title"
import { Description } from "../Description"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faScissors } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import Link from "next/link"

import { Reveal } from "../Reveal"

export function Footer() {
    return (
        <footer id="contact-footer" className="bg-lowbg flex flex-col gap-8 px-[5vw] py-10">
            <div className="grid grid-cols-4 gap-10 justify-between max-md:grid-cols-2 max-sm:grid-cols-1">

                <Reveal duration={0.5}>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-main font-bodoni tracking-wide flex flex-row gap-2 items-center"><FontAwesomeIcon className="text-secondary border border-secontext-secondary p-1.5" icon={faScissors}/>NOBRE</h2>
                        <p className="text-sm text-low">A barbearia premium que transforma sua aparência e eleva sua confiança ao próximo nível.</p>
                        <div className="flex flex-row gap-2">
                            <Link href="https://www.instagram.com/david_benassuli/" ><FontAwesomeIcon className="p-2 border border-secondary/20 text-sm text-low" icon={faInstagram}/></Link>
                            <Link href="https://www.linkedin.com/in/felipe-david-88a521396/" ><FontAwesomeIcon className="p-2 border border-secondary/20 text-sm text-low" icon={faLinkedin}/></Link>
                            <Link href="https://github.com/david-benassuli/" ><FontAwesomeIcon className="p-2 border border-secondary/20 text-sm text-low" icon={faGithub}/></Link>
                        </div>
                    </div>
                </Reveal>

                <Reveal duration={0.6}>
                    <div className="flex flex-col gap-5">
                        <Title value="SERVIÇOS" />
                        <Description value="Corte Clássico"/>
                        <Description value="Barba Completa"/>
                        <Description value="Sobrancelha"/>
                        <Description value="Pigmentação"/>
                        <Description value="Combo Premium"/>
                        <Description value="Hidratação"/>
                    </div>
                </Reveal>

                <Reveal duration={0.7}>
                    <div className="flex flex-col gap-5">
                        <Title value="HORÁRIO" />
                        <div>
                            <Description value="Segunda - Sábado" />
                            <p className="text-main text-xl font-dmsans">09:00 - 18:00</p>
                        </div>
                        <Description value="Domingo - Fechado" />
                    </div>
                </Reveal>

                <Reveal duration={0.8}>
                    <div className="flex flex-col gap-5">
                        <Title value="CONTATO" />
                        <p className="flex flex-row gap-2 text-low text-sm font-dmsans items-center"><FontAwesomeIcon className="text-secondary text-xl" icon={faLocationDot}/>Rua Augusta, 1456 — Consolação São Paulo — SP, 01305-100</p>
                        <p className="flex flex-row gap-2 text-low text-sm font-dmsans items-center"><FontAwesomeIcon className="text-secondary text-xl" icon={faPhone}/>(11) 9 9999-0000</p>
                    
                        <p className="flex flex-row gap-2 text-low text-sm font-dmsans items-center"><FontAwesomeIcon className="text-secondary text-xl" icon={faEnvelope}/>contato@nobre.com.br</p>
                    </div>
                </Reveal>
            </div>

            <hr className="border-secondary/20" />

            <div className="text-center flex flex-row justify-between gap-5 max-sm:flex-col max-sm:gap-2 max-sm:items-center">
                <p className="text-sm text-low">&copy; 2026 Nobre Barbearia. Todos os direitos reservados.</p>
                <p className="text-sm text-low">Desenvolvido com excelência por <Link className="text-main hover:underline" href="https://www.linkedin.com/in/felipe-david-88a521396/" target="_blank">Felipe David</Link></p>
            </div>
            
        </footer>
    )
}