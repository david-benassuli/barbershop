import { Header } from "@/components/Header/Header";
import { TitleSection } from "@/components/TitleSection/TitleSection";
import { ServicesSection } from "@/components/ServicesSection/ServicesSection";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { BarbersSection } from "@/components/BarbersSection/BarbersSection";
import { GalerySection } from "@/components/GalerySection/GalerySection";
import { FeedbacksSection } from "@/components/FeedbacksSection/FeedbacksSection";
import { SchedulingSection } from "@/components/SchedulingSection/SchedulingSection";
import { Footer } from "@/components/Footer/Footer";

import { SchedulingProvider } from "@/context/SchedulingContext";

export default function Home() {
  return (
    <>
      <Header/>
      <TitleSection/>
      <ServicesSection/>
      <AboutSection/>
      <BarbersSection/>
      <GalerySection/>
      <FeedbacksSection/>
      <SchedulingProvider>
        <SchedulingSection/>
      </SchedulingProvider>
      <Footer/>
    </>
  );
}
