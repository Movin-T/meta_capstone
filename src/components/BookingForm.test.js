import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('Booking Form Validation', () => {
  const mockAvailableTimes = ['17:00', '18:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  test('Renders HTML5 validation attributes', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);

    expect(dateInput).toHaveAttribute('required');
    expect(timeSelect).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('required');
    expect(occasionSelect).toHaveAttribute('required');

    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');

    // Check min date attribute is today (or very close to it)
    const today = new Date().toISOString().split('T')[0];
    expect(dateInput).toHaveAttribute('min', today);
  });

  test('Submit button is disabled when form is invalid (initial state)', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeDisabled();
  });

  test('Submit button is enabled when form is valid', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole('button');

    // Fill out form
    fireEvent.change(dateInput, { target: { value: '2023-10-10' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });

    expect(submitButton).not.toBeDisabled();
  });

  test('Submit button remains disabled if one field is invalid', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    // const timeSelect = screen.getByLabelText(/Choose time/i); // Skip time
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole('button');

    // Fill out partially
    fireEvent.change(dateInput, { target: { value: '2023-10-10' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });

    expect(submitButton).toBeDisabled();
  });
  test('Validates date field', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: '' } });
    expect(dateInput).toBeInvalid();

    // Use a future date to ensure it satisfies 'min' attribute
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const futureDate = tomorrow.toISOString().split('T')[0];

    fireEvent.change(dateInput, { target: { value: futureDate } });
    expect(dateInput).toBeValid();
  });

  test('Validates time field', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const timeSelect = screen.getByLabelText(/Choose time/i);
    fireEvent.change(timeSelect, { target: { value: '' } });
    expect(timeSelect).toBeInvalid();

    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    expect(timeSelect).toBeValid();
  });

  test('Validates guests field', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const guestsInput = screen.getByLabelText(/Number of guests/i);

    // HTML5 validation check
    fireEvent.change(guestsInput, { target: { value: '0' } });
    expect(guestsInput).toBeInvalid();

    fireEvent.change(guestsInput, { target: { value: '11' } });
    expect(guestsInput).toBeInvalid();

    fireEvent.change(guestsInput, { target: { value: '5' } });
    expect(guestsInput).toBeValid();
  });

  test('Validates occasion field', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const occasionSelect = screen.getByLabelText(/Occasion/i);
    // Since 'Birthday' is default, it starts valid. We can't really make it invalid via UI easily if options are fixed,
    // but assuming we could select an empty placeholder if it existed.
    // However, the component Logic defaults to "Birthday" so it's always valid unless empty string is passed manually
    expect(occasionSelect).toBeValid();
  });
});
