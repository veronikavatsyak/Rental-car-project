import { ErrorMessage, Field } from 'formik';

const NameInput = () => {
  return (
    <div className="inputWrap">
      <Field
        className="formInput"
        name="name"
        type="text"
        placeholder="Name*"
      />
      <ErrorMessage name="name" component="div" className="error" />
    </div>
  );
};

export default NameInput;
