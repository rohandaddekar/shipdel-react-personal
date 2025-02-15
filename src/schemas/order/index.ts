import * as yup from "yup";

const dimensionSchema = yup.object().shape({
  quantity: yup
    .number()
    .typeError("Quantity must be a number")
    .positive("Quantity must be a positive value")
    .required("Quantity is required"),
  weight: yup
    .number()
    .typeError("Quantity must be a number")
    .positive("Quantity must be a positive value")
    .required("Quantity is required"),
  length: yup
    .number()
    .typeError("Length must be a number")
    .positive("Length must be a positive value")
    .required("Length is required"),
  width: yup
    .number()
    .typeError("Width must be a number")
    .positive("Width must be a positive value")
    .required("Width is required"),
  height: yup
    .number()
    .typeError("Height must be a number")
    .positive("Height must be a positive value")
    .required("Height is required"),
});

const orderSchema = yup.object().shape({
  pickupPincode: yup
    .number()
    .typeError("Pickup Pincode must be a number")
    .positive("Pickup Pincode must be positive")
    .required("Pickup Pincode is required"),
  deliveryPincode: yup
    .number()
    .typeError("Delivery Pincode must be a number")
    .positive("Delivery Pincode must be positive")
    .required("Delivery Pincode is required"),
  dimensions: yup
    .array()
    .of(dimensionSchema)
    .min(1, "At least one dimension set is required")
    .required("Dimensions are required"),
  paymentMode: yup.string().required("Payment Mode is required"),
  invoiceValue: yup
    .number()
    .typeError("Invoice Value must be a number")
    .positive("Invoice Value must be positive")
    .required("Invoice Value is required"),
  insurance: yup.boolean().required("Insurance selection is required"),
  appointmentBasedDelivery: yup
    .boolean()
    .required("Appointment-based delivery selection is required"),
});

const orderDetailsSchema = yup.object().shape({
  orderId: yup
    .number()
    .typeError("Order ID must be a number")
    .positive("Order ID must be positive")
    .required("Order ID is required"),
  pickupPoint: yup.string().required("Pickup Point is required"),
  productType: yup.string().required("Product Type is required"),
  sellerName: yup.string().required("Seller Name is required"),
  sellerAddress: yup.string().required("Seller Address is required"),
  productDesc: yup.string().required("Product Description is required"),
  invoiceNo: yup
    .number()
    .typeError("Invoice Number must be a number")
    .positive("Invoice Number must be positive")
    .required("Invoice Number is required"),
  customerName: yup.string().required("Customer Name is required"),
  customerPhone: yup
    .number()
    .typeError("Customer Phone must be a number")
    .positive("Customer Phone must be positive")
    .required("Customer Phone is required"),
  customerAddress: yup.string().required("Customer Address is required"),
  customerCity: yup.string().required("Customer City is required"),
  customerState: yup.string().required("Customer State is required"),
});

export { dimensionSchema, orderSchema, orderDetailsSchema };
