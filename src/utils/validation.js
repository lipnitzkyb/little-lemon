export const validateForm = (data) => {
  const errors = {};

  if (!data.date) errors.date = "Please select a date.";
  if (!data.time) errors.time = "Please select a time.";
  if (!data.guests || data.guests < 1 || data.guests > 10)
    errors.guests = "Guests must be between 1 and 10.";
  if (!data.occasion) errors.occasion = "Please select an occasion.";

  return errors;
};
