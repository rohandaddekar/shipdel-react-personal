import OrderRates from "../../../components/Orders/OrderRates";
import { OrderProvider } from "../../../contexts/order";

const RateCalculator = () => {
  return (
    <>
      <OrderProvider>
        <div className="bg-white p-5 rounded-3xl">
          <h1 className="text-lg font-bold mb-5">Rate Calculator</h1>

          <OrderRates isCalculator={true} />
        </div>
      </OrderProvider>
    </>
  );
};

export default RateCalculator;
