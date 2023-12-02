import instance from "../axios/interceptor";

// fetch for sign up
export const fetchSignUp = async (values) => {
  const response = await instance.post("/auth/register", values);
  const data = await response.data;
  return data;
};

// fetch for sign in
export const fetchSignIn = async (values) => {
  const response = await instance.post("/auth/login", values);
  const data = await response.data;
  return data;
};
