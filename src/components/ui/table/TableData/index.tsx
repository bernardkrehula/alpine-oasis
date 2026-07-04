import { HiDotsVertical } from "react-icons/hi";
import Btn from "../../btn";
import "./index.css";
import EditTableMenu from "#/pages/apartments/apartment/apartmentMenu";
import { useState } from "react";

const TableData = ({ row, columns, onSecondAction, onThirdAction }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const handleActiveMenu = () => {
    setActiveMenu((prev) => !prev);
  };

  return (
    <tr>
      {columns.map((col) => {
        if (col.render) return <td>{col.render(row)}</td>;
      })}
      <td className="menu-btn" onClick={handleActiveMenu}>
        <Btn type="button" variation="ghost-dark" size="lg">
          <HiDotsVertical />
        </Btn>
        {activeMenu && (
          <EditTableMenu
            id={row.id}
            onFirstAction={handleActiveMenu}
            onThirdAction={onThirdAction}
            onSecondAction={onSecondAction}
            onClickOutside={handleActiveMenu}
          />
        )}
      </td>
    </tr>
  );
};
export default TableData;
