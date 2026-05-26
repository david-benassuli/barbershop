'use client'

import { Title } from "../Title"
import { Subtitle } from "../Subtitle"

import { Reveal } from "../Reveal"

export function GalerySection() {
    return (
        <section className="bg-highbg flex flex-col gap-10" id="galery-section">
            <Reveal duration={0.8}>
                <Title value="GALERIA" />
            </Reveal>
            <Reveal duration={1.2}>
                <Subtitle value="Nossa galeria" />
            </Reveal>

            <div className="grid grid-cols-4 grid-rows-2 gap-2">
                <div className="overflow-hidden row-span-2">
                    <Reveal duration={0.5}>
                        <img className="w-full h-full hover:scale-110 transition-all duration-400" src="/galery1.jpg" alt="Galery Image" />
                    </Reveal>
                </div>
                <div className="overflow-hidden">
                    <Reveal duration={1}>
                        <img className="w-full h-full hover:scale-110 transition-all duration-400" src="/galery2.jpg" alt="Galery Image" />
                    </Reveal>
                </div>
                <div className="overflow-hidden">
                    <Reveal duration={0.5}>
                        <img className="w-full h-full hover:scale-110 transition-all duration-400" src="/galery3.jpg" alt="Galery Image" />
                    </Reveal>
                </div>
                <div className="overflow-hidden row-span-2">
                    <Reveal duration={1}>
                        <img className="w-full h-full hover:scale-110 transition-all duration-400" src="/galery6.jpg" alt="Galery Image" />
                    </Reveal>
                </div>
                <div className="overflow-hidden">
                    <Reveal duration={0.5}>
                        <img className="w-full h-full hover:scale-110 transition-all duration-400" src="/galery4.jpg" alt="Galery Image" />
                    </Reveal>
                </div>
                <div className="overflow-hidden">
                    <Reveal duration={1}>
                        <img className="w-full h-full hover:scale-110 transition-all duration-400" src="/galery5.jpg" alt="Galery Image" />
                    </Reveal>
                </div>
            </div>
        </section>
    )
}