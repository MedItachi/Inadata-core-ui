import * as yup from "yup";

const rulePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;

const signUpSchema = yup.object().shape({
  username: yup.string().required("Username is required").min(4),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required").min(5),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const signInSchema = yup.object().shape({
  username: yup.string().required("Username is required").min(4),
  password: yup.string().required("Password is required").min(4),
});

export { signUpSchema, signInSchema };
