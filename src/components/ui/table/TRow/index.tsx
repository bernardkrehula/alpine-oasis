import { HiDotsVertical } from "react-icons/hi";
import Btn from "../../btn";
import "./index.css";
import EditTableMenu from "#/pages/apartments/apartment/apartmentMenu";
import { useState } from "react";
import type { ColumnsType, TableDataType } from "#/types/ui.types.ts/table.types.ts/Table.type";

const TRow = ({ row, columns, onFirstAction, onSecondAction, onThirdAction }: TableDataType) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const handleActiveMenu = () => {
    setActiveMenu((prev) => !prev);
  };

  return (
    <tr id={row.id}>
      {columns.map((col: ColumnsType) => {
        if (col.render) return <td key={col.key} data-name={col.key}>{col.render(row)}</td>;
      })}
      <td className="menu-btn" onClick={handleActiveMenu}>
        <Btn type="button" variation="ghost-dark" size="lg">
          <HiDotsVertical />
        </Btn>
        {activeMenu && (
          <EditTableMenu
            id={row.id}
            onFirstAction={onFirstAction}
            onThirdAction={onThirdAction}
            onSecondAction={onSecondAction}
            onClickOutside={handleActiveMenu}
            handleActiveMenu={handleActiveMenu}
          />
        )}
      </td>
    </tr>
  );
};
export default TRow;
