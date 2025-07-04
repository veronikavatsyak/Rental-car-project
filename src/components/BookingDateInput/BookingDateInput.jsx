import { ErrorMessage, useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../datePickerStyles.css';
import enUS from 'date-fns/locale/en-US';
registerLocale('en-US', enUS);

const BookingDateInput = () => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField('bookingDate');
  return (
    <div className="inputWrap">
      <DatePicker
        className="formInput"
        calendarClassName="customCalendar"
        placeholderText="Booking date"
        selected={field.value ? new Date(field.value) : null}
        onChange={val => setFieldValue('bookingDate', val)}
        dateFormat="yyyy-MM-dd"
        minDate={new Date()}
        locale="en-US"
      />
      {meta.touched && meta.error ? (
        <ErrorMessage name="bookingDate" component="div" className="error" />
      ) : null}
    </div>
  );
};

export default BookingDateInput;
