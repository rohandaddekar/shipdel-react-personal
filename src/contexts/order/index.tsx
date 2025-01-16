import { createContext, ReactNode, useContext, useState } from "react";
import { OrderData } from "../../types/order";

const defaultOrderData: OrderData = {
  pickupPincode: 0,
  deliveryPincode: 0,
  weight: 0,
  dimensions: [{ quantity: 0, length: 0, width: 0, height: 0 }],
  paymentMode: "Prepaid",
  invoiceValue: 0,
  insurance: false,
  appointmentBasedDelivery: false,
};

interface OrderContextProps {
  orderData: OrderData;
  updateOrderData: (data: Partial<OrderData>) => void;
  defaultOrderData: OrderData;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const useOrderContext = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrderContext must be used within a OrderProvider");
  }

  return context;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orderData, setOrderData] = useState<OrderData>(defaultOrderData);

  const updateOrderData = (data: Partial<OrderData>) => {
    setOrderData((prev) => ({ ...prev, ...data }));
  };

  return (
    <OrderContext.Provider
      value={{ orderData, updateOrderData, defaultOrderData }}
    >
      {children}
    </OrderContext.Provider>
  );
};
