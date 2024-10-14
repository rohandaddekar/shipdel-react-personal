import clsx from "clsx";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../../base-components/Button";
import { FormInput } from "../../../../base-components/Form";

interface ForgotPasswordFormData {
  email: string;
}

const forgotPasswordSchema = yup.object({
  email: yup.string().email("Email is invalid").required("Email is required"),
});

const RightSection = () => {
  const navigate = useNavigate();
  // const forgotPasswordMutation = useForgotPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    mode: "onBlur",
    resolver: yupResolver(forgotPasswordSchema),
  });

  const forgotPasswordHandler = async (data: ForgotPasswordFormData) => {
    // forgotPasswordMutation.mutate(data);
  };

  return (
    <>
      <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
        <form
          onSubmit={handleSubmit(forgotPasswordHandler)}
          className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto"
        >
          <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
            Forgot Password
          </h2>
          <div className="mt-2 text-center intro-x text-slate-400 xl:hidden">
            A few more clicks to sign in to your account. Manage all your
            e-commerce accounts in one place
          </div>
          <div className="mt-8 intro-x">
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

          <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
            <Button
              type="submit"
              variant="primary"
              className="w-full px-4 py-3 align-top"
            >
              Get OTP
            </Button>
            <Button
              type="button"
              variant="outline-secondary"
              className="w-full px-4 py-3 mt-3 align-top"
              onClick={() => navigate("/sign-in")}
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RightSection;
