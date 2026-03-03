import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders booking form correctly", () => {
  render(
    <BookingForm
      availableTimes={[]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
});
