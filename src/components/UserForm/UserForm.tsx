import { useId } from "react";
import { Field, Form, Formik, type FormikHelpers } from "formik"; 


interface UserFormProps {
  onClose: () => void;
}

interface FormValues {
  name: string;
  email: string;
}

const initialFormValues: FormValues = {
  name: "",
  email: ""
}

export function UserForm({ onClose }: UserFormProps) {
  const id = useId();

  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    console.log(values);
    actions.resetForm()
    onClose()

  };

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialFormValues}>
      <Form >
        <label htmlFor={`${id}-name`}></label>
        <Field type="text" id={`${id}-name`} name="name" />

        <label htmlFor={`${id}-email`}></label>
        <Field type="email" id={`${id}-email`} name="email" />

        <button type="submit">Add</button>
        </Form>
      </Formik>
    </>
  );
}
