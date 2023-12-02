import React from "react";
import axios from "axios";
import { useState } from "react";
import { Field, Formik, useFormik } from "formik";
import { signInSchema } from "../../schemas";
const SignInForm = () => {
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
      password: "",
    },
    validationSchema: signInSchema,
    // call on submit function
  });
  return (
    <Formik initialValues={values} onSubmit={handleSubmit} autoComplete="off">
      <div className="form-container sign-in-container">
        <h1>Sign in</h1>
        <Field
          type="email"
          name="username"
          id="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Username"
          className={errors.username && touched.username ? "input-error" : ""}
        />
        {errors.username && touched.username && (
          <span style={{ color: "red" }}>{errors.username}</span>
        )}
        <Field
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Password"
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
        <button type="submit">signUp</button>
      </div>
    </Formik>
  );
};

export default SignInForm;
