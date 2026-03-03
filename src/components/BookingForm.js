import { useState } from "react";
import { validateForm } from "../utils/validation";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (name === "date") {
      dispatch({ type: "UPDATE_TIMES", date: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      submitForm(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        required
        onChange={handleChange}
      />
      {errors.date && <span role="alert">{errors.date}</span>}

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        name="time"
        required
        onChange={handleChange}
      >
        <option value="">Select time</option>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      {errors.time && <span role="alert">{errors.time}</span>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        onChange={handleChange}
      />
      {errors.guests && <span role="alert">{errors.guests}</span>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        onChange={handleChange}
      >
        <option value="">Select occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {errors.occasion && <span role="alert">{errors.occasion}</span>}

      <button type="submit" aria-label="Submit reservation">
        Make Reservation
      </button>
    </form>
  );
}

export default BookingForm;
