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

            <Reveal duration={1}>
                <div className="grid grid-cols-4 gap-2
                                max-lg:grid-cols-2
                                max-md:flex max-md:flex-col
                ">
                    <div className="overflow-hidden row-span-2">
                        <img className="w-full h-full hover:scale-110 transition-all duration-400" src="/galery1.jpg" alt="Galery Image" />
                    </div>
                    <div className="overflow-hidden">
                        <img className="w-full h-full hover:scale-110 transition-all duration-400" src="/galery2.jpg" alt="Galery Image" />
                    </div>
                    <div className="overflow-hidden">
                        <img className="w-full h-full hover:scale-110 transition-all duration-400" src="/galery3.jpg" alt="Galery Image" />
                    </div>
                    <div className="overflow-hidden row-span-2
                                    max-lg:order-6 max-lg:col-start-2 max-lg:row-start-3
                    ">
                        <img className="w-full h-full hover:scale-110 transition-all duration-400" src="/galery6.jpg" alt="Galery Image" />
                    </div>
                    <div className="overflow-hidden">
                        <img className="w-full h-full hover:scale-110 transition-all duration-400" src="/galery4.jpg" alt="Galery Image" />
                    </div>
                    <div className="overflow-hidden">
                        <img className="w-full h-full hover:scale-110 transition-all duration-400" src="/galery5.jpg" alt="Galery Image" />
                    </div>
                </div>
            </Reveal>
        </section>
    )
}