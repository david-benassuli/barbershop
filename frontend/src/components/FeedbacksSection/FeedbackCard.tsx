import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

type FeedBackCardProps = {
    stars: 1 | 2 | 3 | 4 | 5,
    feedback: string,
    name: string,
    profession: string 
}

export function FeedBackCard(props: FeedBackCardProps) {
    return (
        <div className="flex flex-col  border border-secondary/20 justify-between p-8 h-75">
            <p>{"⭐".repeat(props.stars)}</p>
            <p className="text-low font-dmsans text-[clamp(0.8rem,4vw,1rem)]">{props.feedback}</p>
            <hr className="border-secondary/20" />
            <div className="flex flex-row gap-2 items-center">
                <FontAwesomeIcon className="text-low border border-secondary/20 p-2" icon={faUser} />
                <div>
                    <h2 className="text-main font-dmsans text-sm">{props.name}</h2>
                    <h3 className="text-low uppercase font-dmsans text-sm">{props.profession}</h3>
                </div>
            </div>
        </div>
    )
}