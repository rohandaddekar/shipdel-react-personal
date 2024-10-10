import {
  FormCheck,
  FormInput,
  FormLabel,
  FormSelect,
} from "../../../../base-components/Form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../base-components/Button";

const RightSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
        <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-full">
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
                type="text"
                className="block px-4 py-3 intro-x min-w-full"
                placeholder="First Name"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <FormInput
                type="text"
                className="block px-4 py-3 intro-x min-w-full"
                placeholder="Last Name"
              />
            </div>
            <div className="col-span-12">
              <FormInput
                type="text"
                className="block px-4 py-3 intro-x min-w-full"
                placeholder="Company Name"
              />
            </div>
            <div className="col-span-12">
              <FormInput
                type="number"
                className="block px-4 py-3 intro-x min-w-full"
                placeholder="Phone Number"
              />
            </div>
            <div className="col-span-12">
              <FormInput
                type="text"
                className="block px-4 py-3 intro-x min-w-full"
                placeholder="Email"
              />
            </div>
            <div className="col-span-12">
              <FormInput
                type="text"
                className="block px-4 py-3 intro-x min-w-full"
                placeholder="Password"
              />
            </div>
            <div className="col-span-12">
              <div className="grid w-full h-1 grid-cols-12 gap-4 intro-x">
                <div className="h-full col-span-3 rounded bg-success"></div>
                <div className="h-full col-span-3 rounded bg-success"></div>
                <div className="h-full col-span-3 rounded bg-success"></div>
                <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
              </div>
            </div>

            <div className="col-span-12">
              <FormInput
                type="text"
                className="block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                placeholder="Password Confirmation"
              />
            </div>

            <div className="col-span-12">
              <FormLabel htmlFor="how-many-orders">
                How many orders do you ship in a month?
              </FormLabel>
              <FormSelect
                id="how-many-orders"
                className="block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                aria-label=".form-select-lg example"
              >
                <option value="0-100">0 to 100 Orders</option>
                <option value="100-500">100 to 500 Orders</option>
                <option value="500-1000">500 to 1000 Orders</option>
              </FormSelect>
            </div>
          </div>
          <div className="flex items-center mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
            <FormCheck.Input
              id="remember-me"
              type="checkbox"
              className="mr-2 border"
            />
            <label className="cursor-pointer select-none" htmlFor="remember-me">
              I agree to the Envato
            </label>
            <Link
              to="/privacy-policy"
              className="ml-1 text-primary dark:text-slate-200"
            >
              Privacy Policy
            </Link>
            .
          </div>
          <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
            <Button variant="primary" className="w-full px-4 py-3 align-top">
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
        </div>
      </div>
    </>
  );
};

export default RightSection;
