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
      <OrderRates setCurrentScreen={setCurrentScreen} />
    </>
  );
};

export default CreateNewOrderScreen;
