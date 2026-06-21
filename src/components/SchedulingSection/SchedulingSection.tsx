import { Title } from "../Title"
import { Subtitle } from "../Subtitle"

import { SchedulingStepsContainer } from "./SchedulingSteps/SchedulingStepsContainer"
import { SchedulingTypeService } from "./SchedulingTypeService/SchedulingTypeService"

export function SchedulingSection() {
    return (
        <section id="scheduling-section" className="flex flex-col gap-10 bg-highbg
            lg:grid lg:grid-cols-2 lg:gap-2
        ">
            <div className="flex flex-col lg:justify-between gap-10">
                <Title value="AGENDAMENTO" />
                <Subtitle value="Reserve sua experiência" />

                <SchedulingStepsContainer/>
            </div>
            <SchedulingTypeService/>
        </section>
    )
}