import {
  FormInput,
  FormLabel,
  FormSelect,
  FormSwitch,
} from "../../base-components/Form";
import { OrderData } from "../../types/order";
import { Dispatch, SetStateAction } from "react";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { orderSchema } from "../../schemas/order";
import { yupResolver } from "@hookform/resolvers/yup";
import { ScreenType } from "../../pages/Orders/Create";
import { useFieldArray, useForm } from "react-hook-form";

interface OrderRatesProps {
  setCurrentScreen: Dispatch<SetStateAction<ScreenType>>;
  isCalculator?: boolean;
}

const defaultValues: OrderData = {
  pickupPincode: 0,
  deliveryPincode: 0,
  weight: 0,
  dimensions: [{ quantity: 0, length: 0, width: 0, height: 0 }],
  paymentMode: "Prepaid",
  invoiceValue: 0,
  insurance: false,
  appointmentBasedDelivery: false,
};

const OrderRates = ({
  setCurrentScreen,
  isCalculator = false,
}: OrderRatesProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<OrderData>({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(orderSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "dimensions",
  });

  const handleAddMore = () => {
    append({ quantity: 0, length: 0, width: 0, height: 0 });
  };

  const onSubmit = (data: OrderData) => {
    console.log("Order Data: ", data);

    !isCalculator && setCurrentScreen("ChooseShippingPartners");
  };

  const handleReset = () => {
    reset(defaultValues);
  };

  return (
    <>
      <form>
        {/* BEGIN: Pickup & Delivery */}
        <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5 border p-5 rounded-xl">
          <div className="col-span-12 text-base font-semibold">
            Pickup & Destination Details
          </div>
          <div className="col-span-12 intro-y sm:col-span-6">
            <FormLabel htmlFor="pickup-pincode">
              Pickup Area Pincode
              <span className="text-danger ml-1">*</span>
            </FormLabel>
            <FormInput
              id="pickup-pincode"
              type="number"
              placeholder="400001"
              {...register("pickupPincode")}
            />
            {errors.pickupPincode && (
              <p className="text-danger text-xs mt-1">
                {errors.pickupPincode.message}
              </p>
            )}
          </div>
          <div className="col-span-12 intro-y sm:col-span-6">
            <FormLabel htmlFor="deliver-pincode">
              Deliver Area Pincode
              <span className="text-danger ml-1">*</span>
            </FormLabel>
            <FormInput
              id="deliver-pincode"
              type="number"
              placeholder="400002"
              {...register("deliveryPincode")}
            />
            {errors.deliveryPincode && (
              <p className="text-danger text-xs mt-1">
                {errors.deliveryPincode.message}
              </p>
            )}
          </div>
        </div>
        {/* END: Pickup & Delivery */}

        {/* BEGIN: Weight & Dimensions */}
        <div className="border rounded-xl mt-5">
          <div className="grid grid-cols-12 gap-4 gap-y-5 p-5 border-b border-dashed">
            <div className="col-span-12 text-base font-semibold">
              Weight & Dimensions (in cm)
            </div>
            <div className="col-span-12 intro-y">
              <FormLabel htmlFor="weight">
                Weight (in kg)
                <span className="text-danger ml-1">*</span>
              </FormLabel>
              <FormInput
                id="weight"
                type="number"
                placeholder="100"
                {...register("weight")}
              />
              {errors.weight && (
                <p className="text-danger text-xs mt-1">
                  {errors.weight.message}
                </p>
              )}
            </div>
          </div>

          <div className="p-5">
            {fields.map((field, index) => (
              <div key={field.id} className="mb-5">
                <div className="grid grid-cols-12 gap-4 gap-y-5">
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor={`dimensions.${index}.quantity`}>
                      Quantity
                      <span className="text-danger ml-1">*</span>
                    </FormLabel>
                    <FormInput
                      type="number"
                      placeholder="1"
                      {...register(`dimensions.${index}.quantity`)}
                    />
                    {errors.dimensions?.[index]?.quantity && (
                      <p className="text-danger text-xs mt-1">
                        {errors.dimensions[index]?.quantity?.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor={`dimensions.${index}.length`}>
                      Length
                      <span className="text-danger ml-1">*</span>
                    </FormLabel>
                    <FormInput
                      type="number"
                      placeholder="10"
                      {...register(`dimensions.${index}.length`)}
                    />
                    {errors.dimensions?.[index]?.length && (
                      <p className="text-danger text-xs mt-1">
                        {errors.dimensions[index]?.length?.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor={`dimensions.${index}.width`}>
                      Width
                      <span className="text-danger ml-1">*</span>
                    </FormLabel>
                    <FormInput
                      type="number"
                      placeholder="10"
                      {...register(`dimensions.${index}.width`)}
                    />
                    {errors.dimensions?.[index]?.width && (
                      <p className="text-danger text-xs mt-1">
                        {errors.dimensions[index]?.width?.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor={`dimensions.${index}.height`}>
                      Height
                      <span className="text-danger ml-1">*</span>
                    </FormLabel>
                    <FormInput
                      type="number"
                      placeholder="10"
                      {...register(`dimensions.${index}.height`)}
                    />
                    {errors.dimensions?.[index]?.height && (
                      <p className="text-danger text-xs mt-1">
                        {errors.dimensions[index]?.height?.message}
                      </p>
                    )}
                  </div>
                </div>
                {index > 0 && (
                  <Button
                    type="button"
                    variant="secondary"
                    className="mt-3"
                    onClick={() => remove(index)}
                  >
                    <Lucide icon="Trash2" className="w-4 h-4 mr-2" />
                    Remove
                  </Button>
                )}
              </div>
            ))}

            <div className="flex items-center justify-end mt-5">
              <Button type="button" variant="primary" onClick={handleAddMore}>
                <Lucide icon="Plus" className="w-4 h-4 mr-2" />
                Add More
              </Button>
            </div>
          </div>
        </div>
        {/* END: Weight & Dimensions */}

        {/* BEGIN: Mode & Invoice Details */}
        <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5 border p-5 rounded-xl">
          <div className="col-span-12 text-base font-semibold">
            Mode & Invoice Details
          </div>
          <div className="col-span-12 intro-y sm:col-span-6">
            <FormLabel htmlFor="payment">
              Payment Mode
              <span className="text-danger ml-1">*</span>
            </FormLabel>
            <FormSelect id="payment" {...register("paymentMode")}>
              <option value={"Prepaid"}>Prepaid</option>
              <option value={"COD"}>COD</option>
              <option value={"To Pay"}>To Pay</option>
              <option value={"Franchise To Pay"}>Franchise To Pay</option>
            </FormSelect>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6">
            <FormLabel htmlFor="invoice">
              Invoice Value (in INR)
              <span className="text-danger ml-1">*</span>
            </FormLabel>
            <FormInput
              id="invoice"
              type="number"
              placeholder="9999"
              {...register("invoiceValue")}
            />
            {errors.invoiceValue && (
              <p className="text-danger text-xs mt-1">
                {errors.invoiceValue.message}
              </p>
            )}
          </div>
        </div>
        {/* END: Mode & Invoice Details */}

        {/* BEGIN: Insurance & Appointment  Details */}
        <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5 border p-5 rounded-xl">
          <div className="col-span-12 text-base font-semibold">
            Insurance & Appointment Details
          </div>
          <div className="col-span-12 intro-y sm:col-span-6">
            <FormSwitch>
              <FormSwitch.Label htmlFor="insurance" className="mr-5">
                Insurance
                <span className="text-danger ml-1">*</span>
              </FormSwitch.Label>
              <FormSwitch.Input id="insurance" type="checkbox" />
            </FormSwitch>
          </div>
          <div className="col-span-12 intro-y sm:col-span-6">
            <FormSwitch>
              <FormSwitch.Label htmlFor="appoinment" className="mr-5">
                Appointment Base Delivery
                <span className="text-danger ml-1">*</span>
              </FormSwitch.Label>
              <FormSwitch.Input id="appoinment" type="checkbox" />
            </FormSwitch>
          </div>
        </div>
        {/* END: Insurance & Appointment  Details */}
      </form>

      <div className="flex items-center justify-center mt-8 intro-y sm:justify-end">
        <Button variant="secondary" className="w-24" onClick={handleReset}>
          Reset
        </Button>
        <Button
          variant="primary"
          className="w-24 ml-2"
          onClick={handleSubmit(onSubmit)}
        >
          {isCalculator ? "Calculate" : "Next"}
        </Button>
      </div>
    </>
  );
};

export default OrderRates;
