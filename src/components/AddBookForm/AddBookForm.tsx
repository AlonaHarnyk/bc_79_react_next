import { Form, Formik, Field, FormikHelpers } from "formik";
import { useId } from "react";

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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={`${id}-author`}>Author</label>
        <Field type="text" id={`${id}-author`} name="author" />

        <label htmlFor={`${id}-title`}>Title</label>
        <Field type="text" id={`${id}-title`} name="title" />

        <label htmlFor={`${id}-year`}>Year</label>
        <Field type="number" id={`${id}-year`} name="year" />

        <label htmlFor={`${id}-description`}>Description</label>
        <Field
          as="textarea"
          id={`${id}-description`}
          name="description"
        ></Field>
        <button type="submit"> Add book</button>
      </Form>
    </Formik>
  );
}
