import useAxios from "..";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../stores/authUserTokensSlice";

interface SignInFormData {
  email: string;
  password: string;
}

const useSignIn = () => {
  const axios = useAxios();
  const dispatch = useDispatch();

  const signInFn = async (payload: SignInFormData) => {
    const res = axios.post("/api/users/login/", payload);
    return res;
  };

  return useMutation({
    mutationFn: (payload: SignInFormData) => signInFn(payload),
    onSuccess: (data) => {
      // console.log("Sign in success: ", data);
      dispatch(
        signIn({
          refresh: data?.data?.refresh,
          access: data?.data?.access,
        })
      );
    },
    onError: (error) => {
      console.log("Sign in error: ", error);
    },
  });
};

export default useSignIn;
