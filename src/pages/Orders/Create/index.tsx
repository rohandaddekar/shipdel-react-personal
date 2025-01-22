import Button from "../../../base-components/Button";
import { OrderProvider } from "../../../contexts/order";
import { Dispatch, SetStateAction, useState } from "react";
import OrderDetailsScreen from "./partials/OrderDetailsScreen";
import CreateNewOrderScreen from "./partials/CreateNewOrderScreen";
import ChooseShippingPartnersScreen from "./partials/ChooseShippingPartnersScreen";

export type ScreenType =
  | "CreateNewOrder"
  | "ChooseShippingPartners"
  | "OrderDetails";

interface RenderScreenProps {
  currentScreen: ScreenType;
  setCurrentScreen: Dispatch<SetStateAction<ScreenType>>;
}

interface ProgressIndicatorProps {
  currentActiveScreen: ScreenType;
}

const PROGRESS_INDICATOR_STEPS = [
  { step: 1, label: "Create New Order", screenName: "CreateNewOrder" },
  {
    step: 2,
    label: "Choose Shipping Partners",
    screenName: "ChooseShippingPartners",
  },
  { step: 3, label: "Order Details", screenName: "OrderDetails" },
];

const ProgressIndicator = ({ currentActiveScreen }: ProgressIndicatorProps) => {
  return (
    <div className="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
      {PROGRESS_INDICATOR_STEPS.map(({ step, label, screenName }) => (
        <div
          key={step}
          className="z-10 flex items-center flex-1 intro-x lg:text-center lg:block mt-5 lg:mt-0"
        >
          <Button
            variant={screenName === currentActiveScreen ? "primary" : undefined}
            className={`w-10 h-10 rounded-full ${
              screenName === currentActiveScreen
                ? ""
                : "text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"
            }`}
          >
            {step}
          </Button>
          <div
            className={`ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto ${
              screenName === currentActiveScreen
                ? "text-black"
                : "text-slate-600 dark:text-slate-400"
            }`}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

const RenderScreen = ({
  currentScreen,
  setCurrentScreen,
}: RenderScreenProps) => {
  switch (currentScreen) {
    case "CreateNewOrder":
      return <CreateNewOrderScreen setCurrentScreen={setCurrentScreen} />;
    case "ChooseShippingPartners":
      return (
        <ChooseShippingPartnersScreen setCurrentScreen={setCurrentScreen} />
      );
    case "OrderDetails":
      return <OrderDetailsScreen setCurrentScreen={setCurrentScreen} />;
    default:
      return <CreateNewOrderScreen setCurrentScreen={setCurrentScreen} />;
  }
};

function Main() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>(
    "ChooseShippingPartners"
  );

  return (
    <OrderProvider>
      <div className="py-10 mt-5 intro-y box sm:py-20">
        <ProgressIndicator currentActiveScreen={currentScreen} />

        <div className="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
          <RenderScreen
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
          />
        </div>
      </div>
    </OrderProvider>
  );
}

export default Main;
