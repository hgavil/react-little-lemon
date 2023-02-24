import '../styles/styles.css'
import {BookingPage} from "./BookingPage";
import {HomePage} from "./HomePage";
import {Route, Routes} from "react-router-dom";
import {useReducer, useState} from "react";
import {fetchAPI, submitAPI} from "../apiFunctions";


export function updateTimes(state, date) {
    const newTimes = fetchAPI(date.date)
    return newTimes;
}

export function initializeTimes() {
    const todayDate = new Date();
    const initialTimes = fetchAPI(todayDate)
    return(initialTimes)
}

export function Main() {
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes())

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/booking" element={<BookingPage timeState={availableTimes} timeStateSetter={setAvailableTimes}/>}></Route>
            </Routes>
            {/*<HomePage/>*/}
            {/*<BookingPage/>*/}
            <div id={'stripe'}></div>
        </main>
    )
}