import {useState} from "react";

export function BookingForm(props) {

    const [date, setDate] = useState("")
    const [time, setTime] = useState(props.times[0])
    const [guests, setGuests] = useState(0)
    const [occasion, setOccasion] = useState("")

    return (
        <form id={"bookingForm"}>
            <div className={"Field"}>
                <label htmlFor={"res-date"}>Choose Date</label>
                <input type={'date'} id={"res-date"}
                       value={date}
                       onChange={(e) => {
                           setDate(e.target.value)
                           props.timeSet(e.target.value)
                       }}
                />
            </div>
            <div className={"Field"}>
                <label htmlFor={"res-time"}>Choose Time</label>
                <select id={"res-time"}
                        value={time}
                        onChange={(e) => {
                            setTime(e.target.value)
                        }}
                >
                    {props.times.map( time => {
                        return (
                            <option>{time}</option>
                        )
                    })}
                </select>
            </div>
            <div className={"Field"}>
                <label htmlFor={"guests"}>Number of Guests</label>
                <input type={'number'} placeholder={'1'} min={'1'} max={'10'} id={'guests'}
                       value={guests}
                       onChange={(e) => {
                           setGuests(e.target.value)
                       }}
                />
            </div>
            <div className={"Field"}>
                <label htmlFor={"occasion"}>Occasion</label>
                <select id={'occasion'}
                        value={occasion}
                        onChange={(e) => {
                            setOccasion(e.target.value)
                        }}
                >
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <div>
                <button className={'submitButton'} type={'submit'}>Find a table</button>
            </div>
        </form>
    )
}