import { ErrorMessage, Field } from 'formik';

const BookingDateInput = () => {
  return (
    <div className="inputWrap">
      <Field
        className="formInput"
        name="date"
        type="number"
        placeholder="Booking date"
      />
      <ErrorMessage name="date" component="div" className="error" />
    </div>
  );
};

export default BookingDateInput;
