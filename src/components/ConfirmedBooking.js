
export function ConfirmedBooking() {
    return (
        <>
            <div className={'container'}>
                <h1 style={{color: '#F4CE14'}}>Reservations</h1>
                <img id={'bookingImage'} src={require('../assets/restaurant.jpg')} alt={"the restaurant"}/>

                <div className={'card'}>
                    <h3>Your booking has been confirmed!</h3>
                </div>
            </div>
        </>
    )
}