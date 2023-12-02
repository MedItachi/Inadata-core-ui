import { useMutation, useQuery, useQueryClient } from "react-query";

import { fetchSignUp, fetchSignIn } from "../../api";
// signup

const useSignup = (onSuccess, onError) => {
  return useMutation(fetchSignUp, {
    onSuccess,
    onError,
  });
};

// Sign in :
const useSignin = (onSuccess, onError) => {
  const { data, isLoading, isError, error } = useQuery("signin", fetchSignIn, {
    onSuccess,
    onError,
  });
  return { data, isLoading, isError, error };
};
export { useSignup };
