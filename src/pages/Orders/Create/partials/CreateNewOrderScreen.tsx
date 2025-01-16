import { ScreenType } from "..";
import { Dispatch, SetStateAction } from "react";
import OrderRates from "../../../../components/Orders/OrderRates";

interface CreateNewOrderScreenProps {
  setCurrentScreen: Dispatch<SetStateAction<ScreenType>>;
}

const CreateNewOrderScreen = ({
  setCurrentScreen,
}: CreateNewOrderScreenProps) => {
  return (
    <>
      <div className="mt-5">
        <OrderRates setCurrentScreen={setCurrentScreen} />
      </div>
    </>
  );
};

export default CreateNewOrderScreen;
