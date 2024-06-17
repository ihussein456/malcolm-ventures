import { BentoGrid } from "@/components/ui/bento-grid"
import { Hero } from "./hero"
import { Services } from "./services"
import { BentoGridSecondDemo} from "./test-ui"
import { BackgroundBeams } from "./ui/background-beams";

export const Landing = () => {
    return(
        <div className="pt-32 pb-16 md:pt-52 md:pb-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">
            {/*Hero */}
            <Hero/>
            {/*Services */}
            <BentoGridSecondDemo/>
            
            {/*Testimonials */}
            <Services/>
            {/*Calendly */}
            {/*Footer */}
            <BackgroundBeams/>
            
        </div>
    )
}