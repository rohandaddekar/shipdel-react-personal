import AuthLayout from "../../../layouts/Auth";
import LeftSection from "./partials/LeftSection";
import RightSection from "./partials/RightSection";

function Main() {
  return (
    <>
      <AuthLayout
        leftSection={<LeftSection />}
        rightSection={<RightSection />}
      />
    </>
  );
}

export default Main;
