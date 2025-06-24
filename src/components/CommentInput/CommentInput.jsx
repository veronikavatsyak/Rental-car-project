import { ErrorMessage, Field } from 'formik';

const CommentInput = () => {
  return (
    <div className="inputWrap">
      <Field
        as="textarea"
        name="comment"
        className="formInput"
        placeholder="Comment"
        rows={4}
      />
      <ErrorMessage name="comment" className="error" />
    </div>
  );
};

export default CommentInput;
