import type { ApartmentType } from "#/types/pagest.types.ts/ApartmentPage.types.ts/Apartment.type";
import type { ColumnsType, TheadDataType } from "#/types/ui.types.ts/table.types.ts/Table.type";

export const theadData: TheadDataType[] = [
  { className: "apartment-th", name: "Apartment" },
  { className: "capacity-th", name: "Capacity" },
  { className: "price-th", name: "Price" },
  { className: "discount-th", name: "Discount" },
];

export const columns: ColumnsType[] = [
  { key: "id", className: "id-td" },
  {
    key: "name",
    className: "name-td",
    render: (row) => (
      <div className="flex-container">
        <img src={row.img} alt={row.name} />
        <span>{row.name}</span>
      </div>
    ),
  },
  {
    key: "capacity",
    className: "capacity-td",
    render: (row) => `Fits up to ${row.capacity} guests`,
  },
  { key: "price", className: "price-td", render: (row) => `$${row.price}` },
  {
    key: "discount",
    className: "discount-td",
    render: (row) => `$${row.discount}`,
  },
];

export const defaultApartment: ApartmentType = {
  id: "",
  name: "",
  capacity: 0,
  price: 0,
  discount: 0,
  description: "",
  img: "",
};
