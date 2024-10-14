import {
  FormCheck,
  FormInput,
  FormLabel,
  FormSelect,
} from "../../../../base-components/Form";
import clsx from "clsx";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../../base-components/Button";

interface SignUpFormData {
  firstName: string;
  lastName: string;
  companyName: string;
  phone: number;
  email: string;
  password: string;
  confirmPassword: string;
  ordersPerMonth: string;
  agreeToTerms: boolean;
}

const signUpSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  companyName: yup.string().required("Company name is required"),
  phone: yup
    .number()
    .typeError("Phone number is invalid")
    .required("Phone number is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  ordersPerMonth: yup
    .string()
    .required("Please select the number of orders you ship in a month"),
  agreeToTerms: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("You must agree to the terms and conditions"),
});

const RightSection = () => {
  const navigate = useNavigate();
  // const signUpMutation = useSignUp();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    mode: "onBlur",
    resolver: yupResolver(signUpSchema),
  });

  const signUpHandler = async (data: SignUpFormData) => {
    // signUpMutation.mutate(data);
    console.log("data: ", data);
  };

  return (
    <>
      <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
        <form
          onSubmit={handleSubmit(signUpHandler)}
          className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-full"
        >
          <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
            Sign Up
          </h2>
          <div className="mt-2 text-center intro-x text-slate-400 dark:text-slate-400 xl:hidden">
            A few more clicks to sign in to your account. Manage all your
            e-commerce accounts in one place
          </div>
          <div className="mt-8 intro-x grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-6">
              <FormInput
                {...register("firstName")}
                type="text"
                className={clsx({
                  "border-danger": errors.firstName,
                  "block px-4 py-3 intro-x min-w-full": true,
                })}
                placeholder="First Name"
              />

              {errors.firstName && (
                <div className="mt-1 text-danger">
                  {typeof errors.firstName.message === "string" &&
                    errors.firstName.message}
                </div>
              )}
            </div>

            <div className="col-span-12 md:col-span-6">
              <FormInput
                {...register("lastName")}
                type="text"
                className={clsx({
                  "border-danger": errors.lastName,
                  "block px-4 py-3 intro-x min-w-full": true,
                })}
                placeholder="Last Name"
              />

              {errors.lastName && (
                <div className="mt-1 text-danger">
                  {typeof errors.lastName.message === "string" &&
                    errors.lastName.message}
                </div>
              )}
            </div>

            <div className="col-span-12">
              <FormInput
                {...register("companyName")}
                type="text"
                className={clsx({
                  "border-danger": errors.companyName,
                  "block px-4 py-3 intro-x min-w-full": true,
                })}
                placeholder="Company Name"
              />

              {errors.companyName && (
                <div className="mt-1 text-danger">
                  {typeof errors.companyName.message === "string" &&
                    errors.companyName.message}
                </div>
              )}
            </div>

            <div className="col-span-12">
              <FormInput
                {...register("phone")}
                type="number"
                className={clsx({
                  "border-danger": errors.phone,
                  "block px-4 py-3 intro-x min-w-full": true,
                })}
                placeholder="Phone Number"
              />

              {errors.phone && (
                <div className="mt-1 text-danger">
                  {typeof errors.phone.message === "string" &&
                    errors.phone.message}
                </div>
              )}
            </div>

            <div className="col-span-12">
              <FormInput
                {...register("email")}
                type="text"
                className={clsx({
                  "border-danger": errors.email,
                  "block px-4 py-3 intro-x min-w-full": true,
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

            <div className="col-span-12">
              <FormInput
                {...register("password")}
                type="password"
                className={clsx({
                  "border-danger": errors.password,
                  "block px-4 py-3 intro-x min-w-full": true,
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

            {/* <div className="col-span-12">
              <div className="grid w-full h-1 grid-cols-12 gap-4 intro-x">
                <div className="h-full col-span-3 rounded bg-success"></div>
                <div className="h-full col-span-3 rounded bg-success"></div>
                <div className="h-full col-span-3 rounded bg-success"></div>
                <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
              </div>
            </div> */}

            <div className="col-span-12">
              <FormInput
                {...register("confirmPassword")}
                type="password"
                className={clsx({
                  "border-danger": errors.confirmPassword,
                  "block px-4 py-3 intro-x min-w-full": true,
                })}
                placeholder="Password Confirmation"
              />

              {errors.confirmPassword && (
                <div className="mt-1 text-danger">
                  {typeof errors.confirmPassword.message === "string" &&
                    errors.confirmPassword.message}
                </div>
              )}
            </div>

            <div className="col-span-12">
              <Controller
                name="ordersPerMonth"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormSelect
                    {...field}
                    id="ordersPerMonth"
                    className={clsx({
                      "border-danger": errors.ordersPerMonth,
                      "block px-4 py-3 intro-x min-w-full": true,
                    })}
                  >
                    <option value="">
                      How many orders do you ship in a month?
                    </option>
                    <option value="0-100">0 to 100 Orders</option>
                    <option value="100-500">100 to 500 Orders</option>
                    <option value="500-1000">500 to 1000 Orders</option>
                  </FormSelect>
                )}
              />
              {errors.ordersPerMonth && (
                <div className="mt-1 text-danger">
                  {errors.ordersPerMonth.message}
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
              <Controller
                name="agreeToTerms"
                control={control}
                defaultValue={true}
                render={({ field }) => (
                  <FormCheck.Input
                    {...field}
                    id="agreeToTerms"
                    type="checkbox"
                    checked={field.value}
                    className={clsx({
                      "border-danger": errors.agreeToTerms,
                      "mr-2 border": true,
                    })}
                  />
                )}
              />
              <label
                className="cursor-pointer select-none"
                htmlFor="agreeToTerms"
              >
                I agree to the Shipdel
              </label>
              <Link
                to="/privacy-policy"
                className="ml-1 text-primary dark:text-slate-200"
              >
                Privacy Policy
              </Link>
              .
            </div>

            {errors.agreeToTerms && (
              <div className="mt-1 text-danger">
                {typeof errors.agreeToTerms.message === "string" &&
                  errors.agreeToTerms.message}
              </div>
            )}
          </div>

          <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
            <Button
              type="submit"
              variant="primary"
              className="w-full px-4 py-3 align-top"
            >
              Sign Up
            </Button>
            <Button
              variant="outline-secondary"
              className="w-full px-4 py-3 mt-3 align-top"
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RightSection;
