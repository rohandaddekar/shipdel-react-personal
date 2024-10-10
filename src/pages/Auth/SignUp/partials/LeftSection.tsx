import illustrationUrl from "../../../../assets/images/illustration.svg";

const LeftSection = () => {
  return (
    <>
      <div className="my-auto">
        <img
          alt="Midone Tailwind HTML Admin Template"
          className="w-1/2 -mt-16 -intro-x"
          src={illustrationUrl}
        />
        <div className="mt-10 text-4xl font-medium leading-tight text-white -intro-x">
          A few more clicks to <br />
          sign up to your account.
        </div>
        <div className="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400">
          Manage all your e-commerce accounts in one place
        </div>
      </div>
    </>
  );
};

export default LeftSection;
