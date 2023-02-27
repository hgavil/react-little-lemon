import {BookingForm} from "./BookingForm";

export function BookingPage(props) {
    return (
        <div className={'container'}>
            <h1 style={{color: '#F4CE14'}}>Reservations</h1>

            <img id={'bookingImage'} src={require('../assets/restaurant.jpg')} alt={"the restaurant"}/>

            <div className={'card'}>
                <h3>Little Lemon</h3>
                <h3>Chicago</h3>
                <p>Tell us the date, time, and size of your party and check if there is a table available!</p>
                <div id={'reservationForm'}>
                    <BookingForm times={props.timeState} timeSet={props.timeStateSetter} submit={props.submit}/>
                </div>
            </div>
        </div>
    )
}