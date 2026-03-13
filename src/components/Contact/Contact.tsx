import { Formik, Form, Field, type FormikHelpers } from "formik";

type HobbiesValues =
  | "hiking"
  | "fishing"
  | "travel"
  | "rest"
  | "sport"
  | "learning"
  | "sing"
  | "dance"
  | "shopping";

type SexValue = "male" | "female";

interface FormValues {
  city: string;
  name: string;
  job: string;
  hobbies: HobbiesValues[];
  description: string;
  sex: SexValue;
}

const initialValues: FormValues = {
  city: "",
  name: "",
  job: "",
  hobbies: [],
  description: "",
  sex: "male",
};

export default function AddContactForm() {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
        </label>

        <label>
          City
          <Field type="text" name="city" />
        </label>

        <label>
          Job
          <Field type="text" name="job" />
        </label>

        <label>
          <Field as="select" name="sex">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
        </label>

        <label>
          <Field as="textarea" name="description"></Field>
        </label>

        <fieldset>
          <legend>Hobbies</legend>
          <label>
            <Field type="checkbox" name="hobbies" value="hiking" />
            Hiking
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="fishing" />
            Fishing
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="travel" />
            Travel
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="rest" />
            Rest
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="sport" />
            Sport
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="learning" />
            Learning
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="sing" />
            Sing
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="dance" />
            Dance
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="shopping" />
            Shopping
          </label>
        </fieldset>
        <button>Add</button>
      </Form>
    </Formik>
  );
}
