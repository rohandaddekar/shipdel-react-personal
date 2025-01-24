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

export interface OrderDetails {
  orderId: number;
  pickupPoint: string;
  productType: string;
  sellerName: string;
  sellerAddress: string;
  sellerGstin: string;
  productDesc: string;
  hsnCode: number;
  ewayBillNo: number;
  invoiceNo: number;
  customerName: string;
  customerPhone: number;
  customerEmail: string;
  customerAddress: string;
  customerCity: string;
  customerState: string;
}
