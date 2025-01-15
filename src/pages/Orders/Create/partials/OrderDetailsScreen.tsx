import {
  FormInput,
  FormLabel,
  FormSelect,
} from "../../../../base-components/Form";
import { ScreenType } from "..";
import { Dispatch, SetStateAction } from "react";
import Button from "../../../../base-components/Button";

interface OrderDetailsScreenProps {
  setCurrentScreen: Dispatch<SetStateAction<ScreenType>>;
}

const OrderDetailsScreen = ({ setCurrentScreen }: OrderDetailsScreenProps) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
        <div className="col-span-12 intro-y sm:col-span-6">
          <FormLabel htmlFor="input-wizard-1">From</FormLabel>
          <FormInput
            id="input-wizard-1"
            type="text"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="col-span-12 intro-y sm:col-span-6">
          <FormLabel htmlFor="input-wizard-6">Size</FormLabel>
          <FormSelect id="input-wizard-6">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </FormSelect>
        </div>
        <div className="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
          <Button
            variant="secondary"
            className="w-24"
            onClick={() => setCurrentScreen("ChooseShippingPartners")}
          >
            Previous
          </Button>
          <Button variant="primary" className="w-24 ml-2">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default OrderDetailsScreen;
