import { render, screen } from '@testing-library/react';
import App from './App';
import {BookingForm} from "./components/BookingForm";
import {initializeTimes, Main, updateTimes} from "./components/Main";
import {BrowserRouter} from "react-router-dom";

test('Renders the Bookingform heading', () => {
  render (<BookingForm times={['0']}/>);
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument();
})

test('Validates that initializeTimes function returns the correct value', () => {
  render(<Main/>, {wrapper: BrowserRouter})
  const initialValues = initializeTimes();

  expect(initialValues).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])

})

test('Validates that updateTimes returns the same value provided in the state', () => {
  render(<Main/>, {wrapper: BrowserRouter})
  const initialState = initializeTimes();
  const timeUpdate = updateTimes(initialState, 0)

  expect(timeUpdate).toEqual(initialState)
})