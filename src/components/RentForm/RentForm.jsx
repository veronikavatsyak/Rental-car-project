import css from './RentForm.module.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import NameInput from '../NameInput/NameInput';
import EmailInput from '../EmailInput/EmailInput';
import BookingDateInput from '../BookingDateInput/BookingDateInput';
import CommentInput from '../CommentInput/CommentInput';
import Send from '../Send/Send';
import toast from 'react-hot-toast';
const RentForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: null,
    comment: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s'-]+$/, 'Only letters are allowed')
      .required('Required!'),
    email: Yup.string().email('Invalid email').required('Required!'),
    bookingDate: Yup.date().typeError('Invalid date').required('Required!'),
    comment: Yup.string(),
  });
  const handleSubmit = (values, actions) => {
    console.log(values);
    toast.success('The car was successfully booked for the chosen date.');
    actions.resetForm();
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
