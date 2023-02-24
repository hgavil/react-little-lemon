import '../styles/styles.css'
import {BookingPage} from "./BookingPage";
import {HomePage} from "./HomePage";
import {Route, Routes} from "react-router-dom";
import {useReducer, useState} from "react";

function updateTimes(date) {
    return(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
}

function initializeTimes() {
    return(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
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