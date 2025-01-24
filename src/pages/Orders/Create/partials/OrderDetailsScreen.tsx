import {
  FormInput,
  FormLabel,
  FormSelect,
} from "../../../../base-components/Form";
import { ScreenType } from "..";
import { Dispatch, SetStateAction } from "react";
import Button from "../../../../base-components/Button";
import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { OrderDetails } from "../../../../types/order";
import { orderDetailsSchema } from "../../../../schemas/order";

interface OrderDetailsScreenProps {
  setCurrentScreen: Dispatch<SetStateAction<ScreenType>>;
}

const defaultOrderDetails: OrderDetails = {
  orderId: 0,
  pickupPoint: "",
  productType: "",
  sellerName: "",
  sellerAddress: "",
  sellerGstin: "",
  productDesc: "",
  hsnCode: 0,
  ewayBillNo: 0,
  invoiceNo: 0,
  customerName: "",
  customerPhone: 0,
  customerEmail: "",
  customerAddress: "",
  customerCity: "",
  customerState: "",
};

const OrderDetailsScreen = ({ setCurrentScreen }: OrderDetailsScreenProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<OrderDetails>({
    mode: "onBlur",
    defaultValues: defaultOrderDetails,
    resolver: yupResolver(orderDetailsSchema),
  });

  const onSubmit = (data: OrderDetails) => {
    console.log("Order details Data: ", data);
  };

  return (
    <>
      <form>
        {/* BEGIN: Order Details */}
        <div className="grid grid-cols-12 gap-4 gap-y-5 border p-5 rounded-xl">
          <div className="col-span-12 text-base font-semibold">
            Order Details
          </div>
          <div className="col-span-12 intro-y sm:col-span-4">
            <FormLabel htmlFor="order-id">
              Order ID Number
              <span className="text-danger ml-1">*</span>
            </FormLabel>
            <FormInput
              id="order-id"
              type="number"
              placeholder="98565965"
              className={twMerge([errors.orderId && "border-danger"])}
              {...register("orderId")}
            />
            {errors.orderId && (
              <p className="text-danger text-xs mt-1">
                {errors.orderId.message}
              </p>
            )}
          </div>
          <div className="col-span-12 intro-y sm:col-span-4">
            <FormLabel htmlFor="pickup-point">
              Pickup Point
              <span className="text-danger ml-1">*</span>
            </FormLabel>
            <FormInput
              id="pickup-point"
              type="text"
              placeholder="Mumbai"
              className={twMerge([errors.pickupPoint && "border-danger"])}
              {...register("pickupPoint")}
            />
            {errors.pickupPoint && (
              <p className="text-danger text-xs mt-1">
                {errors.pickupPoint.message}
              </p>
            )}
          </div>
          <div className="col-span-12 intro-y sm:col-span-4">
            <FormLabel htmlFor="product-type">
              Product Type
              <span className="text-danger ml-1">*</span>
            </FormLabel>
            <FormInput
              id="product-type"
              type="text"
              placeholder="NON DOCUMENT"
              className={twMerge([errors.productType && "border-danger"])}
              {...register("productType")}
            />
            {errors.productType && (
              <p className="text-danger text-xs mt-1">
                {errors.productType.message}
              </p>
            )}
          </div>
        </div>
        {/* END: Order Details */}

        {/* BEGIN: Seller Details */}
        <div className="grid grid-cols-12 gap-4 gap-y-5 border p-5 rounded-xl mt-5">
          <div className="col-span-12 text-base font-semibold">
            Seller Details
          </div>
          <div className="col-span-12 intro-y sm:col-span-4">
            <FormLabel htmlFor="seller-name">
              Seller Name
              <span className="text-danger ml-1">*</span>
            </FormLabel>
            <FormInput
              id="seller-name"
              type="text"
              placeholder="John Doe"
              className={twMerge([errors.sellerName && "border-danger"])}
              {...register("sellerName")}
            />
            {errors.sellerName && (
              <p className="text-danger text-xs mt-1">
                {errors.sellerName.message}
              </p>
            )}
          </div>
          <div className="col-span-12 intro-y sm:col-span-4">
            <FormLabel htmlFor="seller-address">
              Seller Address
              <span className="text-danger ml-1">*</span>
            </FormLabel>
            <FormInput
              id="seller-address"
              type="text"
              placeholder="Mumbai"
              className={twMerge([errors.sellerAddress && "border-danger"])}
              {...register("sellerAddress")}
            />
            {errors.sellerAddress && (
              <p className="text-danger text-xs mt-1">
                {errors.sellerAddress.message}
              </p>
            )}
          </div>
          <div className="col-span-12 intro-y sm:col-span-4">
            <FormLabel htmlFor="seller-gstin">Seller GSTIN</FormLabel>
            <FormInput
              id="seller-gstin"
              type="number"
              placeholder="98569759"
              className={twMerge([errors.sellerGstin && "border-danger"])}
              {...register("sellerGstin")}
            />
            {errors.sellerGstin && (
              <p className="text-danger text-xs mt-1">
                {errors.sellerGstin.message}
              </p>
            )}
          </div>
        </div>
        {/* END: Seller Details */}

        {/* BEGIN: Other Details */}
        <div className="grid grid-cols-12 gap-4 gap-y-5 border p-5 rounded-xl mt-5">
          <div className="col-span-12 text-base font-semibold">
            Other Details
          </div>
          <div className="col-span-12 intro-y sm:col-span-3">
            <FormLabel htmlFor="product-desc">
              Product Description
              <span className="text-danger ml-1">*</span>
            </FormLabel>
            <FormInput
              id="product-desc"
              type="text"
              placeholder="description"
              className={twMerge([errors.productDesc && "border-danger"])}
              {...register("productDesc")}
            />
            {errors.productDesc && (
              <p className="text-danger text-xs mt-1">
                {errors.productDesc.message}
              </p>
            )}
          </div>
          <div className="col-span-12 intro-y sm:col-span-3">
            <FormLabel htmlFor="hsn-code">HSN code</FormLabel>
            <FormInput
              id="hsn-code"
              type="number"
              placeholder="98569759"
              className={twMerge([errors.hsnCode && "border-danger"])}
              {...register("hsnCode")}
            />
            {errors.hsnCode && (
              <p className="text-danger text-xs mt-1">
                {errors.hsnCode.message}
              </p>
            )}
          </div>
          <div className="col-span-12 intro-y sm:col-span-3">
            <FormLabel htmlFor="ewaybill">Ewaybill Number</FormLabel>
            <FormInput
              id="ewaybill"
              type="number"
              placeholder="98569759"
              className={twMerge([errors.ewayBillNo && "border-danger"])}
              {...register("ewayBillNo")}
            />
            {errors.ewayBillNo && (
              <p className="text-danger text-xs mt-1">
                {errors.ewayBillNo.message}
              </p>
            )}
          </div>
          <div className="col-span-12 intro-y sm:col-span-3">
            <FormLabel htmlFor="invoice-number">
              Invoice Number <span className="text-danger ml-1">*</span>
            </FormLabel>
            <FormInput
              id="invoice-number"
              type="number"
              placeholder="98569759"
              className={twMerge([errors.invoiceNo && "border-danger"])}
              {...register("invoiceNo")}
            />
            {errors.invoiceNo && (
              <p className="text-danger text-xs mt-1">
                {errors.invoiceNo.message}
              </p>
            )}
          </div>
        </div>
        {/* END: Other Details */}

        {/* BEGIN: Destination Details */}
        <div className="grid grid-cols-12 gap-4 gap-y-5 border p-5 rounded-xl mt-5">
          <div className="col-span-12 text-base font-semibold">
            Destination Details
          </div>
          <div className="col-span-12 intro-y sm:col-span-4">
            <FormLabel htmlFor="customer-name">
              Customer Name
              <span className="text-danger ml-1">*</span>
            </FormLabel>
            <FormInput
              id="customer-name"
              type="text"
              placeholder="John Doe"
              className={twMerge([errors.customerName && "border-danger"])}
              {...register("customerName")}
            />
            {errors.customerName && (
              <p className="text-danger text-xs mt-1">
                {errors.customerName.message}
              </p>
            )}
          </div>
          <div className="col-span-12 intro-y sm:col-span-4">
            <FormLabel htmlFor="phone-number">
              Phone Number
              <span className="text-danger ml-1">*</span>
            </FormLabel>
            <FormInput
              id="phone-number"
              type="number"
              placeholder="9856947586"
              className={twMerge([errors.customerPhone && "border-danger"])}
              {...register("customerPhone")}
            />
            {errors.customerPhone && (
              <p className="text-danger text-xs mt-1">
                {errors.customerPhone.message}
              </p>
            )}
          </div>
          <div className="col-span-12 intro-y sm:col-span-4">
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              id="email"
              type="email"
              placeholder="sUOyv@example.com"
              className={twMerge([errors.customerEmail && "border-danger"])}
              {...register("customerEmail")}
            />
            {errors.customerEmail && (
              <p className="text-danger text-xs mt-1">
                {errors.customerEmail.message}
              </p>
            )}
          </div>
          <div className="col-span-12 intro-y sm:col-span-4">
            <FormLabel htmlFor="customer-address">
              Customer Address
              <span className="text-danger ml-1">*</span>
            </FormLabel>
            <FormInput
              id="customer-address"
              type="text"
              placeholder="Mumbai"
              className={twMerge([errors.customerAddress && "border-danger"])}
              {...register("customerAddress")}
            />
            {errors.customerAddress && (
              <p className="text-danger text-xs mt-1">
                {errors.customerAddress.message}
              </p>
            )}
          </div>
          <div className="col-span-12 intro-y sm:col-span-4">
            <FormLabel htmlFor="city">City</FormLabel>
            <FormInput
              id="city"
              type="text"
              placeholder="Mumbai"
              className={twMerge([errors.customerCity && "border-danger"])}
              {...register("customerCity")}
            />
            {errors.customerCity && (
              <p className="text-danger text-xs mt-1">
                {errors.customerCity.message}
              </p>
            )}
          </div>
          <div className="col-span-12 intro-y sm:col-span-4">
            <FormLabel htmlFor="state">State</FormLabel>
            <FormInput
              id="state"
              type="text"
              placeholder="Maharashtra"
              className={twMerge([errors.customerState && "border-danger"])}
              {...register("customerState")}
            />
            {errors.customerState && (
              <p className="text-danger text-xs mt-1">
                {errors.customerState.message}
              </p>
            )}
          </div>
        </div>
        {/* END: Destination Details */}
      </form>

      <div className="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
        <Button
          variant="secondary"
          className="w-24"
          onClick={() => setCurrentScreen("ChooseShippingPartners")}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          className="w-24 ml-2"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default OrderDetailsScreen;
