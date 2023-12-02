import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Field, Form, Formik, useFormik } from "formik";
import { signInSchema } from "../../schemas";
import { getUser } from "../../storage/LocalStorage";
import { useNavigate } from "react-router-dom";
const SignInForm = () => {
  const navigate = useNavigate();

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: signInSchema,
    // call on submit function
    onSubmit: (values) => {
      const user = getUser(values.username, values.password);
      if (user) {
        resetForm();
        navigate("/charts");
      } else {
        alert("Login failed");
      }
    },
  });
  return (
    <Formik
      initialValues={values}
      onSubmit={handleSubmit}
      autoComplete="off"
      validateOnChange="true"
    >
      <div className="form-container sign-in-container">
        <h1>Sign in</h1>
        <Form>
          <Field
            type="text"
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
          <button type="submit">sign </button>
        </Form>
      </div>
    </Formik>
  );
};

export default SignInForm;
