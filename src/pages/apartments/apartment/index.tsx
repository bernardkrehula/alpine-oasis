import React, { useState } from "react";
import "./index.css";
import ApartmentEditModal from "./apartmentEditModal";
import Btn from "#/components/ui/btn";
import ApartmentMenu from "./apartmentMenu";
import { requestEditApartment } from "#/api/requestEditApartment";
import { requestApartmentDelete } from "#/api/requestApartmentDelete";
import { requestDuplicateApartment } from "#/api/requestDuplicateApartment";

const Apartment = ({ apartment, refetch }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [activeEditModal, setActiveEditModal] = useState<boolean>(false);

  const { id, name, capacity, price, discount, img } = apartment;

  const handleEditApartment = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Number(e.target.id);
    const formData = Object.fromEntries(new FormData(e.target));
    const data = { id, ...formData };
    await requestEditApartment(data);
    handleActiveEditModal();
    refetch();
  };

  const deleteApartment = async(id: number) => {
    await requestApartmentDelete(id);
    refetch();
  };

  const duplicateApartment = async(id: number) => {
    if(id === apartment.id) await requestDuplicateApartment(apartment);
    refetch();
  }
  const handleActiveEditModal = () => {
    setActiveEditModal((prev) => !prev);
  };
  const handleActiveMenu = () => {
    setActiveMenu((prev) => !prev);
  };
  return (
    <div className="apartment" id={id}>
      <div className="apartment-block">
        <img src={img} />
        <span>{name}</span>
      </div>
      <div className="capacity">
        <span>Fits up to {capacity} guests</span>
      </div>
      <div className="price">
        <span>${price.toFixed(2)}</span>
      </div>
      <div className="discount">
        <span>${discount.toFixed(2)}</span>
      </div>
      <Btn onClick={handleActiveMenu} variation="ghost" size="md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path d="M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path d="M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </svg>
      </Btn>
      {activeMenu && (
        <ApartmentMenu
          id={apartment.id}
          handleActiveEditModal={handleActiveEditModal}
          deleteApartment={deleteApartment}
          duplicateApartment={duplicateApartment}
        />
      )}
      {activeEditModal && (
        <ApartmentEditModal
          apartment={apartment}
          handleEditApartment={handleEditApartment}
          handleActiveEditModal={handleActiveEditModal}
        />
      )}
    </div>
  );
};
export default Apartment;
