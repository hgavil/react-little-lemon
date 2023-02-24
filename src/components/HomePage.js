import {CallToAction} from "./CallToAction";
import {Specials} from "./Specials";
import {Testimonials} from "./Testimonials";
import {About} from "./About";

export function HomePage() {
    return (
        <div>
            <CallToAction/>
            <Specials/>
            <Testimonials/>
            <About/>
        </div>
    )
}