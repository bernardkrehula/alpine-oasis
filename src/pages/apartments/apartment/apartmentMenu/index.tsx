import { HiOutlineDuplicate } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

import "./index.css";

const ApartmentMenu = ({ id, handleActiveEditModal }) => {
  return (
    <div className="apartment-menu">
      <div>
        <HiOutlineDuplicate />
        <span>Duplicate</span>
      </div>
      <div onClick={handleActiveEditModal}>
        <FaPencil />
        <span>Edit</span>
      </div>
      <div>
        <FaRegTrashAlt />
        <span>Delete</span>
      </div>
    </div>
  );
};
export default ApartmentMenu;
