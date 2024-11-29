// import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();

  const fieldIdName = nanoid(6);
  const fieldIdNumber = nanoid(6);

  const inputRules = Yup.object({
    name: Yup.string().required("This field is required!").min(3).max(50),
    number: Yup.string().required("This field is required!").min(3).max(50),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const onSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(6),
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };
  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={inputRules}
      >
        <Form className={s.form}>
          <label htmlFor={fieldIdName} className={s.label}>
            <span> Name</span>
            <Field
              type="text"
              name="name"
              className={s.field}
              placeholder="Name"
            ></Field>
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>

          <label htmlFor={fieldIdNumber} className={s.label}>
            <span>Number</span>
            <Field
              type="text"
              name="number"
              className={s.field}
              placeholder="XXX-XX-XX"
            ></Field>
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>

          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
