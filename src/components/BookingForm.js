import {useState} from "react";
import {useNavigate} from "react-router-dom";

export function BookingForm(props) {

    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState(0)
    const [occasion, setOccasion] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        }


        if (props.submit(formData)) {
            navigate('/confirmedbooking')
        }
    }

    return (
        <form id={"bookingForm"} onSubmit={handleSubmit}>
            <h3>Book Now</h3>
            <div className={"Field"}>
                <label htmlFor={"res-date"}>Choose Date</label>
                <input type={'date'} id={"res-date"} aria-label={"res-date"}
                       value={date}
                       onChange={(e) => {
                           setDate(e.target.value)
                           props.timeSet({state: props.times, date: e.target.valueAsDate})
                       }}
                       required
                />
            </div>
            <div className={"Field"}>
                <label htmlFor={"res-time"}>Choose Time</label>
                <select id={"res-time"} aria-label={"res-time"}
                        value={time}
                        onChange={(e) => {
                            setTime(e.target.value)
                        }}
                        required
                >
                    {props.times.map( time => {
                        return (
                            <option key={time}>{time}</option>
                        )
                    })}
                </select>
            </div>
            <div className={"Field"}>
                <label htmlFor={"guests"}>Number of Guests</label>
                <input type={'number'} placeholder={'1'} min={'1'} max={'10'} id={'guests'} aria-label={'guests'}
                       value={guests}
                       onChange={(e) => {
                           setGuests(e.target.value)
                       }}
                       required
                       minLength={1}
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
                <button aria-label={"Submit"} className={'submitButton'} type={'submit'} disabled={!date || !time || !guests}>Submit</button>
            </div>
        </form>
    )
}