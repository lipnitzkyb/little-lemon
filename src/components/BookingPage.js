import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../api/bookingAPI";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

const initializeTimes = () => fetchAPI(new Date());

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(action.date);
  }
  return state;
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <section aria-labelledby="booking-heading">
      <h2 id="booking-heading">Reserve a Table</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
