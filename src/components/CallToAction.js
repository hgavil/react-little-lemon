export function CallToAction() {
    return (
        <div className={"hStack"}>
            <div className={"vStack darkBgText"} id={"heroText"}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button className={"submitButton"}>Reserve a table</button>
            </div>
            <img id={"heroImage"} src={require('../assets/restaurantfood.jpg')} alt={"food on a plate"}/>
        </div>
    )
}