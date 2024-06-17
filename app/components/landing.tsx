import { Hero } from "./hero"
import { Services } from "./services"

export const Landing = () => {
    return(
        <div className="pt-32 pb-16 md:pt-52 md:pb-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">
            {/*Hero */}
            <Hero/>
            {/*Services */}
            <Services/>
            {/*Testimonials */}
            {/*Calendly */}
            {/*Footer */}
        </div>
    )
}