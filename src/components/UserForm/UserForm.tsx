import { useId } from "react";
import { Field, Form, Formik, ErrorMessage, type FormikHelpers } from "formik";
import * as Yup from "yup";
import css from "./UserForm.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../../services/userApi";

interface UserFormProps {
  onClose: () => void;
}

interface FormValues {
  name: string;
  email: string;
}

const schemaValidation = Yup.object().shape({
  name: Yup.string().min(2).required(),
  email: Yup.string().email().required(),
});

const initialFormValues: FormValues = {
  name: "",
  email: "",
};

export function UserForm({ onClose }: UserFormProps) {
  const id = useId();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addUser,

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      onClose();
    },
  });

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    console.log(values);
    mutate({ ...values, isOnline: false });
    actions.resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialFormValues}
        validationSchema={schemaValidation}
      >
        <Form>
          <label htmlFor={`${id}-name`}></label>
          <Field type="text" id={`${id}-name`} name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />

          <label htmlFor={`${id}-email`}></label>
          <Field type="email" id={`${id}-email`} name="email" />
          <ErrorMessage name="email" component="span" className={css.error} />

          <button type="submit">Add</button>
        </Form>
      </Formik>
    </>
  );
}
