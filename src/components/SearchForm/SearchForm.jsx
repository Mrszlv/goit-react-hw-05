import { Formik, Form, Field } from "formik";
import s from "./SearchForm.module.css";

const SearchForm = ({ handleQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values, { resetForm }) => {
    handleQuery(values.query);
    resetForm();
  };

  return (
    <div className={s.wrapp}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field name="query" className={s.input} placeholder="Enter..." />
          <button type="submit" className={s.btn}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchForm;
