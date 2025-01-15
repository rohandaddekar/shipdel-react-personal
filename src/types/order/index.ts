export interface Dimension {
  quantity: number;
  length: number;
  width: number;
  height: number;
}

export interface OrderData {
  pickupPincode: number;
  deliveryPincode: number;
  weight: number;
  dimensions: Dimension[];
  paymentMode: string;
  invoiceValue: number;
  insurance: boolean;
  appointmentBasedDelivery: boolean;
}
