import { useNavigate } from "react-router-dom";
import Button from "../../../../base-components/Button";
import { FormInput } from "../../../../base-components/Form";

const RightSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
        <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
          <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
            Forgot Password
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
          </div>

          <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
            <Button variant="primary" className="w-full px-4 py-3 align-top">
              Get OTP
            </Button>
            <Button
              variant="outline-secondary"
              className="w-full px-4 py-3 mt-3 align-top"
              onClick={() => navigate("/sign-in")}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSection;
