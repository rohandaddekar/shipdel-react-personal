import clsx from "clsx";
import { useSelector } from "react-redux";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../stores/store";
import logoUrl from "../../assets/images/logo.png";

interface AuthLayoutProps {
  leftSection: ReactNode;
  rightSection: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  leftSection,
  rightSection,
}) => {
  const authUser = useSelector((state: RootState) => state.authUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) navigate("/");
  }, [authUser, navigate]);

  return (
    <>
      <div
        className={clsx([
          "-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600",
          "before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400",
          "after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700",
        ])}
      >
        <div className="container relative z-10 sm:px-10">
          <div className="block grid-cols-2 gap-4 xl:grid">
            <div className="flex-col hidden min-h-screen xl:flex">
              <div className="flex items-center pt-5 -intro-x h-40">
                <img
                  alt="Shipdel"
                  src={logoUrl}
                  className="h-full object-contain filter brightness-0 invert contrast-100"
                />
              </div>

              {leftSection}
            </div>

            {rightSection}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
