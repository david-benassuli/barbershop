import { Title } from "../Title"
import { Subtitle } from "../Subtitle"
import { Description } from "../Description"

import { AboutCard } from "./AboutCard"

export function AboutSection() {
    return (
        <section className="bg-highbg grid grid-cols-2 gap-[1vw]
                            max-md:flex max-md:flex-col max-md:gap-4
        " id="about-section">
            <div className="h-full border border-secondary/20 -translate-5">
                <img className="h-full translate-5" src="/about.jpg" alt="About Section Image"/>
            </div>

            <div className="flex flex-col justify-between gap-2
                            max-md:gap-4
            ">
                <Title value="NOSSA HISTÓRIA" />
                <Subtitle value="Tradição e modernidade em harmonia." />
                <Description value="Fundada em 2015, a Nobre nasceu da paixão pelo cuidado masculino. Começamos com uma única cadeira e a convicção de que cada homem merece o melhor atendimento possível." />
                <Description value="Ao longo dos anos, construímos uma equipe de barbeiros excepcionais, cada um com sua técnica única, unidos pela mesma filosofia: o corte perfeito é aquele que revela o melhor de você." />
                <Description value="Nosso espaço foi concebido para oferecer uma experiência completa — do ambiente ao acabamento — com produtos de origem controlada e atenção aos mínimos detalhes." />

                <hr className="border-secondary/20" />

                <div className="flex flex-row flex-wrap justify-between items-center gap-2">
                    <AboutCard title="9+" subtitle="ANOS DE TRADIÇÃO"/>
                    <AboutCard title="3" subtitle="BARBEIROS"/>
                    <AboutCard title="15+" subtitle="SERVIÇOS"/>
                    <AboutCard title="5★" subtitle="AVALIAÇÃO"/>
                </div>
            </div>

        </section>
    )
}