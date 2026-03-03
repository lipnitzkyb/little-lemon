import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders booking form heading", () => {
  render(
    <BookingForm
      availableTimes={[]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
