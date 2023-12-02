import axios from "axios";
import React, { useState } from "react";
import "./UserForm.css";
import { signUpSchema } from "../../schemas";
import { Field, Form, Formik, useFormik } from "formik";

import { useSignup } from "../../hooks/sign";

const SignUpForm = () => {
  const { mutate } = useSignup(
    () => alert("Success!"),
    () => alert("Error!")
  );
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isValid,
    resetForm,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    // call on submit function
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <Formik
      initialValues={values}
      onSubmit={handleSubmit}
      autoComplete="off"
      validateOnChange="true"
    >
      <div className="form-container sign-up-container">
        <Form>
          <h1>Create Account</h1>
          <span>use your email for registration</span>
          <Field
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username ? "input-error" : ""}
          />

          {errors.username && touched.username && (
            <span className="error">{errors.username}</span>
          )}
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {errors.email && touched.email && (
            <span className="error">{errors.email}</span>
          )}
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}
          />
          {errors.password && touched.password && (
            <span className="error">{errors.password}</span>
          )}

          <Field
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.confirmPassword && touched.confirmPassword
                ? "input-error"
                : ""
            }
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
          <button type="submit">Submit</button>
        </Form>
      </div>
    </Formik>
  );
};

export default SignUpForm;
