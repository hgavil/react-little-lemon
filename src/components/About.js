export function About() {
    return (
        <div className={"sectionWrapper container"}>
            <div className={"hStack"}>
                <div className={"vStack"} id={"heroText"}>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et eros maximus, sodales metus
                        in,
                        euismod nisl.
                    </p>
                </div>
                <img id={'aboutImg'} src={require('../assets/marioadrian.jpg')} alt={"mario and antonio"}/>
            </div>
        </div>
    )
}