import type { ApartmentType } from "#/types/pagest.types.ts/ApartmentPage.types.ts/Apartment.type";

export type TableType = {
  theadData: TheadDataType[];
  tbodyData: ApartmentType[];
  columns: ColumnsType[];
  variation: string;
  onSecondAction: () => void;
  onThirdAction: () => void;
};

export type TheadDataType = {
  className: string;
  name: string;
};

export type ColumnsType = {
  key: string;
  className: string;
  render?: (row: { key: string; className: string }) => void;
};
