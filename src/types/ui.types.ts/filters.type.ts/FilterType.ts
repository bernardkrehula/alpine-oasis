import type { ActiveApratmentFilter } from "#/types/pagest.types.ts/ApartmentPage.types.ts/ActiveApratmentFilter.type";
import type { FilterData } from "./FilterData";

export type FilterType = {
  filter: FilterData;
  handleFilter: HandleFilter;
  activeFilter: ActiveApratmentFilter;
};

export type HandleFilter = (name: string, id: string) => void;
