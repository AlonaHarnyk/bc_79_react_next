import { Form, Formik, Field, type FormikHelpers, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./AddBookForm.module.css";

interface FormValues {
  author: string;
  title: string;
  year: number;
  description: string;
}

const initialValues: FormValues = {
  author: "",
  title: "",
  year: new Date().getFullYear(),
  description: "",
};

const schema = Yup.object().shape({
  author: Yup.string().min(2).required(),
  title: Yup.string().min(2).required(),
  year: Yup.number().integer().positive().required(),
  description: Yup.string().max(500),
});

export function AddBookForm() {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    console.log(values);

    actions.resetForm();
  };
  const id = useId();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.form}>
        <label htmlFor={`${id}-author`}>Author</label>
        <Field
          className={css.inputForm}
          type="text"
          id={`${id}-author`}
          name="author"
        />
        <ErrorMessage name="author" component="span" className={css.error} />

        <label htmlFor={`${id}-title`}>Title</label>
        <Field
          className={css.inputForm}
          type="text"
          id={`${id}-title`}
          name="title"
        />
        <ErrorMessage name="title" component="span" className={css.error} />

        <label htmlFor={`${id}-year`}>Year</label>
        <Field
          className={css.inputForm}
          type="number"
          id={`${id}-year`}
          name="year"
        />
        <ErrorMessage name="year" component="span" className={css.error} />

        <label htmlFor={`${id}-description`}>Description</label>
        <Field
          className={css.inputForm}
          as="textarea"
          id={`${id}-description`}
          name="description"
        ></Field>
        <ErrorMessage
          name="description"
          component="span"
          className={css.error}
        />
        <button className={css.formBtn} type="submit">
          {" "}
          Add book
        </button>
      </Form>
    </Formik>
  );
}
