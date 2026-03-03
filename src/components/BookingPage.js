import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../api/bookingAPI";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(action.date);
  }
  return state;
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <section aria-labelledby="booking-heading">
      <h1 id="booking-heading">Reserve a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
