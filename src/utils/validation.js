export const validateForm = (data) => {
  const errors = {};

  if (!data.date) errors.date = "Date is required.";
  if (!data.time) errors.time = "Time is required.";
  if (!data.guests || data.guests < 1 || data.guests > 10)
    errors.guests = "Guests must be between 1 and 10.";
  if (!data.occasion) errors.occasion = "Please select an occasion.";

  return errors;
};
