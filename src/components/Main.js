import '../styles/styles.css'
import {BookingPage} from "./BookingPage";
import {HomePage} from "./HomePage";
import {Route, Routes} from "react-router-dom";
import {useReducer} from "react";
import {fetchAPI, submitAPI} from "../apiFunctions";
import {ConfirmedBooking} from "./ConfirmedBooking";


export function updateTimes(state, date) {
    const newTimes = fetchAPI(date.date)
    return newTimes;
}

export function initializeTimes() {
    const todayDate = new Date();
    const initialTimes = fetchAPI(todayDate)
    return(initialTimes)
}

export function submitForm(formData) {
    return (submitAPI(formData))
}

export function Main() {
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes())

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/booking" element={<BookingPage timeState={availableTimes} timeStateSetter={setAvailableTimes} submit={submitForm}/>}></Route>
                <Route path="/confirmedbooking" element={<ConfirmedBooking/>}></Route>
            </Routes>
            <div id={'stripe'}></div>
        </main>
    )
}