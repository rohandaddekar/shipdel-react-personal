import clsx from "clsx";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useSignIn from "../../../../apis/auth/signIn";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../../base-components/Button";
import { FormInput } from "../../../../base-components/Form";

interface SignInFormData {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters"),
});

const RightSection = () => {
  const navigate = useNavigate();
  const signInMutation = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    mode: "onChange",
    resolver: yupResolver(signInSchema),
  });

  const signInHandler = async (data: SignInFormData) => {
    signInMutation.mutate(data);
  };

  return (
    <>
      <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
        <form
          onSubmit={handleSubmit(signInHandler)}
          className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto"
        >
          <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
            Sign In
          </h2>
          <div className="mt-2 text-center intro-x text-slate-400 xl:hidden">
            A few more clicks to sign in to your account. Manage all your
            e-commerce accounts in one place
          </div>
          <div className="mt-8 intro-x space-y-3">
            <div className="">
              <FormInput
                {...register("email")}
                type="email"
                className={clsx({
                  "border-danger": errors.email,
                  "block px-4 py-3 intro-x min-w-full xl:min-w-[350px]": true,
                })}
                placeholder="Email"
              />
              {errors.email && (
                <div className="mt-1 text-danger">
                  {typeof errors.email.message === "string" &&
                    errors.email.message}
                </div>
              )}
            </div>

            <div className="">
              <FormInput
                {...register("password")}
                type="password"
                className={clsx({
                  "border-danger": errors.password,
                  "block px-4 py-3 intro-x min-w-full xl:min-w-[350px]": true,
                })}
                placeholder="Password"
              />
              {errors.password && (
                <div className="mt-1 text-danger">
                  {typeof errors.password.message === "string" &&
                    errors.password.message}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-end mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
            <Button
              type="submit"
              variant="primary"
              className="w-full px-4 py-3 align-top"
            >
              Sign In
            </Button>
            <Button
              type="button"
              variant="outline-secondary"
              className="w-full px-4 py-3 mt-3 align-top"
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RightSection;
