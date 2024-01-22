import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

export default function ContactForm({ addContact }) {
  const initialValues = {
    name: "",
    number: "",
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const nameId = useId();
  const numberId = useId();

  function handleSubmit(values, actions) {
    addContact({ id: nanoid(), name: values.name, number: values.number });
    actions.resetForm();
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form>
        <label htmlFor={nameId}></label>
        <Field type="text" name="name" id={nameId}></Field>
        <ErrorMessage name="name" as="span"></ErrorMessage>
        <label htmlFor={numberId}></label>
        <Field type="text" name="number" id={numberId}></Field>
        <ErrorMessage name="number" as="span"></ErrorMessage>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
