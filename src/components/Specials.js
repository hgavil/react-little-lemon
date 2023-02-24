
const specials = [
    {
        name: "Greek Salad",
        price: "$12.99",
        description: "eee",
        getImageSrc: () => require('../assets/greeksalad.jpg')
    },
    {
        name: "Greek Salad2",
        price: "$12.99",
        description: "eee",
        getImageSrc: () => require('../assets/greeksalad.jpg')
    },
    {
        name: "Greek Salad3",
        price: "$12.99",
        description: "eee",
        getImageSrc: () => require('../assets/greeksalad.jpg')
    },
]

function SpecialCard() {
    return (
        <div className={"specialsContainer"}>
            {specials.map( (special) => (
                <div key={special.name} className={"card"}>
                    <img className={'specialsImg'} src={special.getImageSrc()} alt={special.name}/>
                    <div className={"cardText"}>
                        <h3>{special.name}</h3>
                        <p>{special.description}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}

export function Specials() {
    return (
        <div className={"sectionWrapper"}>
            <div className={"sectionHeader hStack"}>
                <h1>This week's specials!</h1>
                <button className={"submitButton"}>Online Menu</button>
            </div>
            <SpecialCard/>
        </div>
    )
}