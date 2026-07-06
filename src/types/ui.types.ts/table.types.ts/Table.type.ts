import type { ApartmentType } from "#/types/pagest.types.ts/ApartmentPage.types.ts/Apartment.type";
import type React from "react";

export type TableType = TableActions & {
  theadData: TheadDataType[];
  tbodyData: ApartmentType[];
  columns: ColumnsType[];
};

type TableActions = {
  onFirstAction: (e: React.MouseEvent<HTMLElement>) => void;
  onSecondAction: (e: React.MouseEvent<HTMLElement>) => void;
  onThirdAction: (id: string) => void;
};

export type TableDataType = TableActions & {
  row: ApartmentType;
  columns: ColumnsType[];
};

export type TheadDataType = {
  className: string;
  name: string;
};

export type ColumnsType = {
  key: string;
  className: string;
  render?: (row: ApartmentType) => React.ReactNode;
};

export type ApartmentMenuType = TableActions & {
  id: string;
  onClickOutside: () => void;
  handleActiveMenu: () => void;
};
