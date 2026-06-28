import { HiOutlineDuplicate } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import "./index.css";
import type { ApartmentMenuType } from "#/types/pagest.types.ts/ApartmentPage.types.ts/ApartmentMenu.type";
import { useRef } from "react";
import { useClickOutside } from "#/hooks/useClickOutside";

const ApartmentMenu = ({
  id,
  handleActiveEditModal,
  deleteApartment,
  duplicateApartment,
  onClickOutside,
}: ApartmentMenuType) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClickOutside);

  return (
    <div className="apartment-menu" id={id} ref={ref}>
      <div onClick={duplicateApartment}>
        <HiOutlineDuplicate />
        <span>Duplicate</span>
      </div>
      <div onClick={handleActiveEditModal}>
        <FaPencil />
        <span>Edit</span>
      </div>
      <div onClick={() => deleteApartment(id)}>
        <FaRegTrashAlt />
        <span>Delete</span>
      </div>
    </div>
  );
};
export default ApartmentMenu;
