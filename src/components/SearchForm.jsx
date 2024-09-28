import { Formik, Form, Field } from "formik";

const SearchForm = ({ handleQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values, { resetForm }) => {
    handleQuery(values.query);
    resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchForm;
