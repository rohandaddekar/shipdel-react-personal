import Button from "../../../../base-components/Button";
import { Dialog } from "../../../../base-components/Headless";

interface PartnerDetailedModalProps {
  open: boolean;
  onClose: () => void;
  details: any;
}

const PartnerDetailedModal = ({ open, onClose }: PartnerDetailedModalProps) => {
  return (
    <>
      <Dialog open={open} onClose={onClose} size="xl">
        <Dialog.Panel className="p-10 text-center">
          {/* BEGIN: Hide Modal Toggle */}
          <Button
            as="a"
            href="#"
            variant="primary"
            className="mr-1"
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              onClose();
            }}
          >
            Hide Modal
          </Button>
          {/* END: Hide Modal Toggle */}
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default PartnerDetailedModal;
