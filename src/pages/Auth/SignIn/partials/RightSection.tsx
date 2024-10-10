import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../base-components/Button";
import { FormInput } from "../../../../base-components/Form";

const RightSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
        <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
          <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
            Sign In
          </h2>
          <div className="mt-2 text-center intro-x text-slate-400 xl:hidden">
            A few more clicks to sign in to your account. Manage all your
            e-commerce accounts in one place
          </div>
          <div className="mt-8 intro-x">
            <FormInput
              type="text"
              className="block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
              placeholder="Email"
            />
            <FormInput
              type="password"
              className="block px-4 py-3 mt-4 intro-x min-w-full xl:min-w-[350px]"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-end mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
            {/* <div className="flex items-center mr-auto">
              <FormCheck.Input
                id="remember-me"
                type="checkbox"
                className="mr-2 border"
              />
              <label
                className="cursor-pointer select-none"
                htmlFor="remember-me"
              >
                Remember me
              </label>
            </div> */}
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
            <Button variant="primary" className="w-full px-4 py-3 align-top">
              Sign In
            </Button>
            <Button
              variant="outline-secondary"
              className="w-full px-4 py-3 mt-3 align-top"
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </Button>
          </div>

          {/* <div className="mt-10 text-center intro-x xl:mt-24 text-slate-600 dark:text-slate-500 xl:text-left">
            By signin up, you agree to our{" "}
            <a className="text-primary dark:text-slate-200" href="">
              Terms and Conditions
            </a>{" "}
            &{" "}
            <a className="text-primary dark:text-slate-200" href="">
              Privacy Policy
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default RightSection;
