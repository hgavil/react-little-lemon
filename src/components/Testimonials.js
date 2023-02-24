const testimonials = [
    {
        rating: "5",
        name: "Joe",
        review: "eee"
    },
    {
        rating: "4",
        name: "Chris",
        review: "aaa"
    },
    {
        rating: "5",
        name: "Jake",
        review: "ooo"
    },
    {
        rating: "4",
        name: "Cate",
        review: "uuu"
    }
]

function TestimonialCard() {
    return (
        <div className={"specialsContainer"}>
            {testimonials.map( (testimonial) => (
                <div key={testimonial.name} className={"card hStack"}>
                    <div className={"avatarPlaceholder"}></div>
                    <div className={"vStack cardText"}>
                        <p>Rating: {testimonial.rating}</p>
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.review}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}

export function Testimonials() {
    return (
        <>
            <h1>Testimonials</h1>
            <TestimonialCard/>
        </>
    )
}