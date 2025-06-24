import css from './RentForm.module.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import NameInput from '../NameInput/NameInput';
import EmailInput from '../EmailInput/EmailInput';
import BookingDateInput from '../BookingDateInput/BookingDateInput';
import CommentInput from '../CommentInput/CommentInput';
import Send from '../Send/Send';
const RentForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s'-]+$/, 'Only letters are allowed')
      .required('Required!'),
    email: Yup.string().email('Invalid email').required('Required!'),
    bookingDate: Yup.string(),
    comment: Yup.string(),
  });
  const handleSubmit = values => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.rentForm}>
        <h2 className={css.formTitle}>Book your car now</h2>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={css.inputsWrap}>
          <NameInput />
          <EmailInput />
          <BookingDateInput />
          <CommentInput />
        </div>
        <Send />
      </Form>
    </Formik>
  );
};

export default RentForm;
