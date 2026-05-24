import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export function TitleSection() {
    return (
        <section className="bg-[url('/background.png')] bg-cover bg-center p-20
                            grid grid-cols-2">
            <div className="flex flex-col gap-5">
                <h1 className="text-white text-8xl font-serif">Arte em <br /> <span className="text-secondary">cada</span> <br /> corte</h1>
                <p className="text-2xl text-[#393733]">Experiência premium de barbearia. Onde o estilo encontra a tradição e cada detalhe é tratado com maestria.</p>

                <div className="flex flex-row gap-5 text-sm w-full">
                    <button className="group bg-secondary/80 hover:bg-secondary hover:cursor-pointer duration-200 px-8 py-4 flex flex-row gap-2 items-center" type="button">AGENDAR HORÁRIO <FontAwesomeIcon className="group-hover:translate-x-2 duration-200 w-4 h-4" icon={faArrowRight} /></button>

                    <button className="bg-transparent text-[#d1d1d1] font-bold border border-secondary/30 hover:border-secondary duration-200 px-8 py-4" type="button">NOSSOS SERVIÇOS</button>
                </div>
            </div>
        </section>
    )
}