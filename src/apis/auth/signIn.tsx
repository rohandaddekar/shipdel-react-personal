import { useMutation } from "@tanstack/react-query";
import useAxios from "..";
import { useDispatch } from "react-redux";
import { signIn } from "../../stores/authUserSlice";

interface SignInFormData {
  email: string;
  password: string;
}

const useSignIn = () => {
  const axios = useAxios();
  const dispatch = useDispatch();

  const signInFn = async (payload: SignInFormData) => {
    // const res = axios.post("/auth/sign-in", payload);
    // return res;

    console.log("payload: ", payload);

    return {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    };
  };

  return useMutation({
    mutationFn: (payload: SignInFormData) => signInFn(payload),
    onSuccess: (data) => {
      console.log("Sign in success: ", data);
      dispatch(signIn(data));
    },
    onError: (error) => {
      console.log("Sign in error: ", error);
    },
  });
};

export default useSignIn;
