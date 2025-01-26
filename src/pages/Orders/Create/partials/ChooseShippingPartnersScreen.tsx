import _ from "lodash";
import { ScreenType } from "..";
import Button from "../../../../base-components/Button";
import Lucide from "../../../../base-components/Lucide";
import { Dispatch, SetStateAction, useState } from "react";
import PartnerDetailedModal from "./PartnerDetailedModal";
import { useOrderContext } from "../../../../contexts/order";
import { FormSelect } from "../../../../base-components/Form";
import Pagination from "../../../../base-components/Pagination";

interface ChooseShippingPartnersScreenProps {
  setCurrentScreen: Dispatch<SetStateAction<ScreenType>>;
}

interface ShippingPartnerProps {
  partner: ShippingPartner;
  setCurrentScreen: Dispatch<SetStateAction<ScreenType>>;
}

export interface ShippingPartner {
  id: number;
  logo: string;
  name: string;
  type: string;
  weight: {
    minimumWeight: number;
    volumeWeight: number;
    chargedWeight: number;
  };
  price: number;
  charges: {
    min: number;
    overheads: {
      docket: number;
      weight: number;
      fuel: number;
      rov: number;
    };
    additional: {
      pickup: number;
      gst: number;
    };
  };
}

const SHIPPING_PARTNERS_LIST: ShippingPartner[] = [
  {
    id: 1,
    logo: "https://uknowva.com/images/casestudy/delhivery/logo.png",
    name: "Delhivery",
    type: "B2B",
    weight: {
      minimumWeight: 200,
      volumeWeight: 200,
      chargedWeight: 200,
    },
    price: 1499,
    charges: {
      min: 100,
      overheads: {
        docket: 100,
        weight: 50,
        fuel: 50,
        rov: 50,
      },
      additional: {
        pickup: 100,
        gst: 50,
      },
    },
  },
  {
    id: 2,
    logo: "https://img.etimg.com/thumb/msid-49225224,width-300,height-225,imgsize-35118,resizemode-75/.jpg",
    name: "Flipkart",
    type: "B2C",
    weight: {
      minimumWeight: 200,
      volumeWeight: 200,
      chargedWeight: 200,
    },
    price: 2499,
    charges: {
      min: 100,
      overheads: {
        docket: 100,
        weight: 50,
        fuel: 50,
        rov: 50,
      },
      additional: {
        pickup: 100,
        gst: 50,
      },
    },
  },
];

const ShippingPartnerCard = ({
  partner,
  setCurrentScreen,
}: ShippingPartnerProps) => {
  const [showPartnerDetailsModal, setShowPartnerDetailsModal] = useState(false);

  return (
    <>
      <div className="col-span-12 intro-y md:col-span-6 lg:col-span-4 xl:col-span-3">
        <div className="box">
          <div className="h-52 overflow-hidden rounded-t-md image-fit before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black before:to-black/5">
            <img
              alt={partner.name}
              src={partner.logo}
              className="!object-contain"
            />
            {partner.type && (
              <span className="absolute top-0 z-10 px-3 py-1 mt-3 ml-3 text-sm text-white font-bold rounded bg-pending">
                {partner.type}
              </span>
            )}
            <div className="absolute bottom-0 z-10 px-5 pb-6 text-white">
              <p className="block text-xl font-bold">{partner.name}</p>
            </div>
          </div>
          <div className="px-5 pb-3">
            <div className="mt-5 text-slate-600 dark:text-slate-500">
              <div className="flex items-center mt-2">
                <Lucide icon="Layers" className="w-4 h-4 mr-2" />
                <div className="flex-1 flex items-center gap-3">
                  Minimum Weight:{" "}
                  <p className="font-medium">
                    {partner.weight.minimumWeight} Kg
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between py-3 px-5 border-t border-slate-200/60 dark:border-darkmode-400">
            <p className="text-lg font-bold text-primary">₹{partner.price}</p>

            <div className="flex-1 flex items-center justify-end gap-2">
              <Button
                variant="secondary"
                onClick={() => setShowPartnerDetailsModal(true)}
              >
                <Lucide icon="Eye" className="w-5 h-5" />
              </Button>
              <Button
                variant="primary"
                onClick={() => setCurrentScreen("OrderDetails")}
              >
                <Lucide icon="Truck" className="w-5 h-5 mr-2" />
                Ship
              </Button>
            </div>
          </div>
        </div>

        <PartnerDetailedModal
          open={showPartnerDetailsModal}
          onClose={() => setShowPartnerDetailsModal(false)}
          partner={partner}
        />
      </div>
    </>
  );
};

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

          <Button
            variant="secondary"
            onClick={() => setCurrentScreen("CreateNewOrder")}
          >
            <Lucide icon="ChevronLeft" className="w-4 h-4 mr-1" />
            Back
          </Button>
        </div>

        {/* BEGIN: Shipping partners list */}
        {SHIPPING_PARTNERS_LIST.map((partner, idx) => (
          <ShippingPartnerCard
            key={idx}
            partner={partner}
            setCurrentScreen={setCurrentScreen}
          />
        ))}
        {/* END: Shipping partners list */}

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
