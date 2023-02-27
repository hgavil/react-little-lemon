import { render, screen } from '@testing-library/react';
import App from './App';
import {BookingForm} from "./components/BookingForm";
import {initializeTimes, Main, updateTimes} from "./components/Main";
import {BrowserRouter} from "react-router-dom";

test('Renders the Bookingform heading', () => {
  render (<BookingForm times={['0']}/>, {wrapper: BrowserRouter});
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument();
})

test('Validates that initializeTimes function returns the correct value', () => {
  render(<Main/>, {wrapper: BrowserRouter})
  const initialValues = initializeTimes();

  expect(initialValues).not.toHaveLength(0)

})

test('Validates that updateTimes returns the same value provided in the state', () => {
  render(<Main/>, {wrapper: BrowserRouter})
  const date = {
    date: new Date()
  }
  const initialState = initializeTimes();
  const timeUpdate = updateTimes(initialState, date)

  expect(timeUpdate).toEqual(initialState)
})