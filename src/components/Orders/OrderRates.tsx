import {
  FormInput,
  FormLabel,
  FormSelect,
  FormSwitch,
  InputGroup,
} from "../../base-components/Form";
import { twMerge } from "tailwind-merge";
import { OrderData } from "../../types/order";
import { Dispatch, SetStateAction } from "react";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { orderSchema } from "../../schemas/order";
import { yupResolver } from "@hookform/resolvers/yup";
import { ScreenType } from "../../pages/Orders/Create";
import { useOrderContext } from "../../contexts/order";
import { useFieldArray, useForm, useWatch } from "react-hook-form";

interface OrderRatesProps {
  setCurrentScreen?: Dispatch<SetStateAction<ScreenType>>;
  isCalculator?: boolean;
}

const OrderRates = ({
  setCurrentScreen,
  isCalculator = false,
}: OrderRatesProps) => {
  const { orderData, updateOrderData, defaultOrderData } = useOrderContext();

  const {
    register,
    handleSubmit,
    control,
    reset,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<OrderData>({
    mode: "onBlur",
    defaultValues: orderData,
    resolver: yupResolver(orderSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "dimensions",
  });

  // Watch weights specifically using useWatch
  const dimensions = useWatch({
    control,
    name: "dimensions",
  });

  // Calculate total weight from the watched dimensions
  const totalWeight =
    dimensions?.reduce(
      (sum, dimension) => sum + (Number(dimension?.weight) || 0),
      0
    ) || 0;

  const handleAddMore = async () => {
    // Get the current dimensions array
    const currentDimensions = getValues("dimensions");

    // Validate only the dimensions fields
    const isValid = await trigger("dimensions");

    // Check if all fields in the last dimension object are filled
    const lastDimension = currentDimensions[currentDimensions.length - 1];
    const isLastDimensionFilled =
      lastDimension &&
      lastDimension.quantity > 0 &&
      lastDimension.weight > 0 &&
      lastDimension.length > 0 &&
      lastDimension.width > 0 &&
      lastDimension.height > 0;

    if (isValid && isLastDimensionFilled) {
      append({ quantity: 0, weight: 0, length: 0, width: 0, height: 0 });
    } else {
      // You can add a toast notification here to inform the user
      alert(
        "Please fill all the fields in the current dimension before adding more"
      );
    }
  };

  const onSubmit = (data: OrderData) => {
    console.log("Order Data: ", data);

    if (!isCalculator && setCurrentScreen) {
      updateOrderData(data);
      setCurrentScreen("ChooseShippingPartners");
    }
  };

  const handleReset = () => reset(defaultOrderData);

  return (
    <>
      <form>
        {/* BEGIN: Pickup & Delivery */}
        <div className="grid grid-cols-12 gap-4 gap-y-5 border p-5 rounded-xl">
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
              className={twMerge([errors.pickupPincode && "border-danger"])}
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
              className={twMerge([errors.deliveryPincode && "border-danger"])}
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
          <div className="flex items-center justify-between gap-5 p-5 pb-0">
            <div className="text-base font-semibold">
              Weight & Dimensions (in cm)
            </div>
            <div className="text-base font-semibold">
              Total Weight: {totalWeight.toFixed(2)} kg
            </div>
          </div>

          <div className="p-5">
            {fields.map((field, index) => (
              <div key={field.id} className="mb-5 bg-slate-100 p-5 rounded-lg">
                <div className="grid grid-cols-5 gap-4 gap-y-5">
                  <div className="intro-y">
                    <FormLabel htmlFor={`dimensions.${index}.quantity`}>
                      Quantity
                      <span className="text-danger ml-1">*</span>
                    </FormLabel>
                    <FormInput
                      type="number"
                      placeholder="1"
                      className={twMerge([
                        errors.dimensions?.[index]?.quantity && "border-danger",
                      ])}
                      {...register(`dimensions.${index}.quantity`)}
                    />
                    {errors.dimensions?.[index]?.quantity && (
                      <p className="text-danger text-xs mt-1">
                        {errors.dimensions[index]?.quantity?.message}
                      </p>
                    )}
                  </div>
                  <div className="intro-y">
                    <FormLabel htmlFor={`dimensions.${index}.weight`}>
                      Weight
                      <span className="text-danger ml-1">*</span>
                    </FormLabel>
                    <FormInput
                      type="number"
                      placeholder="1"
                      className={twMerge([
                        errors.dimensions?.[index]?.weight && "border-danger",
                      ])}
                      {...register(`dimensions.${index}.weight`)}
                    />
                    {errors.dimensions?.[index]?.weight && (
                      <p className="text-danger text-xs mt-1">
                        {errors.dimensions[index]?.weight?.message}
                      </p>
                    )}
                  </div>
                  <div className="intro-y">
                    <FormLabel htmlFor={`dimensions.${index}.length`}>
                      Length
                      <span className="text-danger ml-1">*</span>
                    </FormLabel>
                    <FormInput
                      type="number"
                      placeholder="10"
                      className={twMerge([
                        errors.dimensions?.[index]?.length && "border-danger",
                      ])}
                      {...register(`dimensions.${index}.length`)}
                    />
                    {errors.dimensions?.[index]?.length && (
                      <p className="text-danger text-xs mt-1">
                        {errors.dimensions[index]?.length?.message}
                      </p>
                    )}
                  </div>
                  <div className="intro-y">
                    <FormLabel htmlFor={`dimensions.${index}.width`}>
                      Width
                      <span className="text-danger ml-1">*</span>
                    </FormLabel>
                    <FormInput
                      type="number"
                      placeholder="10"
                      className={twMerge([
                        errors.dimensions?.[index]?.width && "border-danger",
                      ])}
                      {...register(`dimensions.${index}.width`)}
                    />
                    {errors.dimensions?.[index]?.width && (
                      <p className="text-danger text-xs mt-1">
                        {errors.dimensions[index]?.width?.message}
                      </p>
                    )}
                  </div>
                  <div className="intro-y">
                    <FormLabel htmlFor={`dimensions.${index}.height`}>
                      Height
                      <span className="text-danger ml-1">*</span>
                    </FormLabel>
                    <FormInput
                      type="number"
                      placeholder="10"
                      className={twMerge([
                        errors.dimensions?.[index]?.height && "border-danger",
                      ])}
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
                  <div className="flex items-center justify-end mt-3">
                    <Button
                      type="button"
                      variant="danger"
                      onClick={() => remove(index)}
                    >
                      <Lucide icon="Trash2" className="w-4 h-4" />
                    </Button>
                  </div>
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
            <FormSelect
              id="payment"
              className={twMerge([errors.paymentMode && "border-danger"])}
              {...register("paymentMode")}
            >
              <option value={"Prepaid"}>Prepaid</option>
              <option value={"COD"}>COD</option>
              <option value={"To Pay"}>To Pay</option>
              <option value={"Franchise To Pay"}>Franchise To Pay</option>
            </FormSelect>
            {errors.paymentMode && (
              <p className="text-danger text-xs mt-1">
                {errors.paymentMode.message}
              </p>
            )}
          </div>
          <div className="col-span-12 intro-y sm:col-span-6">
            <FormLabel htmlFor="invoice">
              Invoice Value (in INR)
              <span className="text-danger ml-1">*</span>
            </FormLabel>
            <InputGroup>
              <InputGroup.Text
                id="input-group-email"
                className={twMerge([errors.invoiceValue && "border-danger"])}
              >
                ₹
              </InputGroup.Text>
              <FormInput
                id="invoice"
                type="number"
                placeholder="9999"
                className={twMerge([errors.invoiceValue && "border-danger"])}
                {...register("invoiceValue")}
              />
            </InputGroup>
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
              <FormSwitch.Input
                id="insurance"
                type="checkbox"
                {...register("insurance")}
              />
            </FormSwitch>
            {errors.insurance && (
              <p className="text-danger text-xs mt-1">
                {errors.insurance.message}
              </p>
            )}
          </div>
          <div className="col-span-12 intro-y sm:col-span-6">
            <FormSwitch>
              <FormSwitch.Label htmlFor="appoinment" className="mr-5">
                Appointment Base Delivery
                <span className="text-danger ml-1">*</span>
              </FormSwitch.Label>
              <FormSwitch.Input
                id="appoinment"
                type="checkbox"
                {...register("appointmentBasedDelivery")}
              />
            </FormSwitch>
            {errors.appointmentBasedDelivery && (
              <p className="text-danger text-xs mt-1">
                {errors.appointmentBasedDelivery.message}
              </p>
            )}
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
