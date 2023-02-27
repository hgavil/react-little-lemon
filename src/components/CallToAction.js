import {redirect} from "react-router-dom";

export function CallToAction() {

    const handleClick = (e) => {
        e.preventDefault();
        redirect("/booking")
    }

    return (
        <div className={"hStack"}>
            <div className={"vStack darkBgText"} id={"heroText"}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button className={"submitButton"} onClick={handleClick} aria-label={"On Click"}>Reserve a table</button>
            </div>
            <img id={"heroImage"} src={require('../assets/restaurantfood.jpg')} alt={"food on a plate"}/>
        </div>
    )
}