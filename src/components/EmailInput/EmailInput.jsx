import { ErrorMessage, Field } from 'formik';

const EmailInput = () => {
  return (
    <div className="inputWrap">
      <Field
        className="formInput"
        name="email"
        type="text"
        placeholder="Email*"
      />
      <ErrorMessage name="email" component="div" className="error" />
    </div>
  );
};

export default EmailInput;
