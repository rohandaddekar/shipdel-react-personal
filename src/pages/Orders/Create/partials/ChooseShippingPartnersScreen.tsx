import _ from "lodash";
import { ScreenType } from "..";
import fakerData from "../../../../utils/faker";
import { Dispatch, SetStateAction } from "react";
import Button from "../../../../base-components/Button";
import Lucide from "../../../../base-components/Lucide";
import { useOrderContext } from "../../../../contexts/order";
import { FormSelect } from "../../../../base-components/Form";
import Pagination from "../../../../base-components/Pagination";

interface ChooseShippingPartnersScreenProps {
  setCurrentScreen: Dispatch<SetStateAction<ScreenType>>;
}

const ChooseShippingPartnersScreen = ({
  setCurrentScreen,
}: ChooseShippingPartnersScreenProps) => {
  const { orderData } = useOrderContext();

  console.log("data in shipping", orderData);

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 bg-slate-100 p-8 rounded-lg flex items-center justify-between gap-2">
          <div className="w-1/2 flex items-center gap-10 border-r pr-2 border-slate-300">
            <div>
              <p className="text-xs">Pickup From</p>
              <p className="text-lg text-primary font-bold mt-1">
                {orderData.pickupPincode}
              </p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-slate-300 rounded-full">
              <Lucide icon="ArrowRight" className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs">Deliver To</p>
              <p className="text-lg text-primary font-bold mt-1">
                {orderData.deliveryPincode}
              </p>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-end gap-10 pl-2">
            <div>
              <p className="text-xs">Order Value</p>
              <p className="text-lg text-primary font-bold mt-1">
                ₹ {orderData.invoiceValue}
              </p>
            </div>
            <div>
              <p className="text-xs">Payment Mode</p>
              <p className="text-lg text-primary font-bold mt-1">
                {orderData.paymentMode}
              </p>
            </div>
            <div>
              <p className="text-xs">Dead Weight</p>
              <p className="text-lg text-primary font-bold mt-1">
                {orderData.weight} Kg
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
          <h2 className="text-lg font-bold">Shipping Partners</h2>

          <div className="text-slate-500">Showing 1 to 10 of 150 entries</div>

          <Button variant="secondary" onClick={() => {}}>
            <Lucide icon="ChevronLeft" className="w-4 h-4 mr-1" />
            Back
          </Button>
        </div>

        {/* BEGIN: Users Layout */}
        {_.take(fakerData, 12).map((faker, fakerKey) => (
          <div
            key={fakerKey}
            className="col-span-12 intro-y md:col-span-6 lg:col-span-4 xl:col-span-3"
          >
            <div className="box">
              <div className="p-5">
                <div className="h-40 overflow-hidden rounded-md 2xl:h-56 image-fit before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black before:to-black/10">
                  <img
                    alt="Midone - HTML Admin Template"
                    className="rounded-md"
                    src={faker.images[0]}
                  />
                  {faker.trueFalse[0] && (
                    <span className="absolute top-0 z-10 px-2 py-1 m-5 text-xs text-white rounded bg-pending/80">
                      Featured
                    </span>
                  )}
                  <div className="absolute bottom-0 z-10 px-5 pb-6 text-white">
                    <a href="" className="block text-base font-medium">
                      {faker.products[0].name}
                    </a>
                    <span className="mt-3 text-xs text-white/90">
                      {faker.products[0].category}
                    </span>
                  </div>
                </div>
                <div className="mt-5 text-slate-600 dark:text-slate-500">
                  <div className="flex items-center">
                    <Lucide icon="Link" className="w-4 h-4 mr-2" /> Price: $
                    {faker.totals[0]}
                  </div>
                  <div className="flex items-center mt-2">
                    <Lucide icon="Layers" className="w-4 h-4 mr-2" /> Remaining
                    Stock:
                    {faker.stocks[0]}
                  </div>
                  <div className="flex items-center mt-2">
                    <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />{" "}
                    Status:
                    {faker.trueFalse[0] ? "Active" : "Inactive"}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center p-5 border-t lg:justify-end border-slate-200/60 dark:border-darkmode-400">
                <a className="flex items-center mr-auto text-primary" href="#">
                  <Lucide icon="Eye" className="w-4 h-4 mr-1" /> Preview
                </a>
                <a className="flex items-center mr-3" href="#">
                  <Lucide icon="CheckSquare" className="w-4 h-4 mr-1" /> Edit
                </a>
                <a className="flex items-center text-danger" href="#">
                  <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Delete
                </a>
              </div>
            </div>
          </div>
        ))}
        {/* END: Users Layout */}

        {/* BEGIN: Pagination */}
        <div className="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap">
          <Pagination className="w-full sm:w-auto sm:mr-auto">
            <Pagination.Link>
              <Lucide icon="ChevronsLeft" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronLeft" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>...</Pagination.Link>
            <Pagination.Link>1</Pagination.Link>
            <Pagination.Link active>2</Pagination.Link>
            <Pagination.Link>3</Pagination.Link>
            <Pagination.Link>...</Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronRight" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronsRight" className="w-4 h-4" />
            </Pagination.Link>
          </Pagination>
          <FormSelect className="w-20 mt-3 !box sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </FormSelect>
        </div>
        {/* END: Pagination */}
      </div>
    </>
  );
};

export default ChooseShippingPartnersScreen;
