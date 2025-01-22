import Button from "../../../../base-components/Button";
import Lucide from "../../../../base-components/Lucide";
import { Dialog } from "../../../../base-components/Headless";
import { ShippingPartner } from "./ChooseShippingPartnersScreen";

interface PartnerDetailedModalProps {
  open: boolean;
  onClose: () => void;
  partner: ShippingPartner;
}

const PartnerDetailedModal = ({
  open,
  onClose,
  partner,
}: PartnerDetailedModalProps) => {
  const closeModalHandler = () => onClose();

  return (
    <>
      <Dialog open={open} onClose={onClose} size="2xl">
        <Dialog.Panel className="p-7 pb-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6 xl:col-span-3">
              <div className="min-h-52 h-full overflow-hidden rounded-lg image-fit before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black before:to-black/5">
                <img
                  alt={partner.name}
                  src={partner.logo}
                  className="!object-contain"
                />
                {partner.type && (
                  <span className="absolute top-0 left-0 z-10 px-3 py-1 mt-3 ml-3 text-sm text-white font-bold rounded bg-pending">
                    {partner.type}
                  </span>
                )}
                <div className="absolute bottom-0 z-10 px-5 pb-6 text-white">
                  <p className="block text-xl font-bold">{partner.name}</p>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 xl:col-span-6 bg-slate-100 p-8 rounded-lg">
              <div className="grid grid-cols-2">
                <div className="mr-7">
                  <p className="text-lg font-medium mb-3">Overheads</p>

                  <ul className="space-y-1">
                    <li className="text-slate-500 flex items-center justify-between">
                      Docket Charge:{" "}
                      <span className="font-semibold">
                        ₹ {partner.charges.overheads.docket ?? "-"}
                      </span>
                    </li>
                    <li className="text-slate-500 flex items-center justify-between">
                      Weight Charge:{" "}
                      <span className="font-semibold">
                        ₹ {partner.charges.overheads.weight ?? "-"}
                      </span>
                    </li>
                    <li className="text-slate-500 flex items-center justify-between">
                      Fuel Charge:{" "}
                      <span className="font-semibold">
                        ₹ {partner.charges.overheads.fuel ?? "-"}
                      </span>
                    </li>
                    <li className="text-slate-500 flex items-center justify-between">
                      ROV Charge:{" "}
                      <span className="font-semibold">
                        ₹ {partner.charges.overheads.rov ?? "-"}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="border-l border-dashed pl-7">
                  <p className="text-lg font-medium mb-3">Additional</p>

                  <ul className="space-y-1">
                    <li className="text-slate-500 flex items-center justify-between">
                      Pickup Charge:{" "}
                      <span className="font-semibold">
                        ₹ {partner.charges.additional.pickup ?? "-"}
                      </span>
                    </li>
                    <li className="text-slate-500 flex items-center justify-between">
                      GST:{" "}
                      <span className="font-semibold">
                        ₹ {partner.charges.additional.gst ?? "-"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-500 flex items-center justify-between mt-3">
                Volume Weight:{" "}
                <span className="font-semibold">
                  ₹ {partner.weight.volumeWeight ?? "-"}
                </span>
              </p>
              <p className="text-slate-500 flex items-center justify-between mt-1">
                Charged Weight:{" "}
                <span className="font-semibold">
                  ₹ {partner.weight.chargedWeight ?? "-"}
                </span>
              </p>
            </div>

            <div className="col-span-12 lg:col-span-6 xl:col-span-3 bg-primary p-8 rounded-lg">
              <div className="h-full flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-white font-bold text-3xl">
                    ₹ {partner.price ?? "-"}
                  </p>

                  <p className="text-white flex items-center justify-between mt-5">
                    Min. Charge:{" "}
                    <span className="font-semibold">
                      ₹ {partner.charges.min ?? "-"} + GST
                    </span>
                  </p>
                </div>

                <Button className="text-black bg-white w-full mt-5 hover:bg-white/80">
                  <Lucide icon="Truck" className="w-5 h-5 mr-2" />
                  Ship
                </Button>
                <Button
                  className="text-white w-full mt-2 hover:bg-white hover:text-black"
                  onClick={closeModalHandler}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-dashed flex items-center justify-between mt-5 pt-5">
            <ul className="flex items-center gap-5">
              <li className="flex items-center gap-2 text-gray-500 font-medium">
                <Lucide icon="MapPin" className="w-4 h-4" />
                Real Time Tracking -
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100">
                  <Lucide icon="Check" className="w-4 h-4 text-green-500" />
                </span>
              </li>
              <li className="flex items-center gap-2 text-gray-500 font-medium border-l border-dashed pl-5">
                <Lucide icon="PhoneCall" className="w-4 h-4" />
                Call Before Delivery -
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100">
                  <Lucide icon="X" className="w-4 h-4 text-red-500" />
                </span>
              </li>
              <li className="flex items-center gap-2 text-gray-500 font-medium border-l border-dashed pl-5">
                <Lucide icon="File" className="w-4 h-4" />
                POD - <span className="text-green-500">Instant</span>
              </li>
            </ul>

            <ul className="flex items-center gap-5">
              <li className="flex items-center gap-2 text-gray-500 font-medium">
                <Lucide icon="Package" className="w-4 h-4" />
                Estimated Date -
                <span className="text-primary">25 Jan 2025</span>
              </li>
              <li className="flex items-center gap-2 text-gray-500 font-medium border-l border-dashed pl-5">
                <Lucide icon="Truck" className="w-4 h-4" />
                Pickup Date -<span className="text-primary">Today</span>
              </li>
            </ul>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default PartnerDetailedModal;
