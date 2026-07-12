import { HiOutlineDuplicate } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import "./index.css";
import { useRef } from "react";
import { useClickOutside } from "#/hooks/useClickOutside";
import type { ApartmentMenuType } from "#/types/ui.types.ts/table.types.ts/Table.type";

const EditTableMenu = ({
  id,
  onSecondAction,
  onThirdAction,
  onFirstAction,
  onClickOutside,
  handleActiveMenu
}: ApartmentMenuType) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClickOutside);

  return (
    <div className="apartment-menu" id={id} ref={ref} onClick={handleActiveMenu}>
      <div onClick={onFirstAction}>
        <HiOutlineDuplicate />
        <span>Duplicate</span>
      </div>
      <div onClick={onSecondAction}>
        <FaPencil />
        <span>Edit</span>
      </div>
      <div onClick={() => onThirdAction(id)}>
        <FaRegTrashAlt />
        <span>Delete</span>
      </div>
    </div>
  );
};
export default EditTableMenu;
