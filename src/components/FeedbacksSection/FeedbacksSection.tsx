import { Title } from "../Title"
import { Subtitle } from "../Subtitle"

import { FeedBackCard } from "./FeedbackCard"
import { Reveal } from "../Reveal"

export function FeedbacksSection() {
    return (
        <section className="bg-mediumbg flex flex-col gap-10" id="feedbacks-section">
            <Reveal duration={0.5}>
                <Title value="DEPOIMENTOS" feature/>
            </Reveal>
            <Reveal duration={0.6}>
                <Subtitle value="O que dizem nossos clientes" />
            </Reveal>

            <div className="grid grid-cols-3 
                            max-lg:grid-cols-2 max-md:grid-cols-1">
                <Reveal duration={0.5}>
                    <FeedBackCard stars={5} feedback="“A melhor experiência de barbearia que já tive. O nível de atenção aos detalhes é incomparável. Saí com um visual completamente transformado.”" name="Carlos Menezes" profession="Empresário" />
                </Reveal>

                <Reveal duration={0.6}>
                    <FeedBackCard stars={5} feedback="“Ambiente impecável, barbeiros excepcionais. O Rafael entendeu exatamente o que eu queria. Recomendo demais.”" name="André Costa" profession="Designer" />
                </Reveal>

                <Reveal duration={0.7}>
                    <FeedBackCard stars={5} feedback="“Faz mais de 2 anos que só venho aqui. Produto de qualidade, atendimento premium e resultado sempre perfeito.”" name="Roberto Filho" profession="Médico" />
                </Reveal>
            </div>
        </section>
    )
}