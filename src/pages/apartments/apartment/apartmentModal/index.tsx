import Btn from "#/components/ui/btn";
import Input from "#/components/ui/input";
import type { ApartmentModalType } from "#/types/pagest.types.ts/ApartmentPage.types.ts/ApartmentModal.type";
import { apartmentModalConfig } from "./apartmentModalConfig";
import "./index.css";
import { CgClose } from "react-icons/cg";

//Dodati lokalni error handling da se dode greska naprimjer "You must set name to apratment"

const ApartmentModal = ({
  handleActiveModal,
  handleApartmentData,
  apartment,
  activeModal
}: ApartmentModalType) => {
  return (
    <form
      className="apartment-edit-modal"
      onSubmit={handleApartmentData}
      id={apartment?.id}
    >
      <div className="backdrop" />
      <div className="apartment-edit-content">
        <CgClose onClick={handleActiveModal} className="x-icon" />
    
        <div className="apartment-inputs">
          {apartmentModalConfig.map((property) => {
            const { label, type, name } = property;

            if (name === "img") return;
            return (
              <div>
                <span>{label}</span>
                <Input
                  name={name}
                  defaultValue={apartment ? apartment[name as keyof typeof apartment]  : ''}
                  variation="custom-search"
                  type={type}
                  required
                />
              </div>
            );
          })}
        </div>

        <div className="apartment-edit-btns">
          <Btn
            type="button"
            onClick={handleActiveModal}
            variation="primary"
            size="lg"
          >
            Cancel
          </Btn>
          <Btn type="submit" variation="primary" size="lg">
            {activeModal ? "Add" : "Edit"}
          </Btn>
        </div>
      </div>
    </form>
  );
};
export default ApartmentModal;
